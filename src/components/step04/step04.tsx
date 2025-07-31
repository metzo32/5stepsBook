import type { Book } from "@/types/books";
import FieldArray from "./FieldArray";
import { Suspense } from "react";

export default function Step04({ books }: { books: Book[] }) {
  const pageNum = books?.[0]?.pageNum ?? 0;

  return (
    <Suspense fallback={<p>로딩 중...</p>}>
      <h1>4단계 인용구</h1>
      <FieldArray
        totalPage={pageNum}
      />
    </Suspense>
  );
}