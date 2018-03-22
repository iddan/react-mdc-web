import type { MDCTabBar } from '@material/tabs';

export default function sync(mdcTabBar: MDCTabBar, props : Props, prevProps : ?Props) {
  const { tabs } = mdcTabBar;
  if (props.active < 0 || props.active > tabs.length) {
    return;
  }
  if (!prevProps || props.active !== prevProps.active) {
    mdcTabBar.activeTabIndex = props.active;
  }
}
