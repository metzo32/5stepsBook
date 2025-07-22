import styled from "@emotion/styled";
import ButtonProps from "../types/button.type"

const ButtonStrongStyle = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textInverted};
  padding: 10px 15px;
  border-radius: 5px;

  &:disabled {
    background: ${({ theme }) => theme.colors.disabledBg};
    color: ${({ theme }) => theme.colors.disabledText};
    cursor: not-allowed;
  }
`;

export function ButtonStrong({
  children,
  type,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <ButtonStrongStyle type={type} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStrongStyle>
  );
}

const ButtonMediumStyle = styled.button`
  background: ${({ theme }) => theme.colors.disabledBg};
  color: ${({ theme }) => theme.colors.textInverted};
  padding: 10px 16px;
  border-radius: 8px;
`;

export function ButtonMedium({
  children,
  type,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <ButtonMediumStyle type={type} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonMediumStyle>
  );
}
