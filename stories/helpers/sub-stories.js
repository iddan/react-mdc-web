// @flow

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
  let _decorator = (story, kind) => story();
  return {
    render() {
      return Array.from(stories.entries(), ([kind, story]) => _decorator(story, kind))
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
