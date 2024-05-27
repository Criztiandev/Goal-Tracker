"use client";

import React, { FC } from "react";
import { ScrollArea } from "../../ui/scroll-area";
import { Button } from "../../ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BaseProp } from "@/interface/components";

interface Props extends BaseProp {
  title?: string;
  onClose?: () => void;
  hideAction?: boolean;
}

const BaseTab: FC<Props> = ({ children, hideAction, ...props }) => {
  return (
    <div className="absolute top-0 right-0 border w-[400px] h-screen bg-white overflow-hidden">
      <div className="px-4 pt-4 space-y-4">
        {!hideAction && <BaseTabHeader {...props} />}
      </div>

      <ScrollArea className="h-screen p-4 ">
        <div className={cn("", props.className)}>{children}</div>
      </ScrollArea>
    </div>
  );
};

export default BaseTab;

// Helper
const BaseTabHeader: FC<Pick<Props, "title" | "onClose">> = ({
  title,
  onClose,
}) => {
  return (
    <div
      className={cn(
        `flex items-center ${title ? "justify-between" : "justify-end"}`
      )}>
      {title && <h3 className="text-[24px] font-bold">{title}</h3>}

      <div>
        <Button onClick={onClose} size="icon" variant="ghost">
          <X />
        </Button>
      </div>
    </div>
  );
};
