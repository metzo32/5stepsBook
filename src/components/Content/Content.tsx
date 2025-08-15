"use client";

import { Suspense } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { defaultFormValues } from "@/types/defaultFormValues";
import InnerForm from "./InnerForm";
import AppFormView from "../appFormView/AppFormView";

export default function Content() {
  const methods = useForm({ defaultValues: { ...defaultFormValues } });

  return (
    <Suspense fallback={<div>책 목록 불러오는 중...</div>}>
      <FormProvider {...methods}>
        <InnerForm />
        <AppFormView />
      </FormProvider>
    </Suspense>
  );
}
