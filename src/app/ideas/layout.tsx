import GoalTab from "@/components/layout/tabs/BaseTab";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { FC, HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const LayoutScreen: FC<Props> = ({ children, ...props }) => {
  const defaultStyle = cn(
    "ml-[16rem] mr-[26rem] overflow-hidden",
    props.className
  );

  return (
    <div className="flex flex-col">
      <Navbar />
      <main className={defaultStyle} {...props}>
        <Sidebar />
        <section className="p-4">{children}</section>
        <GoalTab />
      </main>
    </div>
  );
};

export default LayoutScreen;
