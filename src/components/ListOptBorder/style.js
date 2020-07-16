import { StyleSheet } from 'react-native';
import {
  WHITE,
} from '../../utils/BaseColors';
import {
  GRAY_SWITCHER_BG,
  DISABLED_GREY,
  GRAY_SWITCHER_TEXT,
} from '../../utils/ComponentColors';

export default StyleSheet.create({
  wrapperTag: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  listRounded: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  disabledList: {
    backgroundColor: DISABLED_GREY,
    borderColor: DISABLED_GREY,
    paddingHorizontal: 19,
  },
  normalList: {
    backgroundColor: WHITE,
    borderColor: GRAY_SWITCHER_BG,
  },
  disabledText: {
    color: GRAY_SWITCHER_TEXT,
  },
});
