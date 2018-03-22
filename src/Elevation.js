// @flow

import { Children, cloneElement } from "react";
import classnames from "classnames";
import type { Element } from "react";
import "@material/elevation/dist/mdc.elevation.css";
import type { ClassNamed } from "./util";

export type Props = {
  ...ClassNamed,
  z?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24,
  transition?: boolean,
  children: Element<*>
};

const Elevation = ({ z, transition, children, className }: Props) => {
  const child: Element<*> = Children.only(children);
  const zClassName = z ? `mdc-elevation--z${String(z)}` : "";
  return cloneElement(child, {
    className: classnames(
      className,
      child.props.className,
      zClassName,
      "mdc-elevation",
      {
        "mdc-elevation-transition": transition
      }
    )
  });
};

export default Elevation;
