import { StyleSheet } from 'react-native';
import {
  WHITE,
} from '../../utils/BaseColors';
import {
  PROGRESSBAR_RED,
  TABS_INACTIVE_BORDER,
} from '../../utils/ComponentColors';

export default StyleSheet.create({
  activeTab: {
    borderColor: PROGRESSBAR_RED,
    backgroundColor: WHITE,
  },
  activeTabStd: {
    borderColor: PROGRESSBAR_RED,
    backgroundColor: WHITE,
    borderTopWidth: 2,
  },
  activeTabsText: {
    color: PROGRESSBAR_RED,
  },
  inActiveTab: {
    borderColor: TABS_INACTIVE_BORDER,
    backgroundColor: WHITE,
  },
  inActiveTabsText: {
    color: TABS_INACTIVE_BORDER,
  },
});
