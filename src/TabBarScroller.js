import React, { PureComponent, cloneElement, Children } from "react";
import type { Element } from 'react'
import classnames from 'classnames'
import { MDCTabBarScroller } from "@material/tabs";
import "@material/tabs/dist/mdc.tabs.css";
import { ClassNamed } from './util'

type Props = {
  ...ClassNamed,
  active: number,

}

export default class TabBarScroller extends PureComponent<Props> {

  root: HTMLDivElement | null
  mdcTabBar: ?MDCTabBarScroller;

  static defaultProps = {
    active: 0,
  }

  handleRef = (ref : ?HTMLElement) => {
    this.root = ref;
  };

  componentDidMount() {
    if (this.root) {
      const { tabBar } = MDCTabBarScroller.attachTo(this.root);
      this.mdcTabBar = tabBar;
      this.sync(this.props);
    }
  }

  sync({ active } : Props) {
    if (!this.mdcTabBar || active < 0 || active > this.mdcTabBar.tabs.length) {
      return;
    }
    for (const [index, tab] of Object.entries(this.mdcTabBar.tabs)) {
      tab.foundation_.setActive(Number(index) === active);
    }
    this.mdcTabBar.setActiveTabIndex_(active);
  }

  componentWillReceiveProps(nextProps : Props) {
    this.sync(nextProps);
  }

  render() {
    const { className } = this.props
    return (
      <div
        ref={this.handleRef}
        {...this.props}
        className={classnames(className, "mdc-tab-bar-scroller")}
      >
        {this.props.children}
      </div>
    );
  }
}

export const IndicatorBack = ({ className, ...rest } : Props) => (
  <div
    {...rest}
    className={classnames(className, "mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--back")}
  />
);

export const IndicatorForward = ({ className, ...rest } : Props) => (
  <div
    {...rest}
    className={classnames(className, "mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--forward")}
  />
);

export const IndicatorInner = ({ children, className } : { ...ClassNamed, children: Element<*> }) =>
  cloneElement(Children.only(children), {
    className: classnames(className, "mdc-tab-bar-scroller__indicator__inner")
  });

export const ScrollFrame = ({ className, ...rest } : ClassNamed) => (
  <div {...rest} className={classnames(className, "mdc-tab-bar-scroller__scroll-frame")} />
);

export const ScrollFrameTabs = ({ className, ...rest } : ClassNamed) => (
  <div
    {...rest}
    className={classnames(className, "mdc-tab-bar mdc-tab-bar-scroller__scroll-frame__tabs")}
  />
);
