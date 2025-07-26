import { Control, Controller, useForm } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

import { ColGapDiv, RowGapCenterDiv } from "@/styles/divs";
import { Small } from "@/styles/textTags";

interface EndDateProps {
  startDate: Dayjs | null;
  control: Control;
}

export default function EndDate({ startDate, control }: EndDateProps) {

  return (
    <ColGapDiv>
      <RowGapCenterDiv>
        <h5>종료일</h5>
      </RowGapCenterDiv>
      <Controller
        control={control}
        name="endDate"
        rules={{ required: "종료일을 입력해주세요" }}
        render={({ field, fieldState }) => (
          <>
            <DatePicker
              {...field}
              disabled={!startDate}
              minDate={dayjs(startDate)}
              maxDate={dayjs(new Date())}
              value={field.value || null}
              onChange={(newValue) => field.onChange(newValue)}
            />
            {fieldState.error && <Small>{fieldState.error.message}</Small>}
          </>
        )}
      />
    </ColGapDiv>
  );
}

// 독서 시작일은 도서 출판일 이후여야 한다.
