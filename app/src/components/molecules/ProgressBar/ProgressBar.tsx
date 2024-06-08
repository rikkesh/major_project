import React from 'react';
import './style.css';

interface ProgressBarProps {
  width: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ width }) => (
  <div className="ProgressBar">
    <div
      className="ProgressBar__Active"
      style={{
        width: `${width}%`
      }}
    ></div>
  </div>
);

export default ProgressBar;
