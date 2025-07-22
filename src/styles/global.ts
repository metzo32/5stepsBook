// styles/global.ts
import { css } from "@emotion/react";
import { AppTheme } from "./theme";

const globalStyles = (theme: AppTheme) => css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    line-height: 1.5;
    background-color: ${theme.colors.background};
    color: #000;
    margin: 0;
  }

  body {
    padding: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button {
    font: inherit;
    color: inherit;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    outline: none;
  }

  input,
  textarea,
  select {
    font: inherit;
    color: inherit;
    background: none;
    border: 2px solid ${theme.colors.primaryDark};
    border-radius: 5px;
    padding: 10px;
    margin: 0;
    outline: none;
  }

  input[aria-invalid="true"] {
    border-color: ${theme.colors.error};
  }

  input[aria-invalid="false"] {
    border-color: ${theme.colors.primary};
  }

  button {
    cursor: pointer;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export default globalStyles;
