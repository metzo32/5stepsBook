import { Dayjs } from "dayjs";

export const defaultFormValues = {
  readStatus: null as string | null,
  startDate: null as Dayjs | null,
  endDate: null as Dayjs | null,
  rating: null,
  review: "",
  quotes: [{ quote: "", page: undefined }],
};
