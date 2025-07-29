"use client";

import type { AppProps } from "next/app";
import { CacheProvider, Global, ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material";
import createEmotionCache from "@/emotion-cache";
import theme from "@/styles/theme";
import globalStyles from "@/styles/global";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import muiTheme from "@/styles/muiTheme";

const clientSideEmotionCache = createEmotionCache();

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  import("../mocks/browser").then(({ worker }) => {
    worker.start({ onUnhandledRequest: "warn" }).then(() => {
      console.log("MSW 시작")
    })
  });
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <EmotionThemeProvider theme={theme}>
      <MUIThemeProvider theme={muiTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Global styles={globalStyles} />
          <Component {...pageProps} />
        </LocalizationProvider>
      </MUIThemeProvider>
      </EmotionThemeProvider>
    </CacheProvider>
  );
}
