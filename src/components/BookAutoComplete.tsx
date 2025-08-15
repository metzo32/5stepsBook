// src/components/BookAutoComplete.tsx
import { useSuspenseQuery } from "@tanstack/react-query";
import AutoComplete from "./AutoComplete";
import { fetchBooks } from "@/utils/api";

export default function BookAutoComplete() {
  const { data: books } = useSuspenseQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
  });

  const options = books.map((book: any) => ({
    label: `${book.title} - ${book.author}`,
    value: book.id,
  }));

  return <AutoComplete name="bookId" options={options} />;
}
