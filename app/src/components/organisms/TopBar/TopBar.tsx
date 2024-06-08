import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Button, { ButtonProps } from '../../atoms/Button/Button';
import { MdMenu as Hamburger, MdClose as Close } from 'react-icons/md';

interface TopBarProps {
  drawerOpen: boolean;
  toggleDrawer: () => void;
  children?: React.ReactNode; // optional children prop to support React Node
}

const TopBar: React.FC<TopBarProps> = ({ drawerOpen, toggleDrawer, children }) => {
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
          <span className="TopBar__Title">Sort Visualizer</span>
        </section>
        <section className="TopBar__Section TopBar__Section_align_end">
          {children}
        </section>
      </div>
    </header>
  );
};

// Define prop types for type-checking
TopBar.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  children: PropTypes.node, // specify children as React node to allow different child types
};

export default TopBar;
