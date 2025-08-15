import { Small } from "@/styles/textTags";
import { useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";

export default function Step03() {
  const [isRequired, setIsRequired] = useState(false);

  const {
    register,
    formState: { errors, isSubmitted },
  } = useFormContext();

  const userRating = useWatch({ name: "rating" });
  const userReview = useWatch({ name: "review" });

  const MIN_LENGTH = 100;

  // Rating 점수에 따른 필수 입력 여부
  useEffect(() => {
    if (userRating === 5 || userRating <= 1) {
      setIsRequired(true);
    }
  }, [userRating]);

  return (
    <div>
      <h1>3단계 독후감</h1>

      <textarea
        id="review"
        minLength={isRequired ? MIN_LENGTH : 0}
        placeholder={
          isRequired
            ? "100자 이상 작성해주세요"
            : "독후감을 자유롭게 작성해주세요"
        }
        aria-invalid={
          isSubmitted ? (errors.review ? "true" : "false") : undefined
        }
        {...register("review", {
          required: isRequired ? "내용을 작성해주세요" : false,
          minLength: isRequired
            ? {
                value: 100,
                message: "100자 이상 작성해주세요",
              }
            : 0,
        })}
      />
      <p className="text-gray-500 text-xs md:text-sm text-right mt-1">
        {userReview?.length ?? 0} / {MIN_LENGTH}자
      </p>
      {errors.review && <Small>{errors.review.message as string}</Small>}
    </div>
  );
}
