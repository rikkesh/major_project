import React from 'react';
import './style.css';
import Button from '../../atoms/Button/Button';
import {
  MdPlayArrow as Play,
  MdPause as Pause,
  MdSkipNext as Forward,
  MdSkipPrevious as Backward,
  MdRepeat as Repeat
} from 'react-icons/md';
import Menu from '../Menu/Menu';

// Helper function
function isDisabled(action: (() => void) | undefined, disabled: boolean = false): boolean {
  return action === undefined || disabled;
}

interface VisualizerControlsProps {
  // Actions
  onPlay?: () => void;
  onPause?: () => void;
  onBackward?: () => void;
  onForward?: () => void;
  onRepeat?: () => void;
  onAdjustSpeed?: (speed: string) => void;

  // States
  playing?: boolean;
  playDisabled?: boolean;
  pauseDisabled?: boolean;
  backwardDisabled?: boolean;
  forwardDisabled?: boolean;
  repeatDisabled?: boolean;
  playbackSpeed?: number;
}

const VisualizerControls: React.FC<VisualizerControlsProps> = ({
  // Actions
  onPlay,
  onPause,
  onBackward,
  onForward,
  onRepeat,
  onAdjustSpeed = () => {},  // Default function

  // States
  playing = false,
  playDisabled = false,
  pauseDisabled = false,
  backwardDisabled = false,
  forwardDisabled = false,
  repeatDisabled = false,
  playbackSpeed = 1
}) => {
  return (
    <div className="VisualizerControls">
      {/* Repeat */}
      <Button
        icon={Repeat}
        onClick={onRepeat}
        disabled={isDisabled(onRepeat, repeatDisabled)}
        className="VisualizerControls__Button"
      >
        <Repeat />
      </Button>

      {/* Backward Button */}
      <Button
        icon={Backward}
        onClick={onBackward}
        disabled={isDisabled(onBackward, backwardDisabled)}
        iconClass="VisualizerControls__Icon"
        className="VisualizerControls__Button"
      >
        <Backward />
      </Button>

      {/* Play or Pause button - context dependent */}
      <Button
        icon={playing ? Pause : Play}
        onClick={playing ? onPause : onPlay}
        disabled={
          playing
            ? isDisabled(onPause, pauseDisabled)
            : isDisabled(onPlay, playDisabled)
        }
        raised
        iconClass="VisualizerControls__Icon"
        className="VisualizerControls__CenterButton"
      >
        {playing ? <Pause /> : <Play />}
      </Button>

      {/* Forward Button */}
      <Button
        icon={Forward}
        onClick={onForward}
        disabled={isDisabled(onForward, forwardDisabled)}
        iconClass="VisualizerControls__Icon"
        className="VisualizerControls__Button"
      >
        <Forward />
      </Button>

      {/* Playback Speed */}
      <Menu
        items={['0.25x', '0.5x', '1x', '2x', '4x']}
        placeholder="Speed"
        selected={`${playbackSpeed}x`}
        onSelect={onAdjustSpeed}
        noDropIcon
        className="VisualizerControls__SpeedButton"
      />
    </div>
  );
};

export default VisualizerControls;
