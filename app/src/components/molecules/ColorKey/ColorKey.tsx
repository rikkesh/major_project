import React,{FC} from 'react';
import PropTypes from 'prop-types';
import './style.css';

interface ColorKeyProps {
  groupA?: string;
  groupB?: string;
  groupC?: string;
  groupD?: string;
}

const ColorKey:FC<ColorKeyProps> = ({ groupA, groupB, groupC, groupD }) => {
  const keySorted =
    groupA || groupB || groupC || groupD ? (
      <div className="ColorKey__Item">
        <div className="ColorKey__Box ColorKey__Sorted"></div>
        <span>Sorted</span>
      </div>
    ) : (
      <div className="ColorKey__Item">
        <div className="ColorKey__Box ColorKey__Unsorted"></div>
        <span>Unsorted</span>
      </div>
    );

  const keyA = groupA ? (
    <div className="ColorKey__Item">
      <div className="ColorKey__Box ColorKey__GroupA"></div>
      <span>{groupA}</span>
    </div>
  ) : null;

  const keyB = groupB ? (
    <div className="ColorKey__Item">
      <div className="ColorKey__Box ColorKey__GroupB"></div>
      <span>{groupB}</span>
    </div>
  ) : null;

  const keyC = groupC ? (
    <div className="ColorKey__Item">
      <div className="ColorKey__Box ColorKey__GroupC"></div>
      <span>{groupC}</span>
    </div>
  ) : null;

  const keyD = groupD ? (
    <div className="ColorKey__Item">
      <div className="ColorKey__Box ColorKey__GroupD"></div>
      <span>{groupD}</span>
    </div>
  ) : null;

  return (
    <div className="ColorKey">
      {keySorted}
      {keyA}
      {keyB}
      {keyC}
      {keyD}
    </div>
  );
};


export default ColorKey;
