import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";

interface StartDateProps {
  startDate: Dayjs | null;
  setStartDate: (startDate: Dayjs | null) => void;
}

export default function StartDate({ startDate, setStartDate }: StartDateProps) {
  return (
    <div>
      <h6>시작일</h6>
      <DatePicker
        maxDate={dayjs(new Date())}
        value={startDate}
        onChange={(newValue) => setStartDate(newValue)}
      />
    </div>
  );
}
