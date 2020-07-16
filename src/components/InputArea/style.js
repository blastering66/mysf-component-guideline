import {StyleSheet} from 'react-native';
import {
  WHITE,
  BLACK,
  GRAY,
  RED
} from '../../utils/BaseColors';
import {
  TEXTINPUT_BOTTOM_BORDER
} from '../../utils/ComponentColors';
import { FONTSIZE_TINY } from '../../utils/Dimens';

export default StyleSheet.create({
  container_border: {
    borderWidth: 1,
    borderColor: TEXTINPUT_BOTTOM_BORDER
  },
  container: {
    padding: 10
  },
  label: { },
  textLabel: {
    fontSize: 10,
    fontFamily: 'TruenoLt',
    backgroundColor: 'transparent',
    paddingBottom: 5,
  },
  input: {
    textAlign: 'left',
    minWidth: 150,
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
    fontSize: FONTSIZE_TINY,
    fontFamily: 'TruenoRg'
  }
})