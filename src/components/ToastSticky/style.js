import { StyleSheet } from 'react-native';
import {
  TOAST_SUCCESS_STICKY,
  TOAST_DANGER_STICKY,
} from '../../utils/ComponentColors';

export default StyleSheet.create({
  wrapperTag: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  successToast: {
    borderColor: '#19000000',
    borderWidth: 1,
    backgroundColor: TOAST_SUCCESS_STICKY,
    paddingHorizontal: 15,
    paddingVertical: 12,
    flexDirection: 'row',
  },
  dangerToast: {
    borderColor: '#19000000',
    borderWidth: 1,
    backgroundColor: TOAST_DANGER_STICKY,
    paddingHorizontal: 15,
    paddingVertical: 12,
    flexDirection: 'row',
  },
  iconPadding: {
    paddingLeft: 10,
  },
});
