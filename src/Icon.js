// @flow
import React from "react";
import classnames from "classnames"
import type { ClassNamed } from './util'

const Icon = ({ className, ...rest }: ClassNamed) => (
  <i {...rest} className={classnames(className, "material-icons")} />
);

export default Icon;
