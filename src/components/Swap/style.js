import {StyleSheet} from 'react-native';
import {
  GRAY_SWAP_BORDER,
} from '../../utils/ComponentColors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: GRAY_SWAP_BORDER,
    borderRadius: 15,
    width: 30,
    height: 30
  },
  swap: {
    transform: [{ rotate: '90deg' }],
    alignSelf: 'center'
  }
})