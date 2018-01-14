// @flow

import React from "react";
import classnames from "classnames";
import "@material/card/dist/mdc.card.css";

type Props = $Shape<{
  elevation: number,
  className: string
}>;

const Card = ({ elevation = 1, className, ...rest }: Props) => (
  <div
    {...rest}
    className={classnames(
      "mdc-card",
      `mdc-elevation--z${elevation}`,
      className
    )}
  />
);

export default Card;
