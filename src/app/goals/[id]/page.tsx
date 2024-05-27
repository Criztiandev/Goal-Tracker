import { Button } from "@/components/ui/button";
import React from "react";

const GoalScreen = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <div>
          <h2 classNae="text-[24px]">Title</h2>
        </div>
        <Button>Create</Button>
      </div>
    </div>
  );
};

export default GoalScreen;
