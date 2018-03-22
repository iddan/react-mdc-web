import React from "react";
import { storiesOf } from "@storybook/react";
import subStories from "./helpers/sub-stories";
import { tabs, Icon } from "..";

const {
  TabBar,
  TabBarScroller,
  Tab,
  Indicator,
  IndicatorBack,
  IndicatorInner,
  ScrollFrame,
  ScrollFrameTabs,
  IndicatorForward,
} = tabs;

storiesOf("Tabs", TabBar).add("Tab Bar", () =>
  subStories()
    .add("Regular", () => (
      <TabBar>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Indicator />
      </TabBar>
    ))
    .add("Scroll", () => (
      <TabBarScroller>
        <IndicatorBack>
          <IndicatorInner>
            <Icon>navigate_before</Icon>
          </IndicatorInner>
        </IndicatorBack>
        <ScrollFrame>
          <ScrollFrameTabs>
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
            <Indicator />
          </ScrollFrameTabs>
        </ScrollFrame>
        <IndicatorForward>
          <IndicatorInner>
            <Icon>navigate_next</Icon>
          </IndicatorInner>
        </IndicatorForward>
      </TabBarScroller>
    ))
    .render()
);
