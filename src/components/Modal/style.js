import { StyleSheet } from 'react-native';
import { GRAY_DIVIDER, WHITE, GRAYTRANS, GRAY } from '../../utils/BaseColors';
import { PADDING_WRAPPER, RADIUS_SQUARE } from '../../utils/Dimens';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: PADDING_WRAPPER,
  },
  row: {
    flexDirection: 'row',
  },
  fill: {
    flex: 1,
  },
  label: {
    paddingLeft: 10,
    textAlign: 'left',
  },
  img: {
    width: 100,
    height: 100,
    backgroundColor: GRAYTRANS,
    borderRadius: RADIUS_SQUARE,
    overflow: 'hidden',
  },
  img_banner_default: {
    width: 300,
    height: 450,
    backgroundColor: GRAYTRANS,
  },
  img_banner_square: {
    width: 240,
    height: 240,
    backgroundColor: GRAYTRANS,
  },
  img_banner_overflow: {
    width: 400,
    height: 600,
    backgroundColor: GRAYTRANS,
  },
  wrapper_bottom: {
    borderTopColor: GRAY,
    borderTopWidth: 1,
  },
  bottom_button_border_left: {
    flex: 1,
    backgroundColor: 'transparent',
    borderRightColor: GRAY,
    borderRightWidth: 1,
  },
  bottom_button_border_right: { flex: 1, backgroundColor: 'transparent' },
});
