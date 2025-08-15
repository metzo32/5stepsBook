"use client";

import { useFormContext, useWatch } from "react-hook-form";
import { useRouter } from "next/router";
import useHandleNextStep from "../hooks/useHandleNextStep";
import RenderSteps from "../RenderSteps";
import { defaultFormValues } from "@/types/defaultFormValues";
import { ColGapDiv } from "@/styles/divs";
import { ButtonMedium, ButtonStrong } from "@/styles/buttons";

export default function InnerForm() {
  const { handleSubmit, reset } = useFormContext();
  const { currentStep, handleNextClick } = useHandleNextStep();
  const bookId = useWatch({ name: "bookId" });

  const router = useRouter();

  const onValid = (data: any) => {
    handleNextClick();
  };

  const onInvalid = (errors: any) => {
    console.log("유효성 검증 실패", errors);
  };

  const handleReset = () => {
    reset(defaultFormValues);
    router.push("/");
  };

  return (
    <form noValidate onSubmit={handleSubmit(onValid, onInvalid)}>
      <ColGapDiv>
        <RenderSteps />
        {bookId && currentStep < 5 && (
          <ButtonStrong type="submit">다음</ButtonStrong>
        )}
        {bookId && (
          <ButtonMedium type="submit" onClick={handleReset}>
            초기화
          </ButtonMedium>
        )}
      </ColGapDiv>
    </form>
  );
}
