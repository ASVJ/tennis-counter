enum Point {
  Love = 0,
  Fifteen = 15,
  Thirty = 30,
  Forty = 40,
  Advantage = "Advantage",
}

export type PlayerInfo = {
  name: string;
  nationality?: string;
  ranking: number;
};

export type TennisSet = {
  player1Games: number;
  player2Games: number;
};

export type MatchState = {
  currentSet: number;
  currentGamePoints: [Point, Point];
  sets: TennisSet[];
};

export type TennisMatch = {
  player1: PlayerInfo;
  player2: PlayerInfo;
  startTime: Date;
  endTime?: Date;
  matchState: MatchState;
};
