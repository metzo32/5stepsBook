// src/pages/_app.tsx
"use client";

import type { AppProps } from "next/app";
import {
  CacheProvider,
  Global,
  ThemeProvider as EmotionThemeProvider,
} from "@emotion/react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material";
import createEmotionCache from "@/emotion-cache";
import theme from "@/styles/theme";
import globalStyles from "@/styles/global";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import muiTheme from "@/styles/muiTheme";
import { useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/queryClient";
import { fetchBooks } from "@/utils/api";

export default function MyApp({ Component, pageProps }: AppProps) {
  const clientSideEmotionCache = createEmotionCache();

  useEffect(() => {
    if (
      process.env.NODE_ENV === "development" &&
      typeof window !== "undefined"
    ) {
      if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
        import("../mocks/browser").then(({ worker }) => {
          worker.start();
        });
      }
    }

    // Prefetch books data immediately
    if (typeof window !== "undefined") {
      queryClient.prefetchQuery({
        queryKey: ["books"],
        queryFn: fetchBooks,
        staleTime: 0,
        gcTime: 0,
      });
    }
  }, []);

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <EmotionThemeProvider theme={theme}>
        <MUIThemeProvider theme={muiTheme}>
          <QueryClientProvider client={queryClient}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Global styles={globalStyles} />
              <Component {...pageProps} />
            </LocalizationProvider>
          </QueryClientProvider>
        </MUIThemeProvider>
      </EmotionThemeProvider>
    </CacheProvider>
  );
}
