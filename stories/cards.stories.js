import React from "react";
import { storiesOf } from "@storybook/react";
import { Card } from "..";
import "./cards.stories.css";

storiesOf("Cards", Card).add("Card", () => (
  <div className="mdc-typography demo-cards">
    {Array(24)
      .fill(1)
      .map((item, i) => (
        <Card elevation={i + 1}>
          <p>Elevation {i + 1}</p>
        </Card>
      ))}
  </div>
));
