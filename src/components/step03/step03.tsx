import { Small } from "@/styles/textTags";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";

export default function Step03() {
  const [isRequired, setIsRequired] = useState(false);

  const router = useRouter();
  const { query } = router;

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const userReview = useWatch({ name: "review" });

  const rating = Number(query.rating);

  const MIN_LENGTH = 100;

  useEffect(() => {
    if (!router.isReady) return;

    if (rating === 5 || rating <= 1) {
      setIsRequired(true);
    }
  }, [router.isReady, rating]);

  return (
    <div>
      <h1>3단계 독후감</h1>
      {isRequired && <Small>필수 사항입니다.</Small>}

      <textarea
        id="review"
        minLength={isRequired ? MIN_LENGTH : 0}
        placeholder={
          isRequired
            ? "100자 이상 작성해주세요"
            : "독후감을 자유롭게 작성해주세요"
        }
        {...register("review", {
          required: "내용을 작성해주세요",
        })}
      />
      <p className="text-gray-500 text-xs md:text-sm text-right mt-1">
        {userReview?.length ?? 0} / {MIN_LENGTH}자
      </p>
      {errors.review && <Small>{errors.review.message as string}</Small>}
    </div>
  );
}
