"use client";

import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Head from "next/head";
import useHandleNextStep from "@/components/hooks/useHandleNextStep";
import AppFormView from "@/components/appFormView/AppFormView";
import RenderSteps from "@/components/RenderSteps";

import { Main } from "@/styles/textTags";
import { ButtonStrong } from "@/styles/buttons";
import { defaultFormValues } from "@/types/defaultFormValues";

export default function Home() {
  const { currentStep, handleNextClick } = useHandleNextStep();
  const methods = useForm({ defaultValues: defaultFormValues });

  // defaulValues를 설정하면 새로고침 한 경우 초기화 되는 문제가 있다? 아닌 것 같다?

  useEffect(() => {
    fetch("/api/books")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return true;
      })
      .catch((err) => {
        console.error("책 데이터 요청 실패:", err);
      });
  }, []);

  const onValid = (data: any) => {
    handleNextClick();
  };

  const onInvalid = (errors: any) => {
    console.log("유효성 검증 실패", errors);
  };

  return (
    <>
      <Head>
        <title>5단계 도서</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <FormProvider {...methods}>
          <form noValidate onSubmit={methods.handleSubmit(onValid, onInvalid)}>
            {RenderSteps()}
            {currentStep < 5 && <ButtonStrong type="submit">다음</ButtonStrong>}
          </form>
          <AppFormView />
        </FormProvider>
      </Main>
    </>
  );
}
