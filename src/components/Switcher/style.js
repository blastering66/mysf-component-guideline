import { StyleSheet } from 'react-native';
import {
  GRAY,
  RED,
} from '../../utils/BaseColors';
import {
  GRAY_SWITCHER_TEXT,
} from '../../utils/ComponentColors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: GRAY,
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
  },
  container_native: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  textRight: {
    paddingRight: 5,
    color: GRAY_SWITCHER_TEXT,
  },
  textRightList: {
    fontSize: 10,
    height: 14,
    color: GRAY_SWITCHER_TEXT,
  },
  textLeftList: {
    fontSize: 10,
    height: 14,
    color: GRAY_SWITCHER_TEXT,
  },
  textLeft: {
    paddingLeft: 5,
    color: GRAY_SWITCHER_TEXT,
  },
  circle_red: {
    alignItems: 'center',
    backgroundColor: RED,
    borderColor: RED,
    borderWidth: 1,
    width: 16,
    height: 16,
  },
  circle_gray: {
    alignItems: 'center',
    backgroundColor: GRAY,
    borderColor: GRAY,
    borderWidth: 1,
    borderRadius: 10,
    width: 20,
    height: 20,
  },
});
