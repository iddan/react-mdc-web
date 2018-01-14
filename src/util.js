import { MDCRipple } from "@material/ripple/dist/mdc.ripple.js";

export function attachRipple(ref: ?HTMLElement) {
  if (ref) {
    MDCRipple.attachTo(ref);
  }
};
