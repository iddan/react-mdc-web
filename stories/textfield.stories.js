import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import subStories from "./helpers/sub-stories";
import TextField, { HelperText } from "../src/TextField";
import { Typography } from "../src/Typography";
import "./textfield.stories.css";

class DemoApp extends Component {
  state = {
    value: "",
    /** @todo RTL */
    disabled: false,
    dense: false,
    required: false,
    /** @todo Alternate colors */
    useHelperText: false,
    makeHelperTextPersistent: false,
    useHelperTextAsValidationMessage: false
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleCheckboxChange = event => {
    const { target } = event;
    this.setState({ [target.name]: target.checked });
  };

  Checkbox = ({ name, label, disabled }) => (
    <label>
      <input
        type="checkbox"
        value={this.state[name]}
        onChange={this.handleCheckboxChange}
        name={name}
        disabled={disabled}
      />{" "}
      <span>{label}</span>
    </label>
  );

  render() {
    const { state } = this;
    return (
      <Typography>
        <TextField
          type="email"
          label="Email Address"
          value={state.value}
          onChange={this.handleChange}
          disabled={state.disabled}
          dense={state.dense}
          required={state.required}
        />
        {state.useHelperText && (
          <HelperText
            persistent={state.makeHelperTextPersistent}
            validationMessage={state.useHelperTextAsValidationMessage}
          >
            Helper Text (possibly validation message)
          </HelperText>
        )}
        <this.Checkbox name="disabled" label="Disabled" />
        <this.Checkbox name="dense" label="Dense" />
        <this.Checkbox name="required" label="Required" />
        <this.Checkbox name="useHelperText" label="Use Helper Text" />
        <this.Checkbox
          name="makeHelperTextPersistent"
          label="Make Helper Text Persistent"
          disabled={!state.useHelperText}
        />
        <this.Checkbox
          name="useHelperTextAsValidationMessage"
          label="Use Helper Text As Validation Message"
          disabled={!state.useHelperText}
        />
      </Typography>
    );
  }
}

storiesOf("Inputs and Controls", TextField).add("TextField", () =>
  subStories()
    .add("Regular", () => <DemoApp />)
    .render()
);
