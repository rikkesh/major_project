import React, { useState, MouseEvent } from 'react';
import './style.css';

// Sub components
import Backdrop from '../../atoms/Backdrop/Backdrop';
import { MdExpandMore as AngleDown, MdExpandLess as AngleUp } from 'react-icons/md';
import Button from '../../atoms/Button/Button';

type MenuProps = {
  className?: string;
  selected?: string;
  onSelect: (item: string) => void;
  placeholder?: string;
  items: string[];
  noDropIcon?: boolean;
};

type MenuListProps = {
  open: boolean;
  items: string[];
  onSelect: (evt: MouseEvent<HTMLLIElement>, item: string) => void;
};

const MenuList: React.FC<MenuListProps> = ({ open, items, onSelect }) => {
  return open ? (
    <ul className="Menu__List">
      {items.map((item, i) => (
        <li
          key={`${item}_${i}`}
          onClick={(evt) => onSelect(evt, item)}
          className="Menu__Item"
        >
          {item}
        </li>
      ))}
    </ul>
  ) : null;
};

const Menu: React.FC<MenuProps> = ({ className, selected, onSelect, placeholder, items, noDropIcon }) => {
  const [open, setOpen] = useState<boolean>(false);

  const close = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    setOpen(false);
  };

  const toggle = (evt: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    evt.preventDefault();
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <Backdrop show={open} onClick={close} />
      <div className={`Menu ${className}`}>
        <header className="Menu__Header">
          {noDropIcon ? (
            <Button
              onClick={toggle}
              notCased
              className={selected ? undefined : 'Menu__Placeholder'}
            >
              {selected ? selected : placeholder}
            </Button>
          ) : (
            <div className={selected ? 'Menu__SelectedItem' : 'Menu__Placeholder'}>
              {selected ? selected : placeholder}
            </div>
          )}
          {noDropIcon ? null : (
            <Button
              icon={open ? AngleUp : AngleDown}
              onClick={toggle}
            >
              {null}
            </Button>
          )}
        </header>
        <MenuList
          open={open}
          items={items}
          onSelect={(evt, item) => {
            onSelect(item);
            close(evt as MouseEvent<HTMLElement>);
          }}
        />
      </div>
    </div>
  );
};

export default Menu;
