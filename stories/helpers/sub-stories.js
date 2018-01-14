// @flow

import { cloneElement } from 'react'
import type { Node } from "react";

type Story = () => Node;

type Decorator = (story: Story, kind: string) => Node;

interface SubStories {
  render() : Node;
  addDecorator(decorator: Decorator) : SubStories;
  add(kind: string, story: Story) : SubStories;
}

const subStories = () : SubStories => {
  const stories = new Map();
  let _decorator = (story : Story, kind : string) => story();
  return {
    render() {
      return Array.from(stories.entries()).map(([kind, story], i) => cloneElement(_decorator(story, kind), {
        key: i,
      }))
    },
    addDecorator(decorator) {
      const prevDecorator = _decorator;
      _decorator = (story: Story, kind: string) =>
        decorator(() => prevDecorator(story, kind), kind);
      return this;
    },
    add(kind, story) {
      stories.set(kind, story);
      return this;
    }
  };
};

export default subStories;
