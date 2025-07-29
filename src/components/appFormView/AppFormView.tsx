import { useWatch } from "react-hook-form";
import { WrapperStyle } from "./styles";
import { useEffect, useState } from "react";
import { dayjsToString } from "../modules/dayjsToString";
import { ColGapDiv } from "@/styles/divs";
import { defaultFormValues } from "@/types/defaultFormValues";

export default function AppFormView() {
  const [delayedStatusList, setDelayedStatusList] = useState<
    Record<string, any>[]
  >([]);

  const [testList, setTestList] = useState(defaultFormValues)

  useEffect(() => {
    console.log("테스트", testList)
  },[testList])

  const allFormValues = useWatch();
  const readStatus = useWatch({ name: "readStatus" });
  const start = useWatch({ name: "startDate" });
  const end = useWatch({ name: "endDate" });
  const stringStartDate = dayjsToString(start);
  const stringEndDate = dayjsToString(end);

  useEffect(() => {
    const timer = setTimeout(() => {
    const newStatus = {
      ...allFormValues,
      readStatus: readStatus,
      startDate: stringStartDate,
      endDate: stringEndDate,
    };

    setDelayedStatusList((prev) => {
      const last = prev[prev.length - 1];
      if (last?.readStatus === newStatus.readStatus &&
          last?.startDate === newStatus.startDate &&
          last?.endDate === newStatus.endDate) {
        return prev;
      }

      return [...prev, newStatus];
    });
  }, 500);

    return () => clearTimeout(timer);
  }, [allFormValues]);

  return (
    <WrapperStyle>
      <h2>앱 폼 뷰</h2>

      <h3>독서 상태</h3>
      {delayedStatusList.map((delayedStatus, index) => (
        <ColGapDiv key={index}>
          <p>{delayedStatus.readStatus}</p>
          {delayedStatus.startDate && <p>{delayedStatus.startDate} 부터</p>}
          {delayedStatus.endDate && <p>{delayedStatus.endDate} 까지</p>}
        </ColGapDiv>
      ))}
      {/* <p>{dayjsToString(delayedStatus.startDate)}</p> */}
      {/* <p>{dayjsToString(delayedStatus.endDate)}</p> */}
    </WrapperStyle>
  );
}
