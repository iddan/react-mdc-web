// @flow

import React, { Component } from "react";
import classnames from "classnames";
import { MDCTextField } from "@material/textfield";
import type { ClassNamed } from "../util";
import "@material/textfield/dist/mdc.textfield.css";

type Props = {
  ...ClassNamed,
  label: string,
  value: string,
  /** Disables text field */
  disabled?: boolean,
  required?: boolean,
  valid?: boolean,
  /** Styles the text field as a box text field */
  box?: boolean,
  /** Styles the text field as an outlined text field */
  outlined?: boolean,
  /** Styles the text field as a full width text field */
  fullWidth?: boolean,
  /** Indicates the text field is a <textarea> */
  textarea?: boolean,
  /** Styles the text field as a dense text field */
  dense?: boolean,
  leadingIcon?: string,
  trailingIcon?: string
};

const SYNCED_PROPS = ["value", "disabled", "required", "valid"];

export default class TextField extends Component<Props> {
  _id = Math.random().toString(32);
  root: HTMLDivElement | null;
  mdcTextField: MDCTextField;

  attach = (ref: HTMLDivElement | null) => {
    this.root = ref;
  };

  sync(prevProps: Object) {
    for (const prop of SYNCED_PROPS) {
      if (
        prevProps[prop] !== this.props[prop] &&
        this.props[prop] !== undefined
      ) {
        this.mdcTextField[prop] = this.props[prop];
      }
    }
  }

  componentDidMount() {
    if (this.root) {
      this.mdcTextField = MDCTextField.attachTo(this.root);
      this.sync({});
    }
  }

  componentDidUpdate(prevProps: Props) {
    this.sync(prevProps);
  }

  render() {
    const {
      className,
      label,
      valid,
      box,
      outlined,
      fullWidth,
      textarea,
      dense,
      leadingIcon,
      trailingIcon,
      ...rest
    } = this.props;
    const Input = textarea ? "textarea" : "input";
    return (
      <div ref={this.attach} className="mdc-text-field">
        {!leadingIcon ? null : (
          <i class="material-icons mdc-text-field__icon" tabindex="0">
            {leadingIcon}
          </i>
        )}
        <Input
          {...rest}
          id={this._id}
          className={classnames("mdc-text-field__input", className, {
            "mdc-text-field--box": box,
            "mdc-text-field--outlined": outlined,
            "mdc-text-field--fullwidth": fullWidth,
            "mdc-text-field--textarea": textarea,
            "mdc-text-field--disabled": this.props.disabled,
            "mdc-text-field--dense": dense,
            "mdc-text-field--with-leading-icon": leadingIcon,
            "mdc-text-field--with-trailing-icon": trailingIcon
          })}
        />
        <label className="mdc-floating-label" htmlFor={this._id}>
          {label}
        </label>
        {!trailingIcon ? null : (
          <i class="material-icons mdc-text-field__icon" tabindex="0">
            {trailingIcon}
          </i>
        )}
        {outlined ? (
          <React.Fragment>
            <div class="mdc-notched-outline">
              <svg>
                <path class="mdc-notched-outline__path" />
              </svg>
            </div>
            <div class="mdc-notched-outline__idle" />
          </React.Fragment>
        ) : (
          <div className="mdc-line-ripple" />
        )}
      </div>
    );
  }
}
