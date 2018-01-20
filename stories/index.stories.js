import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import {
  ComponentsPage,
  ArticlePage,
  H1,
  ComponentList,
  ComponentListItem
} from "./helpers/layout";
import "./index.stories.css";

storiesOf("Reactive Material", module).add("Components", () => (
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
          <ComponentListItem
            icon="card"
            title="Cards"
            description="Cards for displaying content composed of different elements."
          />
          <ComponentListItem
            icon="shadow"
            title="Elevation"
            description="Shadows and elevation as a component"
          />
        </ComponentList>
      </nav>
    </ArticlePage>
  </ComponentsPage>
));
