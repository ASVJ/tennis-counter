import { Card, CardBody } from "@nextui-org/react";

type MatchLineProps = {
  player: {
    name: string;
  };
  sets: number[];
  currentPoint: string;
};

const CardMatchLine = ({ player, sets, currentPoint }: MatchLineProps) => (
  <div className="flex space-x-2 items-center relative text-sm md:text-base">
    <div className="dark:bg-white/10 dark:border-0 border border-gray-300 rounded-lg px-2 py-1 w-32 min-w-[8rem]">
      {player.name}
    </div>
    <div className="flex space-x-2">
      {sets.map((set, index) => (
        <span
          className="w-8 py-1 bg-white/10 flex items-center justify-center rounded-lg"
          key={player.name + "set" + index + set}
        >
          {set}
        </span>
      ))}
      <span className="absolute right-0 w-8 py-1 bg-white/10 flex items-center justify-center rounded-lg border-primary border">
        {currentPoint}
      </span>
    </div>
  </div>
);

type CardMatchProps = {
  playerOne: MatchLineProps;
  playerTwo: MatchLineProps;
};

export const MatchCard = ({ playerOne, playerTwo }: CardMatchProps) => (
  <Card>
    <CardBody className="space-y-2 p-2">
      <CardMatchLine {...playerOne} />
      <CardMatchLine {...playerTwo} />
    </CardBody>
  </Card>
);
