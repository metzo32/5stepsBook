import styled from "@emotion/styled";

export const Small = styled.small`
  color: ${({ theme }) => theme.colors.error};
`;

export const Main = styled.main`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: 20px;
  box-sizing: border-box;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Textarea = styled.textarea<{ hasError: boolean }>`
  width: 100%;
  height: 200px;
  resize: none;
  border: 1px solid
    ${({ hasError, theme }) => (hasError ? theme.colors.error : theme.colors.secondary)};
`;

export const Input = styled.input<{ hasError?: boolean }>`
  border: 1px solid
    ${({ hasError, theme }) => (hasError ? theme.colors.error : theme.colors.secondary)};
`;

export const LabelClickable = styled.label`
  cursor: pointer;
`;

export const QuoteTextarea = styled.textarea<{ hasError?: boolean }>`
    width: 100%;
    aspect-ratio: 4/1;
    border: 2px solid
      ${({ hasError, theme }) => (hasError ? theme.colors.error : theme.colors.secondary)};
`