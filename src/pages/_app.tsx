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

export default function MyApp({ Component, pageProps }: AppProps) {
  const clientSideEmotionCache = createEmotionCache();
  
  useEffect(() => {
    // Initialize MSW only in development and only on the client side
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
      if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
        import("../mocks/browser").then(({ worker }) => {
          worker.start({
            onUnhandledRequest: "warn",
          });
        });
      }
    }
  }, []);

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
