import { rowGap } from "@/styles/utils";
import { useState } from "react";
import StartDate from "./StartDate";
import EndDate from "./EndDate";
import { ColGapDiv, RowGapDiv } from "@/styles/divs";
import { LabelClick } from "@/styles/textTags";
import type { Dayjs } from "dayjs";

interface ReadStatusProps {
  startDate: Dayjs | null;
  setStartDate: (startDate: Dayjs | null) => void;
  endDate: Dayjs | null;
  setEndDate: (endDate: Dayjs | null) => void;
}

export enum ReadingStatus {
  WANT_TO_READ = "읽고 싶은 책",
  READING = "읽는 중",
  FINISHED = "읽음",
  PENDING = "보류 중",
}

export const ReadingStatusLabels = {
  [ReadingStatus.WANT_TO_READ]: "읽고 싶은 책",
  [ReadingStatus.READING]: "읽는 중",
  [ReadingStatus.FINISHED]: "읽음",
  [ReadingStatus.PENDING]: "보류 중",
};

export const readingStatusOptions = Object.values(ReadingStatus).map(
  (status) => ({
    label: status,
    value: status,
  })
);

export default function ReadStatus({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: ReadStatusProps) {
  const [selectedStatus, setSelectedStatus] = useState<ReadingStatus | null>(
    null
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedStatus(e.target.value as ReadingStatus);
  };

  return (
    <ColGapDiv>
      {readingStatusOptions.map(({ value, label }) => (
        <div key={value} css={rowGap}>
          <input
            id={value}
            name="readingStatus"
            value={value}
            type="radio"
            onChange={handleChange}
            checked={selectedStatus === value}
          />
          <LabelClick htmlFor={value}>{label}</LabelClick>
        </div>
      ))}

      <RowGapDiv>
        {selectedStatus && selectedStatus !== ReadingStatus.WANT_TO_READ && (
          <StartDate startDate={startDate} setStartDate={setStartDate} />
        )}
        {selectedStatus === ReadingStatus.FINISHED && (
          <EndDate endDate={endDate} setEndDate={setEndDate} />
        )}
      </RowGapDiv>
    </ColGapDiv>
  );
}
