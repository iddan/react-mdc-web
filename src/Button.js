// @flow

import React from "react";
import type { Node } from "react";
import classnames from "classnames";
import Icon from './Icon'
import { attachRipple } from "./util";
import "@material/button/dist/mdc.button.css";

type Props = $Shape<{
  raised: boolean,
  dense: boolean,
  unelevated: boolean,
  stroked: boolean,
  compact: boolean,
  className: string,
}>;

const createClassName = ({ raised, unelevated, stroked, dense, compact, className } : Props) =>
  classnames("mdc-button", className, {
    "mdc-button--raised": raised,
    'mdc-button--unelevated': unelevated,
    'mdc-button--stroked': stroked,
    "mdc-button--dense": dense,
    'mdc-button--compact': compact,
  })

const Button = ({ raised, unelevated, stroked, dense, compact, className, ...rest }: Props) => (
  <button
    {...rest}
    ref={attachRipple}
    className={createClassName({ raised, unelevated, stroked, dense, compact, className })}
  />
);

export const LinkButton = ({ raised, unelevated, stroked, dense, compact, className, ...rest }: Props) => (
  <a
    {...rest}
    ref={attachRipple}
    className={createClassName({ raised, unelevated, stroked, dense, compact, className })}
  />
)

const ButtonIcon = ({ className, ...rest } : { className : string }) => (
  <Icon {...rest} className={classnames(className, 'mdc-button__icon')} />
)

export { ButtonIcon as Icon }

export default Button;
