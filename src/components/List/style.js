import { StyleSheet } from 'react-native';
import { GRAY_SWITCHER_BG } from '../../utils/ComponentColors';
import { WHITE } from '../../utils/BaseColors';

export default StyleSheet.create({
  wrapperTag: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  listRounded: {
    width: '100%',
    borderColor: GRAY_SWITCHER_BG,
    backgroundColor: WHITE,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
