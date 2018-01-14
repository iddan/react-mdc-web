// @flow

import { MDCRipple } from "@material/ripple/dist/mdc.ripple.js";

export function attachRipple(ref: ?HTMLElement) : void {
  if (ref) {
    MDCRipple.attachTo(ref);
  }
};
