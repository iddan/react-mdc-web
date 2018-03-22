import React from "react";
import { storiesOf } from "@storybook/react";
import { card, Button } from "../src";
import firstImage from './images/1-1.jpg'
import "./card.stories.css";

const {
  Card,
  HorizontalBlock,
  Primary,
  Media,
  MediaItem,
  SupportingText,
  Actions,
  Action,
  Title,
  Subtitle
} = card;

storiesOf("Cards", card).add("Card", () => (
  <section className="mdc-typography--section" id="demo-wrapper">
    <div>
      <Card className="demo-card">
        <Media className="demo-card__16-9-media" />
        <SupportingText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor.
        </SupportingText>
      </Card>
    </div>
    <div>
      <Card className="demo-card demo-card--with-avatar">
        <Primary>
          <div className="demo-card__avatar" />
          <Title>Title</Title>
          <Subtitle>Subhead</Subtitle>
        </Primary>
        <Media className="demo-card__16-9-media" />
        <SupportingText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor.
        </SupportingText>
        <Actions>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </Actions>
      </Card>
    </div>
    <div>
      <Card className="demo-card demo-card--with-avatar">
        <Primary>
          <div className="demo-card__avatar" />
          <Title>Title</Title>
          <Subtitle>Subhead</Subtitle>
        </Primary>
        <Media className="demo-card__16-9-media" />
        <SupportingText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor.
        </SupportingText>
        <Actions vertical>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </Actions>
      </Card>
    </div>
    <div>
      <Card className="demo-card">
        <Media className="demo-card__16-9-media" />
        <Primary>
          <Title large>Title goes here</Title>
          <Subtitle>Subtitle here</Subtitle>
        </Primary>
        <Actions>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </Actions>
      </Card>
    </div>
    <div>
      <Card theme="dark" className="demo-card demo-card--bg-demo">
        <Primary>
          <Title large>Title goes here</Title>
          <Subtitle>Subtitle here</Subtitle>
        </Primary>
        <Actions>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </Actions>
      </Card>
    </div>
    <div>
      <Card className="demo-card demo-card--small">
        <Media>
          <Title large>Title</Title>
        </Media>
        <Actions>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </Actions>
      </Card>
    </div>
    <div>
      <Card className="demo-card">
        <HorizontalBlock>
          <Primary>
            <Title large>Title here</Title>
            <Subtitle>Subtitle here</Subtitle>
          </Primary>
          <MediaItem src={firstImage} />
        </HorizontalBlock>
        <Actions>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </Actions>
      </Card>
    </div>
    <div>
      <Card className="demo-card">
        <HorizontalBlock>
          <Primary>
            <Title large>Title here</Title>
            <Subtitle>Subtitle here</Subtitle>
          </Primary>
          <MediaItem src={firstImage} size={1.5} />
        </HorizontalBlock>
        <Actions>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </Actions>
      </Card>
    </div>
    <div>
      <Card className="demo-card">
        <HorizontalBlock>
          <Primary>
            <Title large>Title here</Title>
            <Subtitle>Subtitle here</Subtitle>
          </Primary>
          <MediaItem src={firstImage} size={2} />
        </HorizontalBlock>
        <Actions>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </Actions>
      </Card>
    </div>
    <div>
      <Card className="demo-card">
        <HorizontalBlock>
          <Primary>
            <Title large>Title here</Title>
            <Subtitle>Subtitle here</Subtitle>
          </Primary>
          <MediaItem src={firstImage} size={3} />
        </HorizontalBlock>
        <Actions>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </Actions>
      </Card>
    </div>
  </section>
));
