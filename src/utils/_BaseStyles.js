import {StyleSheet} from 'react-native';
import COLORS from './Colors';
import DIMENS from './Dimens';

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
  wrapper_center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper_horizontal: {
    flexDirection: 'row',
    padding: DIMENS.PADDING_WRAPPER,
  },
  wrapper_vertical: {
    padding: DIMENS.PADDING_WRAPPER,
  },
  regular: {
    fontFamily: 'TruenoRg',
    color: COLORS.Black,
  },
  light: {
    fontFamily: 'TruenoLt',
    color: COLORS.Black,
  },
  color_gray: {
    color: COLORS.Gray,
  },
  container_pp: {
    height: DIMENS.PP_SIZE,
    width: DIMENS.PP_SIZE,
  },
  container_pp_oval: {
    height: DIMENS.PP_SIZE,
    width: DIMENS.PP_SIZE,
    borderRadius: DIMENS.PP_SIZE / 2,
    overflow: 'hidden',
  },
  container_badge_abs: {
    position: 'absolute', bottom: 10, right: -5
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
    borderColor: COLORS.White,
  },
  container_bottom_right: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  image_pp: {
    height: DIMENS.PP_SIZE,
    width: DIMENS.PP_SIZE,
  },
  container_pp_edit: {
    borderRadius: 7,
    width: 14,
    height: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.White,
  },
  border_bottom: {
    borderBottomWidth: DIMENS.BORDER_WIDTH,
    borderBottomColor: COLORS.BorderColor,
  },
  bg_rounded_gray: {
    borderRadius: DIMENS.BORDER_RADIUS_STATUS,
    backgroundColor: COLORS.Black,
    opacity: 0.5,
    paddingHorizontal: DIMENS.PADDING_SMALL,
    paddingVertical: 2,
  },
  icon_container: {
    height: DIMENS.ICON_WRAPPER,
    width: DIMENS.ICON_WRAPPER,
  },
  icon: {
    height: DIMENS.ICON_SIZE,
    width: DIMENS.ICON_SIZE,
  },
  badge: {
    height: DIMENS.BADGE_SIZE,
    width: DIMENS.BADGE_SIZE,
  },
  shadow: {shadowOpacity: 0.25, shadowRadius: 5, shadowColor: 'black', shadowOffset: { height: 5, width: 5 }, elevation: 5},
});
