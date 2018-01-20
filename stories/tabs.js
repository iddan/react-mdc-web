import React from 'react'
import { storiesOf } from "@storybook/react";
import { tabs } from '..'

const { TabBar, Tab, Indicator } = tabs

storiesOf("Tabs", TabBar).add("Tab Bar", () => (
  <TabBar active={0}>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Indicator />
  </TabBar>
));
