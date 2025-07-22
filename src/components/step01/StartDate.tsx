import { ColGapDiv } from "@/styles/divs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { Controller, useForm } from "react-hook-form";

interface StartDateProps {
  publishedDate: Dayjs;
  startDate: Dayjs | null;
  setStartDate: (startDate: Dayjs | null) => void;
}

export default function StartDate({
  publishedDate,
  startDate,
  setStartDate,
}: StartDateProps) {
  const { control } = useForm();

  return (
    <ColGapDiv>
      <h5>시작일</h5>
      <Controller
        control={control}
        name="StartDatepicker"
        render={() => (
          <DatePicker
            minDate={publishedDate}
            maxDate={dayjs(new Date())}
            value={startDate}
            onChange={(newValue) => setStartDate(newValue)}
          />
        )}
      />
    </ColGapDiv>
  );
}
