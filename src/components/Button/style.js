import {StyleSheet} from 'react-native';
import {
  RED,
  WHITE,
  TRANSPARENT
} from '../../utils/BaseColors';
import {
  RED_PRESSED,
  BORDERCOLOR,
} from '../../utils/ComponentColors';
import { BORDER_RADIUS_STATUS } from '../../utils/Dimens';

export default StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: RED,
    borderRadius: BORDER_RADIUS_STATUS,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: TRANSPARENT,
    paddingHorizontal: 30,
  },
  container_pressed: {
    padding: 10,
    backgroundColor: RED_PRESSED,
    borderRadius: BORDER_RADIUS_STATUS,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  container_outline: {
    padding: 10,
    borderRadius: BORDER_RADIUS_STATUS,
    borderWidth: 1,
    borderColor: BORDERCOLOR,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  container_ghost: {
    padding: 10,
    alignItems: 'center',
    paddingHorizontal: 30
  }
})