'use client'

import { MatchCard, MatchLineProps } from '@/components/match/match-card'

import { MatchActions } from '@/components/match/match-actions'
import { MatchAddPoint } from '@/components/match/match-add-point'
import { Shot } from '@/types/match'
import { getMatchScoreFromShots } from '@/libs/helpers/match'
import { title } from '@/components/primitives'
import { useState } from 'react'

const Page = () => {
    const [currentShotIndex, setCurrentShotIndex] = useState(0)
    const [matchHistory, setMatchHistory] = useState<Shot[]>([
        {
            winner: 'player1',
            timestamp: new Date(),
        },
        {
            winner: 'player1',
            timestamp: new Date(),
        },
        {
            winner: 'player1',
            timestamp: new Date(),
        },
        {
            winner: 'player1',
            timestamp: new Date(),
        },
        {
            winner: 'player1',
            timestamp: new Date(),
        },
        {
            winner: 'player2',
            timestamp: new Date(),
        },
        {
            winner: 'player1',
            timestamp: new Date(),
        },
        {
            winner: 'player2',
            timestamp: new Date(),
        },
        {
            winner: 'player2',
            timestamp: new Date(),
        },
        {
            winner: 'player2',
            timestamp: new Date(),
        },
        {
            winner: 'player2',
            timestamp: new Date(),
        },
        {
            winner: 'player2',
            timestamp: new Date(),
        },
        {
            winner: 'player2',
            timestamp: new Date(),
        },
        {
            winner: 'player2',
            timestamp: new Date(),
        },
        {
            winner: 'player2',
            timestamp: new Date(),
        },
    ])

    const handlePlayerOneClick = () => {
        const newMatchHistory = [...matchHistory]
        newMatchHistory.push({
            winner: 'player1',
            timestamp: new Date(),
        })
        setCurrentShotIndex(newMatchHistory.length)
        setMatchHistory(newMatchHistory)
    }
    const handlePlayerTwoClick = () => {
        const newMatchHistory = [...matchHistory]
        newMatchHistory.push({
            winner: 'player2',
            timestamp: new Date(),
        })
        setCurrentShotIndex(newMatchHistory.length)
        setMatchHistory(newMatchHistory)
    }

    const handleUndo = () => {}
    const handleRedo = () => {}

    const isUndoDisabled = matchHistory.length === 0
    const isRedoDisabled = currentShotIndex === matchHistory.length

    const currentMatchScore = getMatchScoreFromShots(matchHistory)

    const playerOneLine: MatchLineProps = {
        player: {
            name: 'Player 1',
        },
        currentPoint: currentMatchScore.currentPoints[0],
        sets: currentMatchScore.sets.map((set) => set[0]),
    }

    const playerTwoLine: MatchLineProps = {
        player: {
            name: 'Player 2',
        },
        currentPoint: currentMatchScore.currentPoints[1],
        sets: currentMatchScore.sets.map((set) => set[1]),
    }

    console.log(currentMatchScore)

    return (
        <section className="space-y-4 h-full flex flex-col">
            <h1 className={title()}>Match</h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 h-full md:h-auto">
                <div className="md:col-span-9 xl:col-span-10 space-y-2">
                    <MatchCard playerOne={playerOneLine} playerTwo={playerTwoLine} />
                    <MatchActions onRedo={handleRedo} onUndo={handleUndo} redoDisabled={isRedoDisabled} undoDisabled={isUndoDisabled} />
                </div>
                <div className="flex md:block flex-row md:flex-col gap-1 space-y-0 md:space-y-1 justify-end md:col-span-3 xl:col-span-2">
                    <div className="flex-1 flex items-end">
                        <MatchAddPoint player={playerOneLine.player} onClick={handlePlayerOneClick} />
                    </div>
                    <div className="flex-1 flex items-end">
                        <MatchAddPoint player={playerTwoLine.player} onClick={handlePlayerTwoClick} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page
