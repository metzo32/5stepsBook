"use client";

import { Suspense, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { defaultFormValues } from "@/types/defaultFormValues";
import InnerForm from "./InnerForm";
import AppFormView from "../appFormView/AppFormView";
import type { FormValues } from "@/types/defaultFormValues";
import dayjs from "dayjs";
import { dayjsToString } from "../modules/dayjsToString";

const STORAGE_KEY = "rhf.formValues";

export default function Content() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [initialValues, setInitialValues] =
    useState<FormValues>(defaultFormValues);

  useEffect(() => {
    if (typeof window === "undefined") {
      setIsLoaded(true);
      return;
    }

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<FormValues>;
        const restored: FormValues = {
          ...defaultFormValues,
          ...parsed,
          startDate: parsed.startDate
            ? dayjs(parsed.startDate as unknown as string)
            : null,
          endDate: parsed.endDate
            ? dayjs(parsed.endDate as unknown as string)
            : null,
        };
        setInitialValues(restored);
      }
    } catch (error) {
      console.log("폼 데이터 로드 실패", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const methods = useForm<FormValues>({
    defaultValues: initialValues,
    mode: "onChange",
  });

  useEffect(() => {
    if (isLoaded && initialValues !== defaultFormValues) {
      methods.reset(initialValues);
    }
  }, [isLoaded, initialValues, methods]);

  useEffect(() => {
    if (!isLoaded) return; // 데이터가 로드되었는지 먼저 확인

    // watch를 통해 폼 값 바뀌는 것 감지, 폼 값이 바뀔때마다 콜백 실행
    const subscription = methods.watch((value) => {
      try {
        const v = value as FormValues;

        // 폼데이터 직렬화(serialize)
        const serializedObj = {
          ...v,
          startDate: v.startDate ? dayjsToString(v.startDate) : null,
          endDate: v.endDate ? dayjsToString(v.endDate) : null,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(serializedObj));
      } catch (error) {
        console.log("로컬 스토리지 저장 실패", error);
      }
    });
    return () => subscription.unsubscribe();
  }, [methods, isLoaded]);

  if (!isLoaded) {
    return <div>폼 로드 중...</div>;
  }

  return (
    <Suspense fallback={<div>책 목록 불러오는 중...</div>}>
      <FormProvider {...methods}>
        <InnerForm />
        <AppFormView />
      </FormProvider>
    </Suspense>
  );
}
