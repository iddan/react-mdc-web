import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";

import {
  ArticlePage,
  H1,
  ComponentList,
  ComponentListItem
} from "./helpers/layout";
import { subStories } from "./helpers/sub-stories";
import "./index.stories.css";

import LinearProgress from "../src/LinearProgress";
import Button, { Icon as ButtonIcon } from "../src/Button";

storiesOf("React MDC Web", module).add("Components", () => (
  <ArticlePage>
    <H1>Components</H1>
    <nav>
      <ComponentList>
        <ComponentListItem
          icon="progress_linear"
          title="Linear Progress"
          description="Material Design-styled linear progress indicators."
        />
      </ComponentList>
    </nav>
  </ArticlePage>
));

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

storiesOf("Button", Button)
  .add("Baseline", () => <Button>Baseline</Button>)
  .add("Raised", () => <Button raised>Raised</Button>)
  .add("Unelevated", () => <Button unelevated>Unelevated</Button>)
  .add("Stroked", () => <Button stroked>Stroked</Button>)
  .add("Dense", () => <Button dense>Dense</Button>)
  .add("Compact", () => <Button compact>Compact</Button>);
