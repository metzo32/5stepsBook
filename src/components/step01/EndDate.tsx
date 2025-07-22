import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

import { ColGapDiv, RowGapCenterDiv } from "@/styles/divs";
import { Small } from "@/styles/textTags";

interface EndDateProps {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  setEndDate: (endDate: Dayjs | null) => void;
}

export default function EndDate({
  startDate,
  endDate,
  setEndDate,
}: EndDateProps) {
  const isStartDateValid = startDate && dayjs(startDate).isValid();
  const { control } = useForm();

  return (
    <ColGapDiv>
      <RowGapCenterDiv>
        <h5>종료일</h5>
        {!isStartDateValid && <Small>시작일을 먼저 입력해주세요.</Small>}
      </RowGapCenterDiv>
      <Controller
        control={control}
        name="EndDatepicker"
        render={() => (
          <DatePicker
            disabled={!startDate}
            minDate={dayjs(startDate)}
            maxDate={dayjs(new Date())}
            value={endDate}
            onChange={(newValue) => setEndDate(newValue)}
          />
        )}
      />
    </ColGapDiv>
  );
}

// 독서 시작일은 도서 출판일 이후여야 한다.
