"use client";
import BaseTab from "@/components/layout/tabs/BaseTab";
import React, { FC, useState } from "react";
import GoalCard from "../cards/GoalCard";

interface Props {
  state: boolean;
  onAction?: () => void;
}

const GoalTab: FC<Props> = ({ state, onAction }) => {
  // hook that fetch data

  return (
    <>
      {state && (
        <BaseTab onClose={onAction} title="Goal Tab">
          <GoalCard />
        </BaseTab>
      )}
    </>
  );
};

export default GoalTab;
