import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import { Control, Controller } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { ColGapDiv } from "@/styles/divs";
import { Small } from "@/styles/textTags";

interface StartDateProps {
  control: Control<any>;
  publishedDate: Dayjs;
}

export default function StartDate({ control, publishedDate }: StartDateProps) {
  return (
    <ColGapDiv>
      <h5>시작일</h5>
      <Controller
        name="startDate"
        control={control}
        rules={{ required: "시작일을 입력해주세요" }}
        render={({ field, fieldState }) => (
          <>
            <DatePicker
              {...field}
              minDate={publishedDate}
              maxDate={dayjs(new Date())}
              value={field.value || null}
              onChange={(newValue) => field.onChange(newValue)}
            />
            {fieldState.error && (
              <Small>{fieldState.error.message}</Small> 
            )}
          </>
        )}
      />
    </ColGapDiv>
  );
}
