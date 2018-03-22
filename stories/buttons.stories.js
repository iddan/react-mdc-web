// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import subStories from "./helpers/sub-stories";
import { Button, LinkButton, ButtonIcon, FAB, IconToggle } from "..";
import "./buttons.stories.css";

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
    <div className="demo-fabs mdc-typography">
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
  ))
  .add('Icon Toggle Buttons', () => (
    <div className="mdc-typography">
    {subStories()
      .add('Using Material Icons', ()  => (
        <IconToggle
          toggleOn={{ label: 'Add To Favorites', 'content': 'favorite' }}
          toggleOff={{ label: 'Remove From Favorites', 'content': 'favorite_border' }}
        />
      ))
      .add('Using Font Awesome', () => (
        <IconToggle
          toggleOn={{ cssClass: 'fa-star', 'label': 'Unstar this item'}}
          toggleOff={{ cssClass: 'fa-star-o', 'label': 'Star this item'}}
        >
          <i className="fa fa-star" aria-hidden="true"></i>
        </IconToggle>
      ))
      .add('Disabled Icons', () => (
        <IconToggle
          toggleOn={{ label: 'Add To Favorites', 'content': 'favorite' }}
          toggleOff={{ label: 'Remove From Favorites', 'content': 'favorite_border' }}
          disabled
        />
      ))
      .render()}
    </div>
  ));
