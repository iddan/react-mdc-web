import React from "react";
import classnames from "classnames";
import "@material/typography/dist/mdc.typography.css";

export const Typography = ({ className, ...rest }) => (
  <span {...rest} className={classnames("mdc-typography", className)} />
);

export const Display4 = ({ className, ...rest }) => (
  <span
    {...rest}
    className={classnames("mdc-typography--display4", className)}
  />
);

export const Display3 = ({ className, ...rest }) => (
  <span
    {...rest}
    className={classnames("mdc-typography--display3", className)}
  />
);

export const Display2 = ({ className, ...rest }) => (
  <span
    {...rest}
    className={classnames("mdc-typography--display2", className)}
  />
);

export const Display1 = ({ className, ...rest }) => (
  <span
    {...rest}
    className={classnames("mdc-typography--display1", className)}
  />
);

export const Headline = ({ className, ...rest }) => (
  <span
    {...rest}
    className={classnames("mdc-typography--headline", className)}
  />
);

export const Title = ({ className, ...rest }) => (
  <span {...rest} className={classnames("mdc-typography--title", className)} />
);

export const Subheading2 = ({ className, ...rest }) => (
  <span
    {...rest}
    className={classnames("mdc-typography--subheading2", className)}
  />
);

export const Subheading1 = ({ className, ...rest }) => (
  <span
    {...rest}
    className={classnames("mdc-typography--subheading1", className)}
  />
);

export const Body2 = ({ className, ...rest }) => (
  <span {...rest} className={classnames("mdc-typography--body2", className)} />
);

export const Body1 = ({ className, ...rest }) => (
  <span {...rest} className={classnames("mdc-typography--body1", className)} />
);

export const Caption = ({ className, ...rest }) => (
  <span
    {...rest}
    className={classnames("mdc-typography--caption", className)}
  />
);

export const Button = ({ className, ...rest }) => (
  <span {...rest} className={classnames("mdc-typography--button", className)} />
);

export const AdjustMargin = ({ className, ...rest }) => (
  <span
    {...rest}
    className={classnames("mdc-typography--adjust-margin", className)}
  />
);
