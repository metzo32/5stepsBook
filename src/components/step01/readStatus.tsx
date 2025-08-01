import { rowGap } from "@/styles/utils";
import { useEffect } from "react";
import StartDate from "./StartDate";
import EndDate from "./EndDate";
import { ColGapDiv, RowGapDiv } from "@/styles/divs";
import { LabelClickable } from "@/styles/textTags";
import type { Dayjs } from "dayjs";
import { useFormContext, useWatch } from "react-hook-form";
import { dayjsToString } from "../modules/dayjsToString";
import { useRouter } from "next/router";

interface ReadStatusProps {
  publishedDate: Dayjs;
}

export enum ReadingStatusEnum {
  WANT_TO_READ = "읽고 싶은 책",
  READING = "읽는 중",
  FINISHED = "읽음",
  PENDING = "보류 중",
}

export const ReadingStatusLabels = {
  [ReadingStatusEnum.WANT_TO_READ]: "읽고 싶은 책",
  [ReadingStatusEnum.READING]: "읽는 중",
  [ReadingStatusEnum.FINISHED]: "읽음",
  [ReadingStatusEnum.PENDING]: "보류 중",
};

export const readingStatusOptions = Object.values(ReadingStatusEnum).map(
  (status) => ({
    label: status,
    value: status,
  })
);

export default function ReadStatus({ publishedDate }: ReadStatusProps) {
  const {
    register,
    control,
    setValue,
    clearErrors,
    formState: { isSubmitted, errors },
  } = useFormContext();

  const router = useRouter();
  const { query } = router;

  const readStatus = useWatch({ name: "readStatus" }); // 특정 필드값 구독
  const startDate = useWatch({ name: "startDate" }); // 특정 필드값 구독
  const endDate = useWatch({ name: "endDate" }); // 특정 필드값 구독

  const stringStartDate = dayjsToString(startDate);
  const stringEndDate = dayjsToString(endDate);

  useEffect(() => {
    if (query.readStatus) {
      setValue("readStatus", query.readStatus); // RHF 필드에 초기값 세팅
    }
  }, [query.readStatus, setValue]);

  // readStatus가 바뀌면 날짜 관련 선택값 및 에러 초기화
  useEffect(() => {
    setValue("startDate", null);
    setValue("endDate", null);
    clearErrors("startDate");
    clearErrors("endDate");
  }, [readStatus, setValue]);

  const handleSelectStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    router.replace(
      {
        pathname: router.pathname,
        query: { ...router.query, readStatus: value },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <ColGapDiv>
      {readingStatusOptions.map(({ value, label }) => (
        <div key={value} css={rowGap}>
          <input
            id={value}
            value={value}
            type="radio"
            {...register("readStatus", {
              required: "독서 상태를 선택해주세요",
              onChange: handleSelectStatus,
            })}
            aria-invalid={
              isSubmitted ? (errors.readStatus ? "true" : "false") : undefined
            }
          />
          <LabelClickable htmlFor={value}>{label}</LabelClickable>
        </div>
      ))}

      <RowGapDiv>
        {readStatus && readStatus !== ReadingStatusEnum.WANT_TO_READ && (
          <StartDate
            control={control} // RHF의 상태 전달
            publishedDate={publishedDate}
          />
        )}

        {readStatus === ReadingStatusEnum.FINISHED && (
          <EndDate
            startDate={startDate}
            control={control} // RHF의 상태 전달
          />
        )}
      </RowGapDiv>
    </ColGapDiv>
  );
}
