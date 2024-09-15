import React, { Fragment } from 'react';
import './style.css';

import Button from '../../atoms/Button/Button';
// import Switch from '../../atoms/Switch/Switch';
import Menu from '../../molecules/Menu/Menu';

type AppControlsProps = {
  algorithm: string | null; // Define as string or null
  onAlgorithmChange: (algorithm: string) => void;
  onGenerateRandomArray: () => void;
  arraySize: number;
  onArraySizeChange: (size: number) => void;
  onToggleDarkMode: () => void;
  darkMode: boolean;
};

const AppControls: React.FC<AppControlsProps> = ({
  algorithm,
  onAlgorithmChange,
  onGenerateRandomArray,
  arraySize,
  onArraySizeChange,
  // onToggleDarkMode,
  // darkMode
}) => {
  // Ensure `algorithm` is a string; default to an empty string if null
  const validatedAlgorithm = algorithm ?? '';

  return (
    <Fragment>
      <Menu
        placeholder="Sort Algorithm"
        items={[
          'Bubble Sort',
          'Selection Sort',
          'Insertion Sort',
          'Merge Sort',
          'Quick Sort',
          'Heap Sort'
        ]}
        selected={validatedAlgorithm}
        onSelect={onAlgorithmChange}
      />

      <div className="AppControls__Size">
        <span>Size</span>
        <Menu
          placeholder="Array Size"  
          items={['5', '10', '25', '50', '75', '100']}
          selected={String(arraySize)}
          onSelect={(value) => onArraySizeChange(Number(value))}
        />
      </div>

      <Button onClick={onGenerateRandomArray}>Randomize</Button>
    </Fragment>
  );
};

export default AppControls;
