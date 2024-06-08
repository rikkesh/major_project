import React, { FC, MouseEvent } from 'react';
import './style.css';
import { CSS_CLASSES } from './constants';

// Define the ButtonProps interface for type-checking
// ButtonProps.ts (interface definition file)
export interface ButtonProps {
    className?: string;
    raised?: boolean;
    unelevated?: boolean;
    outlined?: boolean;
    dense?: boolean;
    notCased?: boolean;
    disabled?: boolean;
    icon?: React.ElementType | string;
    iconClass?: string;
    href?: string;
    onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    children?: React.ReactNode;
  }
  

const buildClassNames = (rootClass: string, classMappings: Record<string, boolean>, userClassName?: string) => {
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
};

const renderIcon = (icon: React.ElementType | string, iconClass?: string) => {
  const IconComponent = typeof icon === 'string' ? (props: React.HTMLProps<HTMLSpanElement>) => <span {...props} /> : icon;
  return <IconComponent className={`${CSS_CLASSES.ICON} ${iconClass}`} />;
};

const Button: FC<ButtonProps> = ({
  className,
  raised,
  unelevated,
  outlined,
  dense,
  notCased,
  disabled,
  icon,
  iconClass,
  href,
  onClick,
  children
}) => {
  const classNames = buildClassNames(
    CSS_CLASSES.ROOT,
    {
      [CSS_CLASSES.DENSE]: dense ?? false,
      [CSS_CLASSES.RAISED]: raised ?? false,
      [CSS_CLASSES.OUTLINED]: outlined ?? false,
      [CSS_CLASSES.UNELEVATED]: unelevated ?? false,
      [CSS_CLASSES.UPPERCASE]: !notCased ?? false,
    },
    className
  );

  if (href) {
    return (
      <a href={href} className={classNames} aria-disabled={disabled} onClick={onClick}>
        {icon ? renderIcon(icon, iconClass) : null}
        <span className={CSS_CLASSES.LABEL}>{children}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classNames} disabled={disabled}>
      {icon ? renderIcon(icon, iconClass) : null}
      <span className={CSS_CLASSES.LABEL}>{children}</span>
    </button>
  );
};



export default Button;
