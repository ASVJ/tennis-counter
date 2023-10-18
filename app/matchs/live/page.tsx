"use client";

import { Button } from "@nextui-org/button";
import { MatchActions } from "@/components/match/match-actions";
import { MatchCard } from "@/components/match/match-card";
import { PlusIcon } from "@heroicons/react/24/solid";
import { title } from "@/components/primitives";
import { useState } from "react";

const playerOneData = {
  player: {
    name: "Alexandre",
  },
  sets: [6, 6, 6],
  currentPoint: "0",
};

const playerTwoData = {
  player: {
    name: "Sacha",
  },
  sets: [6, 6, 6],
  currentPoint: "0",
};

const PlayerButton = ({
  player,
  onClick,
}: {
  player: {
    name: string;
  };
  onClick: () => void;
}) => (
  <div className="flex flex-col space-y-1 text-center">
    <span className="inline md:hidden text-sm">{player.name}</span>
    <Button
      color="primary"
      size="sm"
      className="text-center"
      onClick={onClick}
      fullWidth
    >
      <PlusIcon className="h-5" /> Score point
    </Button>
  </div>
);

const Page = () => {
  const [isUndoDisabled, setIsUndoDisabled] = useState(true);
  const [isRedoDisabled, setIsRedoDisabled] = useState(true);

  const handlePlayerOneClick = () => {};
  const handlePlayerTwoClick = () => {};

  const handleUndo = () => {};
  const handleRedo = () => {};

  return (
    <section className="space-y-4 h-full flex flex-col">
      <h1 className={title()}>Match</h1>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 h-full ">
        <div className="md:col-span-10 space-y-2">
          <MatchCard playerOne={playerOneData} playerTwo={playerTwoData} />
          <MatchActions
            onRedo={handleRedo}
            onUndo={handleUndo}
            redoDisabled={isRedoDisabled}
            undoDisabled={isUndoDisabled}
          />
        </div>
        <div className="flex flex-row md:flex-col gap-1 justify-end md:col-span-2">
          <div className="flex-1">
            <PlayerButton
              player={playerOneData.player}
              onClick={handlePlayerOneClick}
            />
          </div>
          <div className="flex-1">
            <PlayerButton
              player={playerTwoData.player}
              onClick={handlePlayerTwoClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
