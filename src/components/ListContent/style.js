import { StyleSheet } from 'react-native';
import {
  GRAY_SWITCHER_TEXT,
} from '../../utils/ComponentColors';
import { FONTSIZE_BIG, FONTSIZE_SMALL } from '../../../src/utils/Dimens';

export default StyleSheet.create({
  wrapperTag: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  subContentSize: {
    fontSize: FONTSIZE_SMALL,
    color: GRAY_SWITCHER_TEXT,
  },
});
