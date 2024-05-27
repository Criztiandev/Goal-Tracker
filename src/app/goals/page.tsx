import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";

import React from "react";

const PageScreen = () => {
  return (
    <div className="">
      <div className="flex w-full mb-4 justify-end gap-4">
        <Button>Create</Button>
        <Button>Create</Button>
      </div>
      <div className="grid grid-cols-4">
        <Link href={`/goals/details/${123}`}>
          <Card className="h-[300px]">
            <CardHeader>
              <h2 className="text-[32px] font-bold">
                2024 New Year Resolution
              </h2>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default PageScreen;
