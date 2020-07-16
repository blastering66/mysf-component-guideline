import {StyleSheet} from 'react-native';
import {
  WHITE,
} from '../../utils/BaseColors';
import {
  ACTIONBAR_BORDER
} from '../../utils/ComponentColors';
import { BORDER_RADIUS_STATUS } from '../../utils/Dimens';

export default StyleSheet.create({
  container: {
    backgroundColor: WHITE
  },
  border_bottom: {
    borderBottomColor: ACTIONBAR_BORDER,
    borderBottomWidth: 1,
    borderTopColor: ACTIONBAR_BORDER,
    borderTopWidth: 1
  }
})