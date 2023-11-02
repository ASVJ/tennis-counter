import { Button } from '@nextui-org/button'
import { PlayerInfo } from '@/types/match'
import { PlusIcon } from '@heroicons/react/24/solid'

type PlayerButtonProps = {
    player: PlayerInfo
    onClick: () => void
}

export const MatchAddPoint = ({ player, onClick }: PlayerButtonProps) => (
    <div className="flex flex-col space-y-1 md:space-y-0 text-center w-full">
        <span className="inline md:hidden text-sm">{player.name}</span>
        <Button color="primary" size="md" className="text-center" onClick={onClick} fullWidth>
            <PlusIcon className="h-5" /> Score point
        </Button>
    </div>
)
