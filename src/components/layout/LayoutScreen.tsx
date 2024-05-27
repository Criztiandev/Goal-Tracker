import { FC, HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const LayoutScreen: FC<Props> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default LayoutScreen;
