import { useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { FormValues } from "@/types/defaultFormValues";
import { fetchBooks } from "@/utils/api";
import { dayjsToString } from "../modules/dayjsToString";
import dayjs from "dayjs";
import { WrapperStyle } from "./styles";
import { RowGapDiv } from "@/styles/divs";
import type { Book } from "@/types/books";

export default function AppFormView() {
  const allFormValues = useWatch() as FormValues;

  const [delayedFormValues, setDelayedFormValues] =
    useState<FormValues>(allFormValues);

  const [isWideView, setIsWideView] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false
  );

  const { data: books = [] } = useQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
  });

  const selectedBook = books.find(
    (book: Book) => book.id === delayedFormValues.bookId
  );

  // 0.5초 시간차 렌더링
  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedFormValues(allFormValues);
    }, 500);

    return () => clearTimeout(timer);
  }, [allFormValues]);

  // window size event 수신
  useEffect(() => {
    const handleResize = () => {
      setIsWideView(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup 필수
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isWideView) return null;

  return (
    <WrapperStyle>
      <h3>독서 상태</h3>

      {delayedFormValues.bookId && selectedBook && (
        <p>제목: {selectedBook.title}</p>
      )}

      {delayedFormValues.readStatus && <p>{delayedFormValues.readStatus}</p>}
      {dayjs.isDayjs(delayedFormValues.startDate) && (
        <p>{dayjsToString(delayedFormValues.startDate)} 부터</p>
      )}
      {dayjs.isDayjs(delayedFormValues.endDate) && (
        <p>{dayjsToString(delayedFormValues.endDate)} 까지</p>
      )}
      {delayedFormValues.rating && <p>평점 {delayedFormValues.rating} 점</p>}
      {delayedFormValues.review && <p>{delayedFormValues.review}</p>}
      {delayedFormValues.quotes &&
        delayedFormValues.quotes.map((item, index) => (
          <RowGapDiv key={index}>
            {item.page && <p>p.{item.page}</p>}
            {item.quote && <p>"{item.quote}"</p>}
          </RowGapDiv>
        ))}
      {delayedFormValues.publicStatus && (
        <p>{delayedFormValues.publicStatus}</p>
      )}
    </WrapperStyle>
  );
}
