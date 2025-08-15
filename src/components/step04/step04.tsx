import { useSuspenseQuery } from "@tanstack/react-query";
import FieldArray from "./FieldArray";
import { Suspense } from "react";
import { useFormContext } from "react-hook-form";
import { fetchBooks } from "@/utils/api";

export default function Step04() {
  const { watch } = useFormContext();
  const selectedBookId = watch("bookId");

  const { data: books } = useSuspenseQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
  });

  const selectedBook = books.find((book: any) => book.id === selectedBookId);
  const pageNum = selectedBook?.pageNum ?? 0;

  return (
    <Suspense fallback={<p>로딩 중...</p>}>
      <h1>4단계 인용구</h1>
      <FieldArray totalPage={pageNum} />
    </Suspense>
  );
}
