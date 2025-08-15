import { useWatch } from "react-hook-form";
import { WrapperStyle } from "./styles";
import { useEffect, useState } from "react";
import { dayjsToString } from "../modules/dayjsToString";
import { RowGapDiv } from "@/styles/divs";
import { FormValues } from "@/types/defaultFormValues";
import dayjs from "dayjs";

export default function AppFormView() {
  const allFormValues = useWatch() as FormValues;

  const [delayedFormValues, setDelayedFormValues] =
    useState<FormValues>(allFormValues);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedFormValues(allFormValues);
    }, 500);

    return () => clearTimeout(timer);
  }, [allFormValues]);

  return (
    <WrapperStyle>
      <h3>독서 상태</h3>

      {delayedFormValues.readStatus && <p>{delayedFormValues.readStatus}</p>}
      {dayjs.isDayjs(delayedFormValues.startDate) && (
        <p>{dayjsToString(delayedFormValues.startDate)} 부터</p>
      )}
      {dayjs.isDayjs(delayedFormValues.endDate) && (
        <p>{dayjsToString(delayedFormValues.endDate)} 까지</p>
      )}
      {delayedFormValues.rating && <p>평점 {delayedFormValues.rating} 점</p>}
      {delayedFormValues.review && <p>{delayedFormValues.review}</p>}
      {delayedFormValues.quotes &&
        delayedFormValues.quotes.map((item, index) => (
          <RowGapDiv key={index}>
            {item.page && <p>p.{item.page}</p>}
            {item.quote && <p>"{item.quote}"</p>}
          </RowGapDiv>
        ))}
      {delayedFormValues.publicStatus && (
        <p>{delayedFormValues.publicStatus}</p>
      )}
    </WrapperStyle>
  );
}
