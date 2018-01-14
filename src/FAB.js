// @flow

import React from "react";
import classnames from "classnames";
import { attachRipple } from "./util";
import "@material/fab/dist/mdc.fab.css";

type Props = $Shape<{
  mini: boolean,
  children: string
}>;

export const FAB = ({ children, mini, ...rest }: Props) => (
  <button
    ref={attachRipple}
    {...rest}
    className={classnames("mdc-fab", "material-icons", {
      "mdc-fab--mini": mini
    })}
  >
    <span className="mdc-fab__icon">{children}</span>
  </button>
);

export default FAB;
