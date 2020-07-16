import {StyleSheet} from 'react-native';
import {
  COUNTER_BORDER,
  GRAY_SWAP_BORDER,
  COUNTER_BG_DISABLED
} from '../../utils/ComponentColors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: GRAY_SWAP_BORDER,
    width: 30,
    height: 30
  },
  container_text: {
    width: 50,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_icon: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_icon_disabled: {
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: COUNTER_BG_DISABLED
  },
  container_icon_active: {
    borderWidth: 1,
    borderColor: COUNTER_BORDER,
  }
})