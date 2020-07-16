import {StyleSheet} from 'react-native';
import { WHITE, RED, GRAY, GREEN, BLACK } from '../../../src/utils/BaseColors';
import { GRAYTRANS, CARD_BANNER_GRAY } from '../../../src/utils/ComponentColors';
import { RADIUS, RADIUS_TAG, FONTSIZE_TITLE, FONTSIZE_NORMAL, FONTSIZE_SUBTITLE, FONTSIZE_BIG, FONTSIZE_TINY, FONTSIZE_SMALL } from '../../../src/utils/Dimens';
export default StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  container: {
    padding: 20,
    minWidth: 300
  },
  container_top: {
    alignItems: 'center'
  },
  card: {
    backgroundColor: WHITE
  },
  tag: {
    backgroundColor: GREEN,
    borderRadius: RADIUS_TAG,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  tag_text: {
    color: WHITE,
    fontSize: FONTSIZE_SMALL
  },
  banner: {
    backgroundColor: CARD_BANNER_GRAY,
    minWidth: 300
  },
  line: {
    width: 'auto',
    height: 5,
    backgroundColor: RED
  },
  container_benefit: {
    paddingVertical: 5,
    alignItems: 'center'
  },
  container_voucher: {
    backgroundColor: CARD_BANNER_GRAY,
    overflow: 'hidden',
    borderColor: GRAY,
    borderWidth: 1,
    minWidth: 300
  },
  container_voucher_top: {
    alignItems: 'center',
    padding: 20
  },
  container_bottom: {
    paddingTop: 5,
    alignItems: 'center',
    backgroundColor: WHITE
  },
  container_voucher_bottom: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: WHITE,
    alignItems: 'center'
  },
  container_voucher_bottom_type2: {
    padding: 20,
    backgroundColor: WHITE,
    alignItems: 'center'
  },
  fill: {
    flex: 1,
  },
  title_voucher: {
    fontSize: FONTSIZE_BIG,
    color: WHITE
  },
  title: {
    fontSize: FONTSIZE_TITLE
  },
  subtitle: {
    paddingVertical: 10,
    fontSize: FONTSIZE_NORMAL,
  },
  normal: {
    fontSize: FONTSIZE_NORMAL
  },
  benefit: {
    fontSize: FONTSIZE_TINY
  },
  text_voucher_bottom_title: {
    fontSize: FONTSIZE_TINY,
    color: GRAY
  },
  text_voucher_bottom_value: {
    fontSize: FONTSIZE_NORMAL,
    color: BLACK
  },
  container_bottom_price: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: GRAYTRANS,
    padding: 10
  }
})
