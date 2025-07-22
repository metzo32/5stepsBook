import { ReactNode } from "react";

export default interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
  disabled?: boolean;
}
