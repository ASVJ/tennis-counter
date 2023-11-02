export type Point = 'Love' | 'Fifteen' | 'Thirty' | 'Forty' | 'Advantage' | number

export type PlayerInfo = {
    name: string
    nationality?: string
    ranking?: number
}

export type MatchSets = Array<[number, number]>

export type MatchScore = {
    sets: MatchSets
    currentPoints: [Point, Point]
}

export type MatchState = {
    currentSet: number
    score: MatchScore
}

export type TennisMatch = {
    player1: PlayerInfo
    player2: PlayerInfo
    startTime: Date
    endTime?: Date
    matchState: MatchState
}

export type PlayerNumber = 'player1' | 'player2'

export type Shot = {
    winner: PlayerNumber
    timestamp: Date
}
