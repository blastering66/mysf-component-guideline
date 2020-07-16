import { StyleSheet } from 'react-native';
import { BLACK, GRAY, WHITE } from './BaseColors';
import { BORDERCOLOR } from './ComponentColors';

import {
  PP_SIZE,
  PADDING_WRAPPER,
  BADGE_SIZE,
  BORDER_WIDTH,
  BORDER_RADIUS_STATUS,
  ICON_WRAPPER,
  PADDING_SMALL,
  ICON_SIZE,
} from './Dimens';

export default StyleSheet.create({
  wrapper_abs: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  wrapper_abs_top: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
  },
  wrapper_abs_bottom: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  wrapper_abs_top_right: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  fill: {
    flex: 1
  },
  wrapper_center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper_horizontal: {
    flexDirection: 'row',
    padding: PADDING_WRAPPER,
  },
  wrapper_vertical: {
    padding: PADDING_WRAPPER,
  },
  row: {
    flexDirection: 'row',
  },
  regular: {
    fontFamily: 'TruenoRg',
    color: BLACK,
  },
  light: {
    fontFamily: 'TruenoLt',
    color: BLACK,
  },
  color_gray: {
    color: GRAY,
  },
  container_pp: {
    height: PP_SIZE,
    width: PP_SIZE,
  },
  container_pp_oval: {
    height: PP_SIZE,
    width: PP_SIZE,
    borderRadius: PP_SIZE / 2,
    overflow: 'hidden',
  },
  container_badge_abs: {
    position: 'absolute',
    bottom: 10,
    right: -5,
  },
  container_badge: {
    backgroundColor: 'red',
    overflow: 'hidden',
    borderRadius: 9,
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: WHITE,
  },
  container_bottom_right: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  image_pp: {
    height: PP_SIZE,
    width: PP_SIZE,
  },
  container_pp_edit: {
    borderRadius: 7,
    width: 14,
    height: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: WHITE,
  },
  border_bottom: {
    borderBottomWidth: BORDER_WIDTH,
    borderBottomColor: BORDERCOLOR,
  },
  bg_rounded_gray: {
    borderRadius: BORDER_RADIUS_STATUS,
    backgroundColor: BLACK,
    opacity: 0.5,
    paddingHorizontal: PADDING_SMALL,
    paddingVertical: 2,
  },
  icon_container: {
    height: ICON_WRAPPER,
    width: ICON_WRAPPER,
  },
  icon: {
    height: ICON_SIZE,
    width: ICON_SIZE,
  },
  badge: {
    height: BADGE_SIZE,
    width: BADGE_SIZE,
  },
  roundedTabs: {
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 16,
    marginRight: 10,
  },
  roundedList: {
    borderWidth: 1,
    paddingHorizontal: 19,
    paddingVertical: 19,
    borderRadius: 10,
    marginRight: 10,
    maxHeight: 60,
  },
  noBorderList: {
    paddingVertical: 19,
    borderRadius: 10,
    marginRight: 10,
    maxHeight: 60,
  },
  borderBottomList: {
    borderBottomWidth: 1,
    paddingVertical: 19,
    borderRadius: 10,
    marginRight: 10,
    maxHeight: 60,
  },
  Tabs: {
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
    flex: 1,
    alignItems: 'center',
  },
  TabNav: {
    borderTopWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
    flex: 1,
    alignItems: 'center',
  },
  shadow: {
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowColor: BLACK,
    shadowOffset: { height: 5, width: 5 },
    elevation: 5,
  },
});
