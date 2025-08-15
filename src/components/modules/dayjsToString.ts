import { Dayjs } from "dayjs";

export function dayjsToString(dayjs: Dayjs | null) {
    if (!dayjs) return;
    return dayjs.format("YYYY-MM-DD")
}