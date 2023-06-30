import { ReactElement } from "react";

export interface ButtonProps {
  onClick: () => void;
  children: ReactElement | string;
  style?: Record<string, string | number>;
}
