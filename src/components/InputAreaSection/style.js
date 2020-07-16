import {StyleSheet} from 'react-native';
import {
  WHITE,
  BLACK,
  GRAY,
  RED,
  RED_ERROR,
  GRAY_300,
  TRANSPARENT
} from '../../utils/BaseColors';
import {
  TEXTINPUT_BOTTOM_BORDER
} from '../../utils/ComponentColors';
import { FONTSIZE_TINY, FONTSIZE_NORMAL } from '../../utils/Dimens';

export default StyleSheet.create({
  container_border: {
    borderWidth: 1,
    borderColor: BLACK
  },
  container_border_error: {
    borderWidth: 1,
    borderColor: RED_ERROR
  },
  container: {
    padding: 10
  },
  label: { },
  textLabel: {
    fontSize: 10,
    backgroundColor: 'transparent',
    paddingBottom: 5,
  },
  input: {
    textAlign: 'left',
    minWidth: 150,
    borderWidth: 1,
    borderBottomColor: BLACK,
    borderTopColor: TRANSPARENT,
    borderLeftColor: TRANSPARENT,
    borderRightColor: TRANSPARENT,
    paddingVertical: 5,
  },
  input_inactive: {
    textAlign: 'left',
    minWidth: 150,
    borderWidth: 1,
    borderBottomColor: GRAY_300,
    borderTopColor: TRANSPARENT,
    borderLeftColor: TRANSPARENT,
    borderRightColor: TRANSPARENT,
    paddingVertical: 5,
  },
  textCaption: {
    fontSize: 18,
    color: BLACK,
    fontFamily: 'TruenoLt'
  },
  textError: {
    fontSize: 10,
    color: RED
  },
  row: {
    flexDirection: 'row'
  },
  default_font: {
    color: BLACK
  },
  icon_right: {
    width: 24,
    height: 24
  },
  textDigit: {
    fontSize: FONTSIZE_TINY
  },
  circle: {
    overflow: 'hidden',
    borderRadius: 15,
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 12,
    height: 12,
  },
  textEdit: {
    color: RED,
    fontSize: FONTSIZE_NORMAL
  }
})