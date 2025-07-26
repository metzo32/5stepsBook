import { useEffect, useState } from "react";
import Image from "next/image";
import { useFormContext } from "react-hook-form";

import { ColGapDiv, RowGapDiv, ImageDiv } from "@/styles/divs";
import { Small } from "@/styles/textTags";

import type { Book } from "@/types/books";

import ReadStatus from "./readStatus";
import dayjs from "dayjs";

export default function Step01() {
  
  const [books, setBooks] = useState<Book[]>([]);

  const {
    formState: { errors },
  } = useFormContext();

  return (
    <ColGapDiv>
      {books.map((book, idx) => {
        return (
          <RowGapDiv key={idx}>
            <ColGapDiv>
              <h1>1단계</h1>
              <h2>{book.title}</h2>
              <h3>{book.author}</h3>
              <h4>출판일: {book.published}</h4>
              <h4>페이지 수: {book.pageNum}</h4>
            </ColGapDiv>

            <ImageDiv>
              <Image src={book.image} alt={book.title} fill />
            </ImageDiv>
          </RowGapDiv>
        );
      })}

      <ColGapDiv>
        <ColGapDiv>
          <ReadStatus publishedDate={dayjs(books[0]?.published)} />

          {errors.readStatus && (
            <Small>{errors.readStatus.message as String}</Small>
          )}
        </ColGapDiv>
      </ColGapDiv>
    </ColGapDiv>
  );
}
