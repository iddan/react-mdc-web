import React, { PureComponent } from "react";
import type { ComponentType } from "react";
import classnames from "classnames"
import { MDCTabBar } from "@material/tabs";
import "@material/tabs/dist/mdc.tabs.css";
import type { ClassNamed } from './util'

type Props = {
  ...ClassNamed,
  active: number
};

function sync(mdcTabBar: MDCTabBar, { active }: Props) {
  if (active < 0 || active > mdcTabBar.tabs.length) {
    return;
  }
  for (const [index, tab] of mdcTabBar.tabs.entries()) {
    tab.foundation_.setActive(Number(index) === active);
  }
  mdcTabBar.setActiveTabIndex_(active);
}

export default class TabBar extends PureComponent<Props> {
  root = null;
  mdcTabBar: MDCTabBar = null;

  static defaultProps = {
    active: 0,
  }

  handleRef = (root: ?HTMLElement) => {
    if (root) {
      this.root = root;
      this.mdcTabBar = MDCTabBar.attachTo(root);
      sync(this.mdcTabBar, this.props);
    }
  };

  componentWillReceiveProps(nextProps: Props) {
    if (this.mdcTabBar) {
      sync(this.mdcTabBar, nextProps);
    }
  }

  render() {
    const { className } = this.props
    return (
      <nav
        {...this.props}
        ref={this.handleRef}
        className={classnames(className, "mdc-tab-bar")}
        role="tablist"
      />
    );
  }
}

type TabWrappedComponent =
  | string
  | ComponentType<
      $Shape<{
        ...ClassNamed,
        role: string
      }>
    >;

export const Tab = ({
  Component = "a",
  className,
  ...rest
}: {
  ...ClassNamed,
  Component?: TabWrappedComponent,
}) => (
  <Component
    className={classnames("mdc-tab", className)}
    role="tab"
    {...rest}
  />
);

Tab.withComponent = (WrappedComponent: TabWrappedComponent) => (
  props: Object
) => <Tab {...props} Component={WrappedComponent} />;

export const Indicator = ({ className, ...rest }: ClassNamed) => (
  <span {...rest} className={classnames("mdc-tab-bar__indicator", className)} />
);
