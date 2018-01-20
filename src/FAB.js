// @flow

import React from "react";
import classnames from "classnames";
import Ripple from "./Ripple";
import "@material/fab/dist/mdc.fab.css";
import type { ClassNamed } from './util'

type Props = $Shape<{
  ...ClassNamed,
  mini: boolean,
  children: string
}>;

export const FAB = ({ children, mini, className, ...rest }: Props) => (
  <Ripple>
    <button
      {...rest}
      className={classnames(className, "mdc-fab", "material-icons", {
        "mdc-fab--mini": mini
      })}
    >
      <span className="mdc-fab__icon">{children}</span>
    </button>
  </Ripple>
);

export default FAB;
