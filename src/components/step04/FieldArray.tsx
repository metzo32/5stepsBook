import { useEffect } from "react";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { QuoteTextarea } from "@/styles/textTags";
import { ButtonMedium, ButtonStrong } from "@/styles/buttons";
import { Small } from "@/styles/textTags";
import {
  ColGapDiv,
  ColGapDivFull,
  ColGapDivLg,
  RowGapDivFull,
} from "@/styles/divs";
import { FormValues } from "@/types/defaultFormValues";

export default function FieldArray({ totalPage }: { totalPage: number }) {
  const {
    register,
    control,
    formState: { errors, isSubmitted },
  } = useFormContext<FormValues>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "quotes",
  });

  const quotes = useWatch({ control, name: "quotes" });

  // const watchedQuotes = useWatch({control, name: "quotes"})

  useEffect(() => {
    console.log("인용구", quotes);
  }, [quotes]);

  const isPageRequired = quotes?.length >= 2;

  const onlyNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };

  return (
    <ColGapDiv>
      <ButtonStrong
        type="button"
        onClick={() =>
          append({
            quote: "",
            page: undefined,
          })
        }
      >
        인용구 추가하기
      </ButtonStrong>

      <ColGapDivLg>
        {fields.map((field, index) => {
          return (
            <ColGapDivFull key={index}>
              <label htmlFor={`quotes.${index}.quote`}>{`인용구 ${
                index + 1
              }`}</label>
              <RowGapDivFull>
                <ColGapDivFull>
                  <QuoteTextarea
                    placeholder="저장하고 싶은 인용구"
                    aria-invalid={
                      isSubmitted
                        ? (errors?.quotes as any)?.[index]?.quote
                          ? "true"
                          : "false"
                        : undefined
                    }
                    {...register(`quotes.${index}.quote`, {
                      required: "인용구는 필수입니다.",
                    })}
                  />
                  {Array.isArray(errors.quotes) &&
                    errors.quotes[index]?.quote?.message && (
                      <Small>{errors.quotes[index]?.quote?.message}</Small>
                    )}

                  {isPageRequired && (
                    <>
                      <input
                        type="text"
                        placeholder="인용구의 페이지를 작성해주세요."
                        onInput={onlyNum}
                        aria-invalid={
                          isSubmitted
                            ? (errors?.quotes as any)?.[index]?.page
                              ? "true"
                              : "false"
                            : undefined
                        }
                        {...register(`quotes.${index}.page`, {
                          required: "인용구의 페이지를 작성해주세요.",
                          pattern: {
                            value: /^\d+$/,
                            message: "숫자만 입력 가능합니다.",
                          },
                          min: {
                            value: 1,
                            message: "페이지 번호가 유효하지 않습니다.",
                          },
                          max: {
                            value: totalPage,
                            message: `최대 페이지 ${totalPage}쪽 이내의 값을 입력해주세요.`,
                          },
                        })}
                      />

                      {Array.isArray(errors.quotes) &&
                        errors.quotes[index]?.page?.message && (
                          <Small>{errors.quotes[index]?.page?.message}</Small>
                        )}
                    </>
                  )}
                </ColGapDivFull>

                {fields.length > 1 && (
                  <ButtonMedium
                    type="button"
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    삭제
                  </ButtonMedium>
                )}
              </RowGapDivFull>
            </ColGapDivFull>
          );
        })}
      </ColGapDivLg>
    </ColGapDiv>
  );
}
