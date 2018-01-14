import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";

import {
  ComponentsPage,
  ArticlePage,
  H1,
  ComponentList,
  ComponentListItem
} from "./helpers/layout";
import subStories from "./helpers/sub-stories";
import "./index.stories.css";

import LinearProgress from "../src/LinearProgress";
import Button, { LinkButton, Icon as ButtonIcon } from "../src/Button";
import FAB from "../src/FAB";

storiesOf("React MDC Web", module).add("Components", () => (
  <ComponentsPage>
    <ArticlePage>
      <H1>Components</H1>
      <nav>
        <ComponentList>
          <ComponentListItem
            icon="progress_linear"
            title="Linear Progress"
            description="Material Design-styled linear progress indicators."
          />
          <ComponentListItem
            icon="button"
            title="Buttons"
            description="Material Design-styled buttons."
          />
        </ComponentList>
      </nav>
    </ArticlePage>
  </ComponentsPage>
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

storiesOf("Buttons", Button)
  .add("Button", () =>
    subStories()
      .addDecorator((story, kind) => (
        <fieldset>
          <legend className="mdc-typography--title">{kind}</legend>
          {story()}
        </fieldset>
      ))
      .add("Text Button", () => (
        <div>
          <Button>Baseline</Button>
          <Button compact>Compact</Button>
          <Button dense>Dense</Button>
          <Button>
            <ButtonIcon>favorite</ButtonIcon>Icon
          </Button>
          <LinkButton>Link</LinkButton>
        </div>
      ))
      .add("Raised", () => (
        <div>
          <Button raised>Baseline</Button>
          <Button raised compact>
            Compact
          </Button>
          <Button raised dense>
            Dense
          </Button>
          <Button raised>
            <ButtonIcon>favorite</ButtonIcon>Icon
          </Button>
          <LinkButton raised>Link</LinkButton>
        </div>
      ))
      .add("Unelevated Button (Experimental)", () => (
        <div>
          <Button unelevated>Baseline</Button>
          <Button unelevated compact>
            Compact
          </Button>
          <Button unelevated dense>
            Dense
          </Button>
          <Button unelevated>
            <ButtonIcon>favorite</ButtonIcon>Icon
          </Button>
          <LinkButton unelevated>Link</LinkButton>
        </div>
      ))
      .add("Stroked Button (Experimental)", () => (
        <div>
          <Button stroked>Baseline</Button>
          <Button stroked compact>
            Compact
          </Button>
          <Button stroked dense>
            Dense
          </Button>
          <Button stroked>
            <ButtonIcon>favorite</ButtonIcon>Icon
          </Button>
          <LinkButton stroked>Link</LinkButton>
        </div>
      ))
      .render()
  )
  .add("Floating Action Button", () => (
    <div className=".demo-fabs mdc-typography">
      {subStories()
        .addDecorator((story, kind) => (
          <figure>
            {story()}
            <figcaption>
              <div>{kind}</div>
            </figcaption>
          </figure>
        ))
        .add("FAB", () => <FAB>favorite_border</FAB>)
        .add("Mini FAB", () => <FAB mini>favorite_border</FAB>)
        .render()}
    </div>
  ));
