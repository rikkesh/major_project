import React from 'react';
import './style.css';
import Bar from '../../atoms/Bar/Bar';

interface SortChartProps {
  numbers: number[];
  maxNum: number;
  groupA: number[];
  groupB: number[];
  groupC: number[];
  groupD: number[];
  sortedIndices: number[];
}

const getListOfBars = (
  numbers: number[],
  maxNum: number,
  groupA: number[],
  groupB: number[],
  groupC: number[],
  groupD: number[],
  sortedIndices: number[]
) => {
  return numbers.map((num, i) => {
    const width = 100 / numbers.length;
    const height = (num / maxNum) * 100;
    const stateA = groupA.includes(i);
    const stateB = groupB.includes(i);
    const stateC = groupC.includes(i);
    const stateD = groupD.includes(i);
    const sorted = sortedIndices.includes(i);

    const margin = i === numbers.length ? '0' : width > 3 ? '0.5rem' : '0.125rem';
    return (
      <Bar
        key={`${i}_${num}`}
        width={width}
        height={height}
        val={width > 4 ? num : 0} // Provide a default value of 0 instead of null
        stateA={stateA}
        stateB={stateB}
        stateC={stateC}
        stateD={stateD}
        sorted={sorted}
        style={{ marginRight: `${margin}` }}
      />
    );
  });
};

const SortChart: React.FC<SortChartProps> = ({
  numbers,
  maxNum,
  groupA,
  groupB,
  groupC,
  groupD,
  sortedIndices
}) => {
  return (
    <div className="SortChart">
      {getListOfBars(
        numbers,
        maxNum,
        groupA,
        groupB,
        groupC,
        groupD,
        sortedIndices
      )}
    </div>
  );
};

export default SortChart;
