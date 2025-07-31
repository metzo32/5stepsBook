"use client";

import { lazy, Suspense, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Head from "next/head";
import useHandleNextStep from "@/components/hooks/useHandleNextStep";
import AppFormView from "@/components/appFormView/AppFormView";
// import RenderSteps from "@/components/RenderSteps";

import { Main } from "@/styles/textTags";
import { ButtonStrong } from "@/styles/buttons";
import { defaultFormValues } from "@/types/defaultFormValues";
import { Book } from "@/types/books";
import { ColGapDiv } from "@/styles/divs";

const RenderSteps = lazy(() => import("@/components/RenderSteps"));

export default function Home() {
  const { currentStep, handleNextClick } = useHandleNextStep();
  const methods = useForm({ defaultValues: defaultFormValues });

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("/api/books");
        const data = await res.json();
        setBooks(data);
      } catch (err) {
        console.error("책 데이터를 가져오는 데 실패했습니다", err);
        return <p>책 데이터가 없습니다.</p>;
      } finally {
      }
    };

    setTimeout(() => {
      fetchBooks();
    }, 1000);

    console.log("index에서 부른 데이터", books);
  }, []);

  const onValid = (data: any) => {
    handleNextClick();
  };

  const onInvalid = (errors: any) => {
    console.log("유효성 검증 실패", errors);
  };

  return (
    <>
      <Head>
        <title>5단계 도서</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Suspense fallback={<div>로딩 스피너 추가하기</div>}>
          <FormProvider {...methods}>
            <form
              noValidate
              onSubmit={methods.handleSubmit(onValid, onInvalid)}
            >
              <ColGapDiv>
                <RenderSteps books={books} />
                {currentStep < 5 && (
                  <ButtonStrong type="submit">다음</ButtonStrong>
                )}
              </ColGapDiv>
            </form>
            <AppFormView />
          </FormProvider>
        </Suspense>
      </Main>
    </>
  );
}
