import { Suspense, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import BookAutoComplete from "@/components/BookAutoComplete";
import { fetchBooks } from "@/utils/api";
import dayjs from "dayjs";
import ReadStatus from "./readStatus";
import { ColGapDiv, ImageDiv, FitImage, RowBetweenMain } from "@/styles/divs";
import { Small } from "@/styles/textTags";

function LoadingBar() {
  return <div>책 목록 불러오는 중...</div>;
}

function RejectedFallback({ error }: { error: Error }) {
  return (
    <div>
      <p>에러 발생: {error.message}</p>
    </div>
  );
}

export default function Step01() {
  const {
    watch,
    formState: { errors },
  } = useFormContext();

  const { data: books } = useSuspenseQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
  });

  const selectedBookId = watch("bookId");
  const selectedBook = books.find((book: any) => book.id === selectedBookId);

  return (
    <ColGapDiv>
      <ErrorBoundary FallbackComponent={RejectedFallback}>
        <Suspense fallback={<LoadingBar />}>
          <BookAutoComplete />
        </Suspense>
      </ErrorBoundary>

      {selectedBook && (
        <>
          <RowBetweenMain key={selectedBook.id}>
            <ColGapDiv>
              <h1>1단계</h1>
              <h2>{selectedBook.title}</h2>
              <h3>{selectedBook.author}</h3>
              <h4>출판일: {selectedBook.published}</h4>
              <h4>페이지 수: {selectedBook.pageNum}</h4>
            </ColGapDiv>

            <ImageDiv>
              <FitImage
                src={selectedBook.image}
                alt={selectedBook.title}
                fill
              />
            </ImageDiv>
          </RowBetweenMain>

          <ColGapDiv>
            <ColGapDiv>
              <ReadStatus publishedDate={dayjs(selectedBook.published)} />

              {errors.readStatus && (
                <Small>{errors.readStatus.message as string}</Small>
              )}
            </ColGapDiv>
          </ColGapDiv>
        </>
      )}
    </ColGapDiv>
  );
}
