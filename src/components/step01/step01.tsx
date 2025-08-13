import { useFormContext } from "react-hook-form";
import ReadStatus from "./readStatus";
import type { Book } from "@/types/books";
import dayjs from "dayjs";
// import JotaiTest from "@/states/JotaiTest";
import { ColGapDiv, ImageDiv, FitImage, RowBetweenMain } from "@/styles/divs";
import { Small } from "@/styles/textTags";

export default function Step01({ books }: { books: Book[] }) {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <ColGapDiv>
      {/* <JotaiTest /> */}
      {books.map((book, idx) => {
        return (
          <RowBetweenMain key={idx}>
            <ColGapDiv>
              <h1>1단계</h1>
              <h2>{book.title}</h2>
              <h3>{book.author}</h3>
              <h4>출판일: {book.published}</h4>
              <h4>페이지 수: {book.pageNum}</h4>
            </ColGapDiv>

            <ImageDiv>
              <FitImage src={book.image} alt={book.title} fill />
            </ImageDiv>
          </RowBetweenMain>
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
