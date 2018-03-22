// @flow

import React, { PureComponent, Children } from "react";
import polyfill from "react-lifecycles-compat";
import classnames from "classnames";
import { MDCIconToggle } from "@material/icon-toggle/dist/mdc.iconToggle";
import shallowEqual from "fbjs/lib/shallowEqual";
import { ClassNamed } from "./util";
import "@material/icon-toggle/dist/mdc.icon-toggle.css";

type ToggleState = {
  label: string,
  content?: string,
  cssClass?: string,
};

type Props = ClassNamed & {
  toggleOn: ToggleState,
  toggleOff: ToggleState,
  pressed?: boolean,
  disabled?: boolean,
  /** Should be used instead of data-icon-inner-selector */
  children?: React.Element<*>,
};

class IconToggle extends PureComponent {

  props: Props;
  state: {
    stringToggleOff: string,
    stringToggleOn: string,
  };

  static defaultProps = {
    pressed: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const stringToggleOn = shallowEqual(
      nextProps.toggleOn,
      prevState && prevState.lastToggleOn
    )
      ? prevState.stringToggleOn
      : JSON.stringify(nextProps.toggleOn);

    const stringToggleOff = shallowEqual(
      nextProps.toggleOff,
      prevState && prevState.lastToggleOff
    )
      ? prevState.stringToggleOff
      : JSON.stringify(nextProps.toggleOff);

    return {
      stringToggleOn,
      stringToggleOff,
      lastToggleOn: nextProps.toggleOn,
      lastToggleOff: nextProps.toggleOff
    };
  }

  id = `icon-toggle-${Math.random().toString(32).slice(2)}`
  root : ?HTMLElement;

  handleRef = (ref) => {
    this.root = ref;
  }

  componentDidMount() {
    if (this.root) {
      MDCIconToggle.attachTo(this.root);
    }
  }

  render() {
    const { id } = this
    const { className, pressed, children, toggleOn, toggleOff, disabled, ...rest } = this.props;
    const { stringToggleOn, stringToggleOff } = this.state;
    const toggleState = pressed ? toggleOn : toggleOff;
    return (
      <i
        tabIndex="0"
        role="button"
        {...rest}
        ref={this.handleRef}
        className={classnames(className, toggleState.cssClass, "mdc-icon-toggle material-icons")}
        aria-pressed={pressed}
        aria-label={toggleState.label}
        aria-disabled={disabled}
        data-toggle-on={stringToggleOn}
        data-toggle-off={stringToggleOff}
        data-icon-inner-selector={children && `#${id}`}
      >
        {toggleState.content || (children && React.cloneElement(Children.only(children), { id }))}
      </i>
    );
  }
}

export default polyfill(IconToggle);
