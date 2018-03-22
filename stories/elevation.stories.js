import React from "react";
import { storiesOf } from "@storybook/react";
import Elevation from "../src/Elevation";
import "./elevation.stories.css";

storiesOf("Elevation", Elevation).add("Elevation", () => (
  <div className="mdc-typography">
    <section className="demo-surfaces">
      {Array(25)
        .fill(1)
        .map((_, i) => (
          <Elevation key={i} z={i}>
            <figure className="demo-surface">
              <figcaption>
                {i}dp (<code>{`<Elevation z=${i} />`}</code>)
              </figcaption>
            </figure>
          </Elevation>
        ))}
    </section>
  </div>
));
