import React from "react";
import { storiesOf } from "@storybook/react";
import { typography } from "../src";

const {
  Typography,
  Display4,
  Display3,
  Display2,
  Display1,
  Headline,
  Title,
  Caption,
  Subheading2,
  Subheading1,
  Body1,
  Body2
} = typography;

storiesOf("Typography", typography).add('Typography', () => (
  <Typography>
    <Display4>Display4</Display4><br />
    <Display3>Display3</Display3><br />
    <Display2>Display2</Display2><br />
    <Display1>Display1</Display1><br />
    <Headline>Headline</Headline><br />
    <Title>Title</Title><br />
    <Caption>Caption</Caption><br />
    <Subheading2>Subheading2</Subheading2><br />
    <Subheading1>Subheading1</Subheading1><br />
    <Body1>Body1</Body1><br />
    <Body2>Body2</Body2><br />
  </Typography>
));
