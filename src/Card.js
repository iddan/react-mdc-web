// @flow

import React, { cloneElement, Children } from "react";
import classnames from "classnames"
import "@material/card/dist/mdc.card.css";
// Elevation comes after card's css to override elevation style
import Elevation from './Elevation';
import type { Props as ElevationProps } from './Elevation'

type Props = {
  elevation: $PropertyType<ElevationProps, 'z'>,
  className?: string
};

const Card = ({ elevation = 1, className, ...rest }: Props) => (
  <Elevation z={elevation}>
    <div {...rest} className={classnames("mdc-card", className)} />
  </Elevation>
);

export default Card;
