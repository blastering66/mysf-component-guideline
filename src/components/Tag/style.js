import { StyleSheet } from 'react-native';
import { BLACK, RED, WHITE, BORDER_GREY } from '../../utils/BaseColors';

export default StyleSheet.create({
  font_regular: {
    color: BLACK,
    fontFamily: 'TruenoRg',
  },
  font_light: {
    color: BLACK,
    fontFamily: 'TruenoLt',
  },
  wrapperTag: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filledTag: {
    backgroundColor: RED,
    borderColor: RED,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    flexDirection: 'row',
  },
  filledTagText: {
    color: WHITE,
    fontFamily: 'TruenoRg',
    fontSize: 12,
  },
  unFilledTag: {
    backgroundColor: WHITE,
    borderColor: BORDER_GREY,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
  },
  unFilledTagText: {
    color: BLACK,
    fontFamily: 'TruenoRg',
    fontSize: 12,
  },
});
