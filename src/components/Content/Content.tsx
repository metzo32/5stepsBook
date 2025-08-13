import { Suspense, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import useHandleNextStep from "../hooks/useHandleNextStep";
import { defaultFormValues } from "@/types/defaultFormValues";
import RenderSteps from "../RenderSteps";
import AppFormView from "../appFormView/AppFormView";
import type { Book } from "@/types/books";
import { ButtonStrong } from "@/styles/buttons";
import { ColGapDiv } from "@/styles/divs";

// const RenderSteps = lazy(() => import("@/components/RenderSteps"));

export default function Content() {
  const { currentStep, handleNextClick } = useHandleNextStep();
  const methods = useForm({ defaultValues: { ...defaultFormValues } });

  const [books, setBooks] = useState<Book[]>([]);

  // 책 목업 데이터 불러오기
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("/api/books");
        const data = await res.json();
        setBooks(data);
      } catch (err) {
        console.error("책 데이터를 가져오는 데 실패했습니다", err);
      }
    };

    fetchBooks();
  }, []);

  const onValid = (data: any) => {
    handleNextClick();
  };

  const onInvalid = (errors: any) => {
    console.log("유효성 검증 실패", errors);
  };

  return (
    <Suspense fallback={<div>로딩 스피너 추가하기</div>}>
      <FormProvider {...methods}>
        <form noValidate onSubmit={methods.handleSubmit(onValid, onInvalid)}>
          <ColGapDiv>
            <RenderSteps books={books} />
            {currentStep < 5 && <ButtonStrong type="submit">다음</ButtonStrong>}
          </ColGapDiv>
        </form>
        <AppFormView />
      </FormProvider>
    </Suspense>
  );
}
