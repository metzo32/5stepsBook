import styled from "@emotion/styled";

export const QuoteTextarea = styled.textarea<{ hasError?: boolean }>`
    width: 100%;
    aspect-ratio: 5/1;
    border: 1px solid
      ${({ hasError, theme }) => (hasError ? theme.colors.error : theme.colors.secondary)};
`