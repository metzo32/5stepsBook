import { css } from "@emotion/react";

export const colGap = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const colGapLg = css`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const colBetween = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const rowGap = css`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const rowBetween = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const centered = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
