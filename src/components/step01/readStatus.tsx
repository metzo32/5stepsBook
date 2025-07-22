import { rowGap } from "@/styles/utils";
import { useState } from "react";
import StartDate from "./StartDate";
import EndDate from "./EndDate";

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

export default function ReadStatus() {
  const [selectedStatus, setSelectedStatus] = useState<ReadingStatus | null>(
    null
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedStatus(e.target.value as ReadingStatus);
  };

  return (
    <div>
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
          <label htmlFor={value}>{label}</label>
        </div>
      ))}

      {selectedStatus !== ReadingStatus.WANT_TO_READ && <StartDate />}
      {selectedStatus === ReadingStatus.FINISHED && <EndDate />}
    </div>
  );
}
