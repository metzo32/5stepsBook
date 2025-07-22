"use client";

import { ButtonStrong } from "@/styles/buttons";
import Head from "next/head";
import Step01 from "@/components/step01/step01";
import Step02 from "@/components/step02/step02";
import Step03 from "@/components/step03/step03";
import Step04 from "@/components/step04/step04";
import Step05 from "@/components/step05/step05";
import AppFormView from "@/components/appFormView/AppFormView";
import { Main } from "@/styles/textTags";
import { ColGapDiv } from "@/styles/divs";
import { useEffect } from "react";
import useHandleNextStep from "@/components/hooks/useHandleNextStep";
import { useForm } from "react-hook-form";

export default function Home() {
  const { currentStep, handleNextClick } = useHandleNextStep();
  const { handleSubmit } = useForm();

  useEffect(() => {
    fetch("/api/books")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("책 데이터:", data);
      })
      .catch((err) => {
        console.error("책 데이터 요청 실패:", err);
      });
  }, []);

  const renderStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <Step01 />;
      case 2:
        return <Step02 />;
      case 3:
        return <Step03 />;
      case 4:
        return <Step04 />;
      case 5:
        return <Step05 />;
      default:
        return <Step01 />;
    }
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
        <ColGapDiv>
            {renderStepComponent()}
          {currentStep < 5 && (
            <ButtonStrong type="submit" onClick={handleNextClick}>다음</ButtonStrong>
          )}
        </ColGapDiv>
        <AppFormView />
      </Main>
    </>
  );
}
