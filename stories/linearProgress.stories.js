import React from "react";
import { storiesOf } from "@storybook/react";
import subStories from "./helpers/sub-stories";
import { LinearProgress } from "../src";
import "./linear-progress.stories.css";

storiesOf("Linear Progress", LinearProgress).add(
  "Linear Progress Indicators",
  () => (
    <div className="mdc-typography">
      <fieldset>
        {subStories()
          .addDecorator((story, kind) => (
            <figure className="linear-progress-demo">
              {story()}
              <figcaption>{kind}</figcaption>
            </figure>
          ))
          .add("Determinate", () => <LinearProgress open progress={0.5} />)
          .add("Indeterminate", () => <LinearProgress open indeterminate />)
          .add("Reversed", () => <LinearProgress open progress={0.5} reverse />)
          .add("Indeterminate Reversed", () => (
            <LinearProgress open indeterminate reverse />
          ))
          .add("Buffer", () => (
            <LinearProgress open progress={0.3} buffer={0.5} />
          ))
          .add("Buffer Reversed", () => (
            <LinearProgress open progress={0.3} buffer={0.5} reverse />
          ))
          .render()}
      </fieldset>
    </div>
  )
);
