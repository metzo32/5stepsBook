import { Control, Controller, useForm, useFormContext } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

import { ColGapDiv, RowGapCenterDiv } from "@/styles/divs";
import { Small } from "@/styles/textTags";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface EndDateProps {
  startDate: Dayjs | null;
  control: Control;
}

interface handleDateChangeProps {
  newValue: Dayjs | null;
  field: { onChange: (value: any) => void };
}

export default function EndDate({ startDate, control }: EndDateProps) {
  const { setValue } = useFormContext();
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    if (query.endDate && typeof query.endDate === "string") {
      setValue("endDate", dayjs(query.endDate));
    }
  }, [query, setValue]);

  const handleDateChange = ({ newValue, field }: handleDateChangeProps) => {
    field.onChange(newValue);

    router.replace(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          endDate: newValue
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
      <RowGapCenterDiv>
        <h5>종료일</h5>
      </RowGapCenterDiv>
      <Controller
        control={control}
        name="endDate"
        rules={{ required: "종료일을 입력해주세요" }}
        render={({ field, fieldState }) => (
          <>
            <DatePicker
              {...field}
              disabled={!startDate}
              minDate={dayjs(startDate)}
              maxDate={dayjs(new Date())}
              value={field.value || null}
              onChange={(newValue) => handleDateChange({ newValue, field })}
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

// 독서 시작일은 도서 출판일 이후여야 한다.
