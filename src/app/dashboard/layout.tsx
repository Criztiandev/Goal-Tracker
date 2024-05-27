import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { cn } from "@/lib/utils";
import { FC, HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const LayoutScreen: FC<Props> = ({ children, ...props }) => {
  const defaultStyle = cn("ml-[16rem]", props.className);

  return (
    <div className="flex flex-col">
      <Navbar />
      <main className={defaultStyle} {...props}>
        <Sidebar />
        <section className="p-4">{children}</section>
      </main>
    </div>
  );
};

export default LayoutScreen;
