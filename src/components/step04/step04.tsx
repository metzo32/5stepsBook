import type { Book } from "@/types/books";
import FieldArray from "./FieldArray";

export default function Step04({ books }: { books: Book[] }) {
  return (
    <div>
      <h1>4단계 인용구</h1>
      <FieldArray
        totalPage={books[0].pageNum}
      />
    </div>
  );
}