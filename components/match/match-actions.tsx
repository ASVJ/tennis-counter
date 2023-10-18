import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  PauseIcon,
} from "@heroicons/react/24/solid";

import { Tooltip } from "@nextui-org/react";
import { tv } from "tailwind-variants";

const button = tv({
  base: "h-5 text-primary cursor-pointer",
  variants: {
    disabled: {
      true: "text-default-300 cursor-not-allowed",
    },
  },
});

type MatchActionsProps = {
  undoDisabled: boolean;
  redoDisabled: boolean;
  onUndo: () => void;
  onRedo: () => void;
};

export const MatchActions = ({
  undoDisabled,
  redoDisabled,
  onUndo,
  onRedo,
}: MatchActionsProps) => (
  <div className="flex justify-between">
    <div className="flex gap-2">
      <Tooltip content="Remove last point" showArrow={true} placement="bottom">
        <ArrowUturnLeftIcon
          onClick={undoDisabled ? undefined : onUndo}
          className={button({ disabled: undoDisabled })}
        />
      </Tooltip>
      <Tooltip content="Undo last action" showArrow={true} placement="bottom">
        <ArrowUturnRightIcon
          onClick={redoDisabled ? undefined : onRedo}
          className={button({ disabled: redoDisabled })}
        />
      </Tooltip>
      <Tooltip content="Pause match" showArrow={true} placement="bottom">
        <PauseIcon className={button({ disabled: redoDisabled })} />
      </Tooltip>
    </div>

    <span className="text-default-300 self-end text-sm">00:00:00</span>
  </div>
);
