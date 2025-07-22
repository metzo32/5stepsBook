import { DatePicker } from "@mui/x-date-pickers";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

interface EndDateProps {
  endDate: Dayjs | null;
  setEndDate: (endDate: Dayjs | null) => void;
}

export default function EndDate({ endDate, setEndDate }: EndDateProps) {
  return (
    <div>
      <h6>종료일</h6>
      <DatePicker
        maxDate={dayjs(new Date())}
        value={endDate}
        onChange={(newValue) => setEndDate(newValue)}
      />
    </div>
  );
}

// 독서 시작일은 독서 종료일보다 이후면 안 된다.
// 독서 시작일은 도서 출판일 이후여야 한다.
