// @flow

import { cloneElement, Children } from 'react'
import type { Element } from 'react'
import { MDCRipple } from "@material/ripple";
import '@material/ripple/dist/mdc.ripple.css';

type Props = {
  children: Element<*>
}

function attach(ref : ?HTMLElement) {
  if (ref) {
    MDCRipple.attachTo(ref)
  }
}

const Ripple = ({ children } : Props) => (
  cloneElement(Children.only(children), {
    ref: attach,
  })
)

export default Ripple
