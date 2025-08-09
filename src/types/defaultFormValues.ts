import { Dayjs } from "dayjs";

export interface Quote {
  quote: string;
  page: number | undefined;
}

export interface FormValues {
  readStatus: string | null;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  rating: number | null;
  review: string;
  quotes: Quote[];
  publicStatus: null | string;
}

export const defaultFormValues: FormValues = {
  readStatus: null,
  startDate: null,
  endDate: null,
  rating: null,
  review: "",
  quotes: [{ quote: "", page: undefined }],
  publicStatus: null,
};
