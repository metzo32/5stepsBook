import { useRouter } from "next/router";
import { useFormContext } from "react-hook-form";

import { ColGapDiv, RowGapDiv } from "@/styles/divs";
import { LabelClickable } from "@/styles/textTags";

export default function Step05() {
  enum PublicStatusEnum {
    PUBLIC = "공개",
    PRIVATE = "비공개",
  }

  const PublicStatusOptions = Object.values(PublicStatusEnum).map((status) => ({
    label: status,
    value: status,
  }));

  const {
    register,
    formState: { errors, isSubmitted },
    setValue,
  } = useFormContext();

  const router = useRouter();

  const handlePublicStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setValue("public", value);

    router.replace(
      {
        pathname: router.pathname,
        query: { ...router.query },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <ColGapDiv>
      <h1>공개 여부</h1>
      <ColGapDiv>
        {PublicStatusOptions.map(({ value }) => (
          <RowGapDiv key={value}>
            <input
              id={value}
              value={value}
              type="radio"
              {...register("publicStatus", {
                required: "공개 여부를 선택해주세요.",
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
