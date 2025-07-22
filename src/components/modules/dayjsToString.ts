import { Dayjs } from "dayjs";

export function dayjsToString(dayjs: Dayjs) {
    return dayjs.format("YYYY-MM-DD")
}