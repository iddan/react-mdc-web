// @flow

import React, { PureComponent } from "react";
import type { Element } from "react";
import classnames from "classnames";
import { MDCTabBar } from "@material/tabs";
import "@material/tabs/dist/mdc.tabs.css";
import type { ClassNamed } from "../util";
import sync from "./sync";

type Props = {
  ...ClassNamed,
  active?: number,
  children: Element<*> | Element<*>[]
};

export default class TabBar extends PureComponent<Props> {
  root: HTMLElement | null;
  mdcTabBar: MDCTabBar;

  static defaultProps = {
    active: 0
  };

  handleRef = (root: ?HTMLElement) => {
    if (root) {
      this.root = root;
    }
  };

  componentDidMount() {
    this.mdcTabBar = MDCTabBar.attachTo(this.root);
    sync(this.mdcTabBar, this.props, null);
  }

  componentDidUpdate(prevProps: Props) {
    sync(this.mdcTabBar, this.props, prevProps);
  }

  render() {
    const { className, children } = this.props;
    return (
      <nav
        {...this.props}
        ref={this.handleRef}
        className={classnames(className, "mdc-tab-bar")}
        role="tablist"
      >
        {children}
        <span className="mdc-tab-bar__indicator" />
      </nav>
    );
  }
}
