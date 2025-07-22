import styled from "@emotion/styled";

export const WrapperStyle = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 15px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.disabledBg};

  @media (max-width: 1023px) {
    display: none;
  }
`;
