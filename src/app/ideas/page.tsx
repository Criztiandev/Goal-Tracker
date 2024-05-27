import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";

import React from "react";

const PageScreen = () => {
  return (
    <div className="">
      <div className="flex w-full mb-4 justify-end gap-4">
        <Sheet>
          <SheetTrigger className={buttonVariants({ variant: "default" })}>
            Create
          </SheetTrigger>

          <SheetContent className="w-[800px]">
            <SheetHeader>
              <SheetTitle>Goals</SheetTitle>
              <SheetDescription>This action is the place</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="grid grid-cols-4">
        <Card className="h-[300px] cursor-pointer">
          <CardHeader>
            <h2 className="text-[32px] font-bold">2024 New Year Resolution</h2>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default PageScreen;
