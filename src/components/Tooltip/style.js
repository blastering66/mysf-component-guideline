import { StyleSheet } from 'react-native';
import { WHITE } from '../../utils/BaseColors';
import { TOOLTIP_DARK } from '../../utils/ComponentColors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    paddingLeft: 10,
    textAlign: 'left',
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 20,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  triangle_top: {
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderTopWidth: 20,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  tip_top_white: {
    borderTopColor: WHITE,
  },
  tip_top_dark: {
    borderTopColor: TOOLTIP_DARK,
  },
  tip_bottom_white: {
    borderBottomColor: WHITE,
  },
  tip_bottom_dark: {
    borderBottomColor: TOOLTIP_DARK,
  },
  tooltip_left: {
    position: 'absolute', left: 30, top: -15
  },
  tooltip_right: {
    position: 'absolute', right: 30, top: -15
  },
  tooltip_center: {
    position: 'absolute', left: 125, top: -15
  },
  tooltip_bottom_left: {
    position: 'absolute', left: 30, bottom: -15
  },
  tooltip_bottom_right: {
    position: 'absolute', right: 30, bottom: -15
  },
  tooltip_bottom_center: {
    position: 'absolute', left: 125, bottom: -15
  },
});
