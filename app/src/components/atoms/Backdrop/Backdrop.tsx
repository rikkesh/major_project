import React from 'react';
import './style.css';
import { CSS_CLASSES } from './constants';

interface BackdropProps {
  show: boolean;
  opaque?: boolean;
  dark?: boolean;
  className?: string;
  onClick?: (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function buildClassNames(rootClass: string, classMappings: { [key: string]: boolean }, userClassName?: string): string {
  let classNames = `${rootClass}`;
  Object.keys(classMappings).forEach((className) => {
    if (classMappings[className]) {
      classNames += ` ${className}`;
    }
  });
  if (userClassName) {
    classNames += ` ${userClassName}`;
  }
  return classNames;
}

const Backdrop: React.FC<BackdropProps> = ({ show, opaque, dark, className, onClick }) => {
  const classNames = buildClassNames(
    CSS_CLASSES.ROOT,
    {
      [CSS_CLASSES.OPAQUE]: opaque || false,
      [CSS_CLASSES.DARK]: dark || false,
      [CSS_CLASSES.CLICKABLE]: onClick !== undefined
    },
    className
  );

  return show ? <div className={classNames} onClick={onClick} /> : null;
};

export default Backdrop;
