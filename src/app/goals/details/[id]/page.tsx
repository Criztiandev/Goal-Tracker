"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import GoalTab from "@/features/goal/components/tabs/GoalTab";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { EllipsisVertical, Info, Trash2 } from "lucide-react";

const GoalScreen = () => {
  const [isGoalTabActive, setIsGoalTabActive] = useState(false);

  const toggleGoalTab = () => setIsGoalTabActive((prev) => !prev);

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-2">Perosnal Goals</h2>
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2">
            <Input className="w-[300px]" placeholder="Search" />
            <div className="flex gap-2">
              <Button size="icon" variant="ghost">
                <Trash2 />
              </Button>

              <Button size="icon" variant="ghost">
                <Info />
              </Button>

              <Button size="icon" variant="ghost">
                <EllipsisVertical />
              </Button>
            </div>
          </div>

          <div className="space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button>Boards</Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <span>Kanban</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button>Create</Button>
          </div>
        </div>
      </div>

      <GoalTab state={isGoalTabActive} onAction={toggleGoalTab} />
    </>
  );
};

export default GoalScreen;
