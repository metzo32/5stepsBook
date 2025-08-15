import { Dayjs } from "dayjs";

export interface Quote {
  quote: string;
  page: number | undefined;
}

// 타입
export interface FormValues {
  bookId: number | null;
  readStatus: string | null;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  rating: number | null;
  review: string;
  quotes: Quote[];
  publicStatus: null | string;
}

// 초기값
export const defaultFormValues: FormValues = {
  bookId: null,
  readStatus: null,
  startDate: null,
  endDate: null,
  rating: null,
  review: "",
  quotes: [{ quote: "", page: undefined }],
  publicStatus: null,
};
