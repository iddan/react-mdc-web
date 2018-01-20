// @flow

import React from "react";
import classnames from "classnames";
import Ripple from "./Ripple";
import "@material/fab/dist/mdc.fab.css";

type Props = $Shape<{
  mini: boolean,
  children: string
}>;

export const FAB = ({ children, mini, ...rest }: Props) => (
  <Ripple>
    <button
      {...rest}
      className={classnames("mdc-fab", "material-icons", {
        "mdc-fab--mini": mini
      })}
    >
      <span className="mdc-fab__icon">{children}</span>
    </button>
  </Ripple>
);

export default FAB;
