import styled from "@emotion/styled";

export const Small = styled.small`
  color: ${({ theme }) => theme.colors.error};
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: 20px;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
`

export const LabelClick = styled.label`
  cursor: pointer;
`