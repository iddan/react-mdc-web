import React from "react";
import { storiesOf } from "@storybook/react";
import subStories from "./helpers/sub-stories";
import { tabs } from "../src";

const { TabBar, TabBarScroller, Tab } = tabs;

storiesOf("Tabs", TabBar).add("Tab Bar", () =>
  subStories()
    .add("Regular", () => (
      <TabBar>
        <Tab>One</Tab>
        <Tab>Two</Tab>
      </TabBar>
    ))
    .add("Scroll", () => (
      <TabBarScroller>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
        <Tab>Four</Tab>
        <Tab>Five</Tab>
        <Tab>Six</Tab>
        <Tab>Seven</Tab>
        <Tab>Eight</Tab>
        <Tab>Nine</Tab>
        <Tab>Ten</Tab>
      </TabBarScroller>
    ))
    .render()
);
