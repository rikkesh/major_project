import React, { Component } from 'react';
import './style.css';

interface SwitchProps {
  onSwitch: () => void;
  className?: string;
  label?: string;
  checked?: boolean;
}

interface SwitchState {
  checked: boolean;
}

class Switch extends Component<SwitchProps, SwitchState> {
  constructor(props: SwitchProps) {
    super(props);
    this.state = {
      checked: props.checked ?? false,
    };
  }

  componentDidMount() {
    if (this.props.checked !== undefined) {
      this.setState({ checked: this.props.checked });
    }
  }

  componentDidUpdate(prevProps: SwitchProps) {
    if (prevProps.checked !== this.props.checked && this.props.checked !== undefined) {
      this.setState({ checked: this.props.checked });
    }
  }

  toggleChecked = () => {
    this.setState((prevState) => ({ checked: !prevState.checked }));
  };

  handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.toggleChecked();
    this.props.onSwitch();
  };

  render() {
    let switchClass = 'Switch';
    if (this.state.checked) switchClass += ' Switch_checked';
    if (this.props.className) switchClass += ` ${this.props.className}`;

    return (
      <div className={switchClass}>
        <label className="Switch__Label" htmlFor="Switch__Thumb">
          {this.props.label}
        </label>
        <div className="Switch__Button">
          <div className="Switch__Track"></div>
          <input
            className="Switch__Thumb"
            onClick={this.handleClick}
            name="Switch__Thumb"
            id="Switch__Thumb"
            type="button"
          />
        </div>
      </div>
    );
  }
}

export default Switch;
