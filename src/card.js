// @flow

import React, { cloneElement, isValidElement, Children } from "react";
import classnames from "classnames";
import "@material/card/dist/mdc.card.css";
import { classNameVar } from "./util";
import type { ClassNamed } from "./util";
// Elevation comes after card's css to override elevation style
import Elevation from "./Elevation";

type Props = {
  ...ClassNamed,
  elevation?: *,
  theme?: "dark"
}; 

export const Card = ({ elevation = 1, theme, className, ...rest }: Props) => (
  <Elevation z={elevation}>
    <div
      {...rest}
      className={classnames(
        "mdc-card",
        className,
        classNameVar("mdc-card--theme-", theme)
      )}
    />
  </Elevation>
);

export const HorizontalBlock = ({ className, ...rest }: ClassNamed) => (
  <div
    {...rest}
    className={classnames("mdc-card__horizontal-block", className)}
  />
);

export const Primary = ({ className, ...rest }: ClassNamed) => (
  <section {...rest} className={classnames("mdc-card__primary", className)} />
);

export const Media = ({ className, ...rest }: ClassNamed) => (
  <div {...rest} className={classnames("mdc-card__media", className)} />
);

export const MediaItem = ({
  className,
  size,
  ...rest
}: {
  ...ClassNamed,
  size: 1.5 | 2 | 3
}) => (
  <img
    {...rest}
    className={classnames("mdc-card__media-item", className, {
      "mdc-card__media-item--1dot5x": size === 1.5,
      "mdc-card__media-item--2x": size === 2,
      "mdc-card__media-item--3x": size === 3
    })}
  />
);

export const SupportingText = ({ className, ...rest }: ClassNamed) => (
  <section
    {...rest}
    className={classnames("mdc-card__supporting-text", className)}
  />
);

export const Actions = ({
  className,
  vertical,
  children,
  ...rest
}: {
  ...ClassNamed,
  vertical?: boolean,
  children: Node
}) => (
  <section
    {...rest}
    className={classnames("mdc-card__actions", className, {
      "mdc-card__actions--vertical": vertical
    })}
  >
    {Children.map(children, (child : *) => {
      if (isValidElement(child)) {
        return cloneElement(child, {
          className: classnames(child.props.className, "mdc-card__action")
        });
      }
      return child;
    })}
  </section>
);

export const Title = ({
  className,
  large,
  ...rest
}: {
  ...ClassNamed,
  large?: boolean
}) => (
  <h1
    {...rest}
    className={classnames("mdc-card__title", className, {
      "mdc-card__title--large": large
    })}
  />
);

export const Subtitle = ({ className, ...rest }: ClassNamed) => (
  <h2 {...rest} className={classnames("mdc-card__subtitle", className)} />
);
