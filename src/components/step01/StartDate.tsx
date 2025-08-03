import { useRouter } from "next/router";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import { Control, Controller, useFormContext } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { ColGapDiv } from "@/styles/divs";
import { Small } from "@/styles/textTags";
import { useEffect } from "react";

interface StartDateProps {
  control: Control<any>;
  publishedDate: Dayjs;
}

interface handleDateChangeProps {
  newValue: Dayjs | null;
  field: { onChange: (value: any) => void };
}

export default function StartDate({ control, publishedDate }: StartDateProps) {
  const { setValue } = useFormContext();
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    if (query.startDate && typeof query.startDate === "string") {
      setValue("startDate", dayjs(query.startDate));
    }
  }, [query, setValue]);

  const handleDateChange = ({ newValue, field }: handleDateChangeProps) => {
    field.onChange(newValue);

    router.replace(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          startDate: newValue
            ? dayjs(newValue).format("YYYY-MM-DD").toString()
            : undefined,
        },
      },
      undefined,
      { shallow: true }
    );
  };

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
              onChange={(newValue) => handleDateChange({ newValue, field })}
              // onChange={(newValue) => field.onChange(newValue)}
              slotProps={{
                textField: {
                  error: !!fieldState.error,
                },
              }}
            />
            {fieldState.error && <Small>{fieldState.error.message}</Small>}
          </>
        )}
      />
    </ColGapDiv>
  );
}
