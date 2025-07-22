import { ColGapDiv, RowGapDiv, ImageDiv } from "@/styles/divs";
import type { Book } from "@/types/books";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Step01() {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => {
        if (!res.ok) throw new Error("API 요청 실패");
        return res.json();
      })
      .then((data) => setBooks(data))
      .catch((err) => {
        console.error(err);
        setError("책 데이터를 불러오는 데 실패했습니다.");
      });
  }, []);

  return (
    <div>
      {books.map((book, idx) => {
        return (
          <RowGapDiv key={idx}>
            <ColGapDiv>
              <h1>1단계</h1>
              <h2>제목: </h2>
              <h3>저자: </h3>
            </ColGapDiv>

            <ImageDiv>
              <Image src={book.image} alt={book.title} fill />
            </ImageDiv>
          </RowGapDiv>
        );
      })}
    </div>
  );
}
