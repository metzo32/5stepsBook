"use client";

import { useFormContext, useWatch } from "react-hook-form";
import useHandleNextStep from "../hooks/useHandleNextStep";
import { ColGapDiv } from "@/styles/divs";
import RenderSteps from "../RenderSteps";
import { ButtonStrong } from "@/styles/buttons";

export default function InnerForm() {
  const { handleSubmit } = useFormContext();
  const { currentStep, handleNextClick } = useHandleNextStep();
  const bookId = useWatch({ name: "bookId" });

  const onValid = (data: any) => {
    handleNextClick();
  };

  const onInvalid = (errors: any) => {
    console.log("유효성 검증 실패", errors);
  };

  return (
    <form noValidate onSubmit={handleSubmit(onValid, onInvalid)}>
      <ColGapDiv>
        <RenderSteps />
        {bookId && currentStep < 5 && (
          <ButtonStrong type="submit">다음</ButtonStrong>
        )}
      </ColGapDiv>
    </form>
  );
}
