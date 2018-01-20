import React from "react";
import classnames from "classnames";
import { MDCToolbar } from "@material/toolbar";
import "@material/toolbar/dist/mdc.toolbar.css";
import type { ClassNamed } from "./util";

const handleRef = (ref: ?HTMLElement) => {
  if (ref) {
    MDCToolbar.attachTo(ref);
  }
};

export const Toolbar = ({ className, ...rest }: ClassNamed) => (
  <header
    ref={handleRef}
    {...rest}
    className={classnames("mdc-toolbar", className)}
  />
);

export const Row = ({ className, ...rest }: ClassNamed) => (
  <div {...rest} className={classnames("mdc-toolbar__row", className)} />
);

export const Section = ({
  align,
  shrinkToFit,
  fixed,
  waterfall,
  flexible,
  className,
  ...rest
}: {
  ...ClassNamed,
  align?: "start" | "end" | "center",
  shrinkToFit?: boolean,
  fixed?: boolean,
  waterfall?: boolean,
  flexible?: boolean
}) => (
  <section
    {...rest}
    className={classnames("mdc-toolbar__section", className, {
      ["mdc-toolbar__section--align-" + align]: align,
      "mdc-toolbar__section--shrink-to-fit": shrinkToFit,
      "mdc-toolbar--waterfall": waterfall,
      "mdc-toolbar--fixed": fixed,
      "mdc-toolbar--flexible": flexible
    })}
  />
);

export const MenuIcon = ({ className, ...rest } : ClassNamed) => (
  <a {...rest} className={classnames(className, "material-icons mdc-toolbar__menu-icon")}>
    menu
  </a>
);

export const Title = ({ className, ...rest } : ClassNamed) => (
  <span {...rest} className={classnames(className, "mdc-toolbar__title")} />
);
