import React from "react";
import { linkTo } from "@storybook/addon-links";

export const ArticlePage = ({ children }) => (
  <div className="page__content page__flex-element">
    <article className="page__article article article--full-width">
      {children}
    </article>
  </div>
);

export const H1 = ({ children }) => (
  <h1>
    <span className="hidden-mark hidden-mark--return">{children}&nbsp;</span>
  </h1>
);

export const ComponentList = ({ children }) => (
  <ul className="component-list">{children}</ul>
);

export const ComponentListItem = ({ icon, title, description }) => (
  <li className={"component-list-item component-list-item--icon-" + icon}>
    <a className="component-list-item__link" onClick={linkTo(title)}>
      <div className="component-list-item__text">
        <h2 className="component-list-item__title">{title}</h2>
        <div className="component-list-item__description">{description}</div>
      </div>
    </a>
  </li>
);
