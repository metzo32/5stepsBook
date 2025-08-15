import { useEffect, useState } from "react";
import { ColGapDiv } from "@/styles/divs";
import StarRating from "./StarRating";
import { useRouter } from "next/router";
import { Controller, useFormContext } from "react-hook-form";

export default function Step02() {
  const router = useRouter();

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const [rating, setRating] = useState<number | null>(null);

  // useEffect(() => {
  //   if (query.rating) {
  //     const parsed = parseFloat(query.rating as string);
  //     if (!isNaN(parsed)) {
  //       setRating(parsed);
  //     }
  //   }
  // }, [query.rating]);

  // const handleRatingChange = (value: number) => {
  //   setRating(value);
  //   router.replace(
  //     {
  //       pathname: router.pathname,
  //     },
  //     undefined,
  //     { shallow: true }
  //   );
  // };

  return (
    <ColGapDiv>
      <h1>2단계 - 도서 추천 여부</h1>
      <h2>현재 점수 {rating}</h2>
      <Controller
        name="rating"
        control={control}
        rules={{ required: "점수를 입력해주세요." }}
        render={({ field }) => (
          <StarRating value={field.value} onChangeValue={field.onChange} />
        )}
      />

      {errors.rating && (
        <p style={{ color: "red" }}>{errors.rating.message as string}</p>
      )}
    </ColGapDiv>
  );
}
