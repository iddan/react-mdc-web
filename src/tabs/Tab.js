// @flow

import React from "react";
import classnames from "classnames";
import type { ClassNamed, WrappedComponent } from "../util";

type TabWrappedComponent = WrappedComponent<ClassNamed & { role: string }>;

type Props = ClassNamed & { Component: TabWrappedComponent };

const Tab = ({ Component, className, ...rest }: Props) => (
  <Component
    className={classnames("mdc-tab", className)}
    role="tab"
    {...rest}
  />
);

Tab.defaultProps = {
  Component: "a"
};

Tab.withComponent = (WrappedComponent: TabWrappedComponent) => (
  props: Object
) => <Tab {...props} Component={WrappedComponent} />;

export default Tab;
