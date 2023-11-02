import { MatchScore, MatchSets, Point, Shot } from '@/types/match'

const addPointToMatchScore = (
    currentPoints: [Point, Point],
    set: [number, number],
    playerIndex: 0 | 1
): {
    currentPoints: [Point, Point]
    set: [number, number]
    hasWonSet: boolean
} => {
    let hasWonSet = false
    let otherPlayerIndex = (playerIndex + 1) % 2
    // Check if there is an advantage => 40 - 40
    if (currentPoints[playerIndex] === 'Forty' && currentPoints[otherPlayerIndex] === 'Forty') {
        currentPoints[playerIndex] = 'Forty'
    }

    // If the player has advantage, he wins the set
    if (currentPoints[playerIndex] === 'Advantage') {
        set[playerIndex] += 1
        currentPoints = ['Love', 'Love']
    } else {
        // If the player has 40 points, he wins the set
        // Reset the points to 0 to both player and increment the set
        if (currentPoints[playerIndex] === 'Forty') {
            set[playerIndex] += 1
            currentPoints = ['Love', 'Love']
            // If the player has 30 points, he gets 40
        } else if (currentPoints[playerIndex] === 'Thirty') {
            currentPoints[playerIndex] = 'Forty'
            // If the player has 15 points, he gets 30
        } else if (currentPoints[playerIndex] === 'Fifteen') {
            currentPoints[playerIndex] = 'Thirty'
        } else {
            // If the player has 0 points, he gets 15
            currentPoints[playerIndex] = 'Fifteen'
        }
    }

    // If the player has 6 sets and the other player has less than 5, he wins the round
    // Or If the player has 7 sets and the other player has 5, he wins the round
    if ((set[playerIndex] === 6 && set[otherPlayerIndex] < 5) || (set[playerIndex] === 7 && set[otherPlayerIndex] === 5)) {
        hasWonSet = true
    }

    // If the player has 6 sets and the other player has 6, we go to tie break
    if (set[playerIndex] === 6 && set[otherPlayerIndex] === 6) {
    }

    return {
        currentPoints,
        set,
        hasWonSet,
    }
}

export const getMatchScoreFromShots = (shots: Shot[]): MatchScore => {
    let sets: MatchSets = [[0, 0]]
    let currentPoints: [Point, Point] = ['Love', 'Love']

    let tempCurrentSets: [number, number] = [0, 0]
    let tempCurrentPoints: [Point, Point] = [0, 0]

    for (let shot of shots) {
        if (shot.winner === 'player1') {
            const { currentPoints: newPoints, set: newSet } = addPointToMatchScore(currentPoints, tempCurrentSets, 0)
            sets = [newSet]
            tempCurrentSets = newSet
            currentPoints = newPoints
        } else {
            const { currentPoints: newPoints, set: newSet } = addPointToMatchScore(currentPoints, tempCurrentSets, 1)
            sets = [newSet]
            tempCurrentSets = newSet
            currentPoints = newPoints
        }
    }

    return {
        sets,
        currentPoints: currentPoints,
    }
}
