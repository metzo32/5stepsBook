import { useWatch } from "react-hook-form";
import { WrapperStyle } from "./styles";
import { useEffect, useState } from "react";
import { dayjsToString } from "../modules/dayjsToString";
import { RowGapDiv } from "@/styles/divs";
import { defaultFormValues, FormValues } from "@/types/defaultFormValues";
import dayjs from "dayjs";

export default function AppFormView() {
  const [delayedStatusList, setDelayedStatusList] = useState<
    Record<string, any>[]
  >([]);

  const [testList, setTestList] = useState(defaultFormValues);

  const allFormValues = useWatch() as FormValues;

  useEffect(() => {
    console.log("전체", allFormValues);
  }, [allFormValues]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //   const newStatus = {
  //     ...allFormValues,
  //     readStatus: readStatus,
  //     startDate: stringStartDate,
  //     endDate: stringEndDate,
  //   };

  //   setDelayedStatusList((prev) => {
  //     const last = prev[prev.length - 1];
  //     if (last?.readStatus === newStatus.readStatus &&
  //         last?.startDate === newStatus.startDate &&
  //         last?.endDate === newStatus.endDate) {
  //       return prev;
  //     }

  //     return [...prev, newStatus];
  //   });
  // }, 500);

  //   return () => clearTimeout(timer);
  // }, [allFormValues]);

  return (
    <WrapperStyle>
      <h3>독서 상태</h3>

      {allFormValues.readStatus && <p>{allFormValues.readStatus}</p>}
      {dayjs.isDayjs(allFormValues.startDate) && (
        <p>{dayjsToString(allFormValues.startDate)} 부터</p>
      )}
      {dayjs.isDayjs(allFormValues.endDate) && (
        <p>{dayjsToString(allFormValues.endDate)} 까지</p>
      )}
      {allFormValues.rating && <p>평점 {allFormValues.rating} 점</p>}
      {allFormValues.review && <p>{allFormValues.review}</p>}
      {allFormValues.quotes &&
        allFormValues.quotes.map((item, index) => (
          <RowGapDiv key={index}>
            {item.page && <p>p.{item.page}</p>}
            {item.quote && <p>"{item.quote}"</p>}
          </RowGapDiv>
        ))}
      {allFormValues.publicStatus && <p>{allFormValues.publicStatus}</p>}

      {/* {delayedStatusList.map((delayedStatus, index) => (
        <ColGapDiv key={index}>
          <p>{delayedStatus.readStatus}</p>
          {delayedStatus.startDate && <p>{delayedStatus.startDate} 부터</p>}
          {delayedStatus.endDate && <p>{delayedStatus.endDate} 까지</p>}
        </ColGapDiv>
      ))} */}
      {/* <p>{dayjsToString(delayedStatus.startDate)}</p> */}
      {/* <p>{dayjsToString(delayedStatus.endDate)}</p> */}
    </WrapperStyle>
  );
}