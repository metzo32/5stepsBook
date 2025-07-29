import { ColGapDiv, RowGapDiv } from "@/styles/divs";
import { LabelClickable } from "@/styles/textTags";
import React from "react";
import { useFormContext } from "react-hook-form";

export default function Step05() {
  enum PublicStatusEnum {
    PUBLIC = "공개",
    PRIVATE = "비공개",
  }

  const PublicStatus = {
    [PublicStatusEnum.PUBLIC]: "공개",
    [PublicStatusEnum.PRIVATE]: "공개",
  };

  const PublicStatusOptions = Object.values(PublicStatusEnum).map((status) => ({
    label: status,
    value: status,
  }));

  const {
    register,
    formState: { errors, isSubmitted },
  } = useFormContext();

  const handlePublicStatus = () => {};

  return (
    <ColGapDiv>
      <h1>공개 여부</h1>
      <ColGapDiv>
        {PublicStatusOptions.map(({ value, label }) => (
          <RowGapDiv key={value}>
            <input
              id={value}
              value={value}
              type="radio"
              {...register("readStatus", {
                required: "독서 상태를 선택해주세요",
                onChange: handlePublicStatus,
              })}
              aria-invalid={
                isSubmitted ? (errors.readStatus ? "true" : "false") : undefined
              }
            />
            <LabelClickable htmlFor={value}>{value}</LabelClickable>
          </RowGapDiv>
        ))}
      </ColGapDiv>
    </ColGapDiv>
  );
}
