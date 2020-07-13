import { StyleSheet } from 'react-native-web';
import { AVATAR_BG_DEFAULT, AVATAR_BG_FEMALE, AVATAR_BG_MALE } from '../../utils/ComponentColors';

export default StyleSheet.create({
  container: {
  },
  avatar: {
    width: 64,
    height: 64,
    overflow: 'hidden'
  },
  img: {
    width: 64,
    height: 64
  },
  bg_default: {
    backgroundColor: AVATAR_BG_DEFAULT,
  },
  bg_male: {
    backgroundColor: AVATAR_BG_MALE,
  },
  bg_female: {
    backgroundColor: AVATAR_BG_FEMALE,
  }
})