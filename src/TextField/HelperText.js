import React from "react";
import classnames from "classnames";
import type { ClassNamed } from "./util";

type Props = {
  ...ClassNamed,
  persistent?: boolean,
  validationMessage?: boolean
};

const HelperText = ({
  children,
  className,
  persistent,
  validationMessage
}: Props) => (
  <p
    className={classnames("mdc-text-field-helper-text", {
      "mdc-text-field-helper-text--persistent": persistent,
      "mdc-text-field-helper-text--validation-msg": validationMessage
    })}
    aria-hidden="true"
  >
    {children}
  </p>
);

export default HelperText;
