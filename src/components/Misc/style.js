import { StyleSheet } from 'react-native';
import {
  BLACK,
  WHITE,
  GRAY,
  RED,
} from '../../utils/BaseColors';
import {
  GRAY_DIVIDER,
  DOT_ACTIVE,
  DOT_INACTIVE,
  DRAGBAR_GRAY,
  DOT_BORDER,
  PAGINATINATON_ACTIVE,
} from '../../utils/ComponentColors';
import { DEFAULT_DOT_SIZE } from '../../../src/utils/Dimens';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    paddingLeft: 10,
    textAlign: 'left',
  },
  container_circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: GRAY,
    backgroundColor: WHITE,
  },
  dot: {
    width: DEFAULT_DOT_SIZE,
    height: DEFAULT_DOT_SIZE,
    backgroundColor: DOT_ACTIVE,
  },
  dot_inactive: {
    width: DEFAULT_DOT_SIZE,
    height: DEFAULT_DOT_SIZE,
    backgroundColor: DOT_INACTIVE,
  },
  dot_inactive_border: {
    width: DEFAULT_DOT_SIZE,
    height: DEFAULT_DOT_SIZE,
    backgroundColor: DOT_INACTIVE,
    borderWidth: 1,
    borderColor: DOT_BORDER,
  },
  container_pagination_active: {
    paddingHorizontal: 10,
    backgroundColor: PAGINATINATON_ACTIVE,
    borderRadius: 16,
    width: 32,
    height: 32,
  },
  container_pagination_inactive: {
    paddingHorizontal: 10,
    backgroundColor: WHITE,
    borderRadius: 16,
    width: 32,
    height: 32,
  },
  dragbar: {
    width: 40,
    height: 6,
    borderRadius: 3,
    backgroundColor: DRAGBAR_GRAY,
  },
});
