// @flow

import React, { Component } from "react";
import classnames from 'classnames'
import { MDCLinearProgress } from "@material/linear-progress";
import "@material/linear-progress/dist/mdc.linear-progress.css";
import type { ClassNamed } from './util'

function sync(mdcLinearProgress: MDCLinearProgress, props: Props) {
  const { open, indeterminate, reverse, buffer, progress } = props;
  if (open) {
    mdcLinearProgress.open();
  } else {
    mdcLinearProgress.close();
  }
  mdcLinearProgress.determinate = !indeterminate;
  mdcLinearProgress.buffer = buffer;
  mdcLinearProgress.progress = progress;
  mdcLinearProgress.reverse = reverse;
}

type Props = $Shape<{
  ...ClassNamed,
  open: boolean,
  indeterminate: boolean,
  reverse: boolean,
  buffer: number,
  progress: number
}>;

export default class LinearProgress extends Component<Props> {
  mdcLinearProgress = null;

  handleRef = (ref: ?HTMLDivElement) => {
    if (ref) {
      this.mdcLinearProgress = MDCLinearProgress.attachTo(ref);
      sync(this.mdcLinearProgress, this.props);
    }
  };

  componentDidUpdate(prevProps: Props) {
    if (prevProps !== this.props && this.mdcLinearProgress) {
      sync(this.mdcLinearProgress, this.props);
    }
  }

  render() {
    const { className } = this.props
    return (
      <div
        role="progressbar"
        className={classnames(className, "mdc-linear-progress")}
        ref={this.handleRef}
      >
        <div className="mdc-linear-progress__buffering-dots" />
        <div className="mdc-linear-progress__buffer" />
        <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
          <span className="mdc-linear-progress__bar-inner" />
        </div>
        <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span className="mdc-linear-progress__bar-inner" />
        </div>
      </div>
    );
  }
}
