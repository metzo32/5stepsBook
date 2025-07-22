import styled from "@emotion/styled";

const EmptyImageWrapper = styled.div`
  position: relative;
  width: 175px;
  height: 250px;
  background: ${({ theme }) => theme.colors.disabledBg};
`;

export function EmptyImage({ children }: { children: React.ReactNode }) {
  return <EmptyImageWrapper>{children}</EmptyImageWrapper>;
}
