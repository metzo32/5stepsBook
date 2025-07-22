"use client";

import type { AppProps } from "next/app";
import { CacheProvider, Global, ThemeProvider } from "@emotion/react";
import createEmotionCache from "@/emotion-cache";
import theme from "@/styles/theme";
import globalStyles from "@/styles/global";


const clientSideEmotionCache = createEmotionCache();

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  import("../mocks/browser").then(({ worker }) => {
    worker.start({ onUnhandledRequest: "warn" });
  });
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
