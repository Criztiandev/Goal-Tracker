import React, { HTMLAttributes } from "react";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="absolute top-0 left-0 w-[16rem] h-screen pt-[80px] border  p-4 flex flex-col ">
      <nav className="flex flex-col justify-between flex-1 ">
        <ul className="flex flex-col gap-4">
          <ListItem active>Goals</ListItem>
        </ul>
      </nav>

      <ul>
        <ListItem>Settings</ListItem>
      </ul>
    </aside>
  );
};

export default Sidebar;

interface ListItemProps extends HTMLAttributes<HTMLLinkElement> {
  path?: string;
  active?: boolean;
}

const ListItem = ({ children, active, path = "/" }: ListItemProps) => {
  return (
    <li>
      <Link
        className={cn(
          "w-full cursor-pointer",
          buttonVariants({
            variant: active ? "default" : "ghost",
            className: "justify-start",
          })
        )}
        href={path}>
        {children}
      </Link>
    </li>
  );
};
