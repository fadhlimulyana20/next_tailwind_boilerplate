import { ReactNode, RefObject } from "react";

export interface OutsideDivClickProps {
  ref: RefObject<HTMLDivElement>;
  callback: () => void
}

export interface OutsideActionProps {
  children: ReactNode;
  callback: () => void
}