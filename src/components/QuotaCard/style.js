import { StyleSheet } from 'react-native';
import {
  GRAY_SWITCHER_BG,
  WHITE,
  DISABLED_GREY,
  GRAY_SWITCHER_TEXT,
} from '../../utils/BaseColors';
import { FONTSIZE_BIG, FONTSIZE_SMALL } from '../../../src/utils/Dimens';

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
  limitFontSize: {
    fontSize: FONTSIZE_BIG,
  },
  expLimitFontSize: {
    fontSize: FONTSIZE_SMALL,
  },
});
