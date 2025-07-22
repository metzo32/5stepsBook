import { ColGapDiv, RowGapDiv, ImageDiv } from "@/styles/divs";
import type { Book } from "@/types/books";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReadStatus from "./readStatus";
import { ButtonStrong } from "@/styles/buttons";
import useHandleNextStep from "../hooks/useHandleNextStep";
import { useForm } from "react-hook-form";
import { Small } from "@/styles/textTags";

export default function Step01() {
  // const { currentStep, handleNextClick } = useHandleNextStep();

  const [books, setBooks] = useState<Book[]>([]);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm();

  useEffect(() => {
    fetch("/api/books")
      .then((res) => {
        if (!res.ok) throw new Error("API 요청 실패");
        return res.json();
      })
      .then((data) => setBooks(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <ColGapDiv>
      {books.map((book, idx) => {
        return (
          <RowGapDiv key={idx}>
            <ColGapDiv>
              <h1>1단계</h1>
              <h2>제목: {book.title}</h2>
              <h3>저자: {book.author}</h3>
            </ColGapDiv>

            <ImageDiv>
              <Image src={book.image} alt={book.title} fill />
            </ImageDiv>
          </RowGapDiv>
        );
      })}

      <ColGapDiv>
        <form
          noValidate
          onSubmit={handleSubmit(async (data) => {
            await new Promise((r) => setTimeout(r, 1_000));
            alert(JSON.stringify(data));
          })}
        >
          <ColGapDiv>
            <label htmlFor="email">이메일</label>
            <input
              id="email"
              type="email"
              placeholder="example@email.com"
              {...register("email", {
                required: "이메일은 필수 사항입니다.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "이메일 형식에 맞지 않습니다.",
                },
              })}
              aria-invalid={
                isSubmitted ? (errors.email ? "true" : "false") : undefined
              }
            />
            {errors.email && <Small>{errors.email.message as String}</Small>}

            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              placeholder="********"
              {...register("password", {
                required: "비밀번호는 필수 사항입니다.",
                minLength: {
                  value: 8,
                  message: "비밀번호는 최소 8자리여야 합니다.",
                },
              })}
              aria-invalid={
                isSubmitted ? (errors.password ? "true" : "false") : undefined
              }
            />

            {errors.password && (
              <Small>{errors.password.message as String}</Small>
            )}

            <ButtonStrong type="submit" disabled={isSubmitting}>
              {isSubmitting ? "로딩 중..." : "로그인"}
            </ButtonStrong>
          </ColGapDiv>
        </form>

        <ReadStatus />
        
      </ColGapDiv>
    </ColGapDiv>
  );
}
