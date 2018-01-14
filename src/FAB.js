// @flow

import React from "react";
import type { Node } from "react";
import { attachRipple } from './util'
import "@material/button/dist/mdc.button.css";

export const FAB = ({ children, ...rest }: { children: Node }) => (
  <button
    ref={attachRipple}
    {...rest}
    className="mdc-fab material-icons"
  >
    <span className="mdc-fab__icon">{children}</span>
  </button>
);

export default FAB;
