import React from "react";
import { storiesOf } from "@storybook/react";
import subStories from "./helpers/sub-stories";
import { Card, Ripple } from "..";
import "./ripple.stories.css";

storiesOf("Ripple", Ripple).add("Ripple", () => (
  <div className="mdc-typography">
    <section className="example">
      {subStories()
        .addDecorator((story, kind) => (
          <div>
            <h2>{kind}</h2>
            {story()}
          </div>
        ))
        .add("Bounded", () => (
          <Ripple>
            <Card>Interact with me</Card>
          </Ripple>
        ))
        .render()}
    </section>
  </div>
));
