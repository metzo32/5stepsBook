"use Client";

import { Suspense } from "react";
import { FormProvider, useForm } from "react-hook-form";
import useHandleNextStep from "../hooks/useHandleNextStep";
import { defaultFormValues } from "@/types/defaultFormValues";
import RenderSteps from "../RenderSteps";
import AppFormView from "../appFormView/AppFormView";
import { ButtonStrong } from "@/styles/buttons";
import { ColGapDiv } from "@/styles/divs";

export default function Content() {
  const { currentStep, handleNextClick } = useHandleNextStep();
  const methods = useForm({ defaultValues: { ...defaultFormValues } });

  const onValid = (data: any) => {
    handleNextClick();
  };

  const onInvalid = (errors: any) => {
    console.log("유효성 검증 실패", errors);
  };

  return (
    <Suspense fallback={<div>책 목록 불러오는 중...</div>}>
      <FormProvider {...methods}>
        <form noValidate onSubmit={methods.handleSubmit(onValid, onInvalid)}>
          <ColGapDiv>
            <RenderSteps />
            {currentStep < 5 && <ButtonStrong type="submit">다음</ButtonStrong>}
          </ColGapDiv>
        </form>
        <AppFormView />
      </FormProvider>
    </Suspense>
  );
}
