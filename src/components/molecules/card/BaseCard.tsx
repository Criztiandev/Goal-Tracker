import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BaseProp } from "@/interface/components";
import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface Props extends BaseProp {
  title: string;
}

const BaseCard: FC<Props> = ({ title, children, ...props }) => {
  return (
    <Card className={cn("min-h-[200px]", props.className)}>
      <CardHeader>{title}</CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default BaseCard;
