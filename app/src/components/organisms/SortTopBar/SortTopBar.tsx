import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Button, { ButtonProps } from '../../atoms/Button/Button';
import { MdMenu as Hamburger, MdClose as Close } from 'react-icons/md';

interface SortTopBarProps {
  drawerOpen: boolean;
  toggleDrawer: () => void;
  children?: React.ReactNode; // optional children prop to support React Node
}

const SortTopBar: React.FC<SortTopBarProps> = ({ drawerOpen, toggleDrawer, children }) => {
  const buttonProps: ButtonProps = {
    icon: drawerOpen ? Close : Hamburger,
    className: 'TopBar__MenuButton',
    iconClass: 'TopBar__Icon',
    onClick: toggleDrawer,
  };

  return (
    <header className="TopBar">
      <div className="TopBar__Row">
        <section className="TopBar__Section">
          <Button {...buttonProps} />
     
        </section>
        <section className="TopBar__Section TopBar__Section_align_end">
          {children}
        </section>
      </div>
    </header>
  );
};

// Define prop types for type-checking
SortTopBar.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  children: PropTypes.node, // specify children as React node to allow different child types
};

export default SortTopBar;
