import { Textarea } from "@/styles/textTags";
import { useState } from "react";

export default function TextField() {
  const [review, setReview] = useState("");

  const MIN_LENGTH = 100;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  return (
    <Textarea
      id="review"
      value={review}
      onChange={handleChange}
      minLength={MIN_LENGTH}
      placeholder="리뷰 남기기"
      hasError
    />
  );
}
