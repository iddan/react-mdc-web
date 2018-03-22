import React, { PureComponent } from "react";
import classnames from "classnames";
import { MDCTabBarScroller } from "@material/tabs";
import "@material/tabs/dist/mdc.tabs.css";
import { ClassNamed } from "../util";
import sync from "./sync";

type Props = {
  ...ClassNamed,
  active?: number,
  children: Element<*> | Element<*>[]
};

export default class TabBarScroller extends PureComponent<Props> {
  root: HTMLDivElement | null;
  mdcTabBar: ?MDCTabBarScroller;

  static defaultProps = {
    active: 0
  };

  handleRef = (ref: ?HTMLElement) => {
    this.root = ref;
  };

  componentDidMount() {
    if (this.root) {
      const { tabBar } = MDCTabBarScroller.attachTo(this.root);
      this.mdcTabBar = tabBar;
      sync(tabBar, this.props, null);
    }
  }

  componentDidUpdate(prevProps) {
    sync(this.mdcTabBar, this.props, prevProps);
  }

  render() {
    const { className, children, ...rest } = this.props;
    return (
      <div
        ref={this.handleRef}
        {...rest}
        className={classnames(className, "mdc-tab-bar-scroller")}
      >
        <div className="mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--back">
          <a
            className="mdc-tab-bar-scroller__indicator__inner material-icons"
            href="#"
            aria-label="scroll back button"
          >
            navigate_before
          </a>
        </div>
        <div className="mdc-tab-bar-scroller__scroll-frame">
          <nav className="mdc-tab-bar mdc-tab-bar-scroller__scroll-frame__tabs">
            {children}
            <span className="mdc-tab-bar__indicator" />
          </nav>
        </div>
        <div className="mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--forward">
          <a
            className="mdc-tab-bar-scroller__indicator__inner material-icons"
            href="#"
            aria-label="scroll forward button"
          >
            navigate_next
          </a>
        </div>
      </div>
    );
  }
}
