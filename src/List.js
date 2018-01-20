// @flow
import React from "react";
import classnames from "classnames";
import "@material/list/dist/mdc.list.css";
import type { ClassNamed } from "./util";

type Props = {
  ...ClassNamed,
  dense?: boolean,
  twoLine?: boolean,
  avatarList?: boolean
};

const List = ({ className, dense, twoLine, avatarList, ...rest }: Props) => (
  <ul
    {...rest}
    className={classnames("mdc-list", className, {
      "mdc-list--dense": dense,
      "mdc-list--avatar-list": avatarList,
      "mdc-list--two-line": twoLine
    })}
  />
);

export default List;

export const ListGroup = ({ className, ...rest }: ClassNamed) => (
  <div {...rest} className={classnames("mdc-list-group", className)} />
);

export const ListDivider = ({ className, ...rest }: ClassNamed) => (
  <div {...rest} className={classnames("mdc-list-divider", className)} />
);

export const ListItem = ({
  activated,
  className,
  ...rest
}: ClassNamed & { activated: boolean }) => (
  <li
    {...rest}
    className={classnames(className, "mdc-list-item", {
      "mdc-list-item--activated": activated
    })}
  />
);

export const ListItemGraphic = ({ className, ...rest }: ClassNamed) => (
  <i
    {...rest}
    className={classnames("material-icons mdc-list-item__graphic", className)}
  />
);

export const ListItemMeta = ({ className, ...rest }: ClassNamed) => (
  <span {...rest} className={classnames("mdc-list-item__meta", className)} />
);

export const ListItemText = ({ className, ...rest }: ClassNamed) => (
  <span {...rest} className={classnames("mdc-list-item__text", className)} />
);

export const ListItemSecondaryText = ({ className, ...rest }: ClassNamed) => (
  <span
    {...rest}
    className={classnames("mdc-list-item__secondary-text", className)}
  />
);

export const ListGroupSubHeader = ({ className, ...rest }: ClassNamed) => (
  <span
    {...rest}
    className={classnames("mdc-list-group__subheader", className)}
  />
);
