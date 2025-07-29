import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { QuoteTextarea } from "./styled";
import { ButtonMedium, ButtonStrong } from "@/styles/buttons";
import { Small } from "@/styles/textTags";
import { ColGapDiv, ColGapDivLg, RowGapDiv } from "@/styles/divs";
import { useEffect } from "react";

export default function FieldArray({ totalPage }: { totalPage: number }) {
  const {
    register,
    control,
    watch,
    formState: { errors, isSubmitted },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "quotes", // 초기 입력값
  });

  const quotes = useWatch({ control, name: "quotes" });

  // const watchedQuotes = useWatch({control, name: "quotes"})

  useEffect(() => {
    console.log("인용구", quotes);
  }, [quotes]);

  const isPageRequired = quotes?.length >= 2;

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
            <ColGapDiv key={index}>
              <label htmlFor={`quotes.${index}.quote`}>{`인용구 ${
                index + 1
              }`}</label>
              <RowGapDiv>
                <ColGapDiv>
                  <QuoteTextarea
                    placeholder="저장하고 싶은 인용구"
                    aria-invalid={
                      isSubmitted ? ((errors?.quotes as any)?.[index]?.quote ? "true" : "false") : undefined
                    }
                    {...register(`quotes.${index}.quote`, {
                      required: "인용구는 필수입니다.",
                    })}
                  />
                  {errors?.quotes?.[index]?.quote?.message && (
                    <Small>{(errors.quotes as any)[index].quote.message}</Small>
                  )}

                  {isPageRequired && (
                    <>
                      <input
                        type="number"
                        placeholder="인용구의 페이지를 작성해주세요."
                        aria-invalid={
                          isSubmitted ? ((errors?.quotes as any)?.[index]?.page ? "true" : "false") : undefined
                        }
                        {...register(`quotes.${index}.page`, {
                          required: "인용구의 페이지를 작성해주세요.",
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

                      {errors?.quotes?.[index]?.page.message && (
                        <Small>{(errors.quotes as any)[index].page.message}</Small>
                      )}
                    </>
                  )}
                </ColGapDiv>

                <ButtonMedium
                  type="button"
                  onClick={() => {
                    remove(index);
                  }}
                >
                  삭제
                </ButtonMedium>
              </RowGapDiv>
            </ColGapDiv>
          );
        })}
      </ColGapDivLg>
    </ColGapDiv>
  );
}
