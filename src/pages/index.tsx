import Head from "next/head";
import { Main } from "@/styles/textTags";
import Content from "@/components/Content/Content";

export default function Home() {
  return (
    <>
      <Head>
        <title>5단계 도서</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Content />
      </Main>
    </>
  );
}
