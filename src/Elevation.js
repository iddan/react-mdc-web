import { Children, cloneElement } from "react";
import classnames from "classnames"
import type { Node } from "react";
import "@material/elevation/dist/mdc.elevation.css";
import type { ClassNamed } from './util'

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
  children: Node,
};

const Elevation = ({ z, transition, children, className }: Props) => {
  const child = Children.only(children);
  return cloneElement(child, {
    className: classnames(
      className,
      child.props.className,
      "mdc-elevation",
      {
        [`mdc-elevation--z${z}`]: z,
        "mdc-elevation-transition": transition
      }
    )
  });
};

export default Elevation;
