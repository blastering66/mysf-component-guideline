import { StyleSheet } from 'react-native';
import {
  WHITE,
} from '../../utils/BaseColors';
import {
  TOAST_SUCCESS,
  TOAST_DANGER_STICKY,
} from '../../utils/ComponentColors';

export default StyleSheet.create({
  wrapperTag: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  standarToast: {
    borderColor: '#19000000',
    borderWidth: 1,
    backgroundColor: WHITE,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    flexDirection: 'row',
  },
  successToast: {
    borderColor: '#19000000',
    borderWidth: 1,
    backgroundColor: TOAST_SUCCESS,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    flexDirection: 'row',
  },
  dangerToast: {
    borderColor: '#19000000',
    borderWidth: 1,
    backgroundColor: TOAST_DANGER_STICKY,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    flexDirection: 'row',
  },
  iconPadding: {
    paddingLeft: 10,
  },
});
