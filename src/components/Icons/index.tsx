import Svg, { Path, SvgUri, SvgAst } from 'react-native-svg';
import React from 'react';
import { View } from 'react-native';
import { BLACK, RED, GRAYTRANS } from '../../utils/BaseColors';
import iconsCollections from '../../assets/icons/icons_collections.json';

type Props = {
  style?: {};
  size?: number;
  color?: string;
  rotate?: boolean;
  name?:
    | 'arrow-left'
    | 'arrow-right'
    | 'bell'
    | 'beverage'
    | 'bonus'
    | 'calendar'
    | 'cardboard'
    | 'cart'
    | 'categories'
    | 'change'
    | 'chat'
    | 'chat-service'
    | 'checkmark'
    | 'chevron-left'
    | 'chevron-right'
    | 'close'
    | 'customerservice'
    | 'cutlery'
    | 'data'
    | 'discount'
    | 'down'
    | 'editprofile'
    | 'eye-off'
    | 'eye-on'
    | 'favorite'
    | 'feedback'
    | 'flash'
    | 'game'
    | 'gift'
    | 'globe'
    | 'history'
    | 'info'
    | 'home'
    | 'keypad'
    | 'livechat'
    | 'lock'
    | 'menu'
    | 'message'
    | 'mifi'
    | 'minus'
    | 'movie'
    | 'others'
    | 'package'
    | 'phone'
    | 'play'
    | 'plus'
    | 'point'
    | 'privacy'
    | 'refresh'
    | 'rupiah'
    | 'sakuku'
    | 'scan'
    | 'search'
    | 'service'
    | 'share'
    | 'shop'
    | 'switch'
    | 'simcard'
    | 'smartcoin'
    | 'tooltips'
    | 'topup'
    | 'translate'
    | 'travel';
};

Icons.defaultProps = {
  size: 24,
  color: BLACK,
};

export default function Icons(props: Props) {
  const { style, size, color, name, rotate, ...otherProps } = props;
  if (name) {
    return (
      <View style={style}>
        <Svg width={size} height={size} viewBox={`0 0 24 24`}>
          {rotate ? (
            <Path
              d={iconsCollections[name]}
              fill={color}
              fill-rule="nonzero"
              transform="translate(12.000000, 12.000137) scale(-1, 1) translate(-12.000000, -12.000137) "
              {...otherProps}
            />
          ) : (
            <Path
              d={iconsCollections[name]}
              fill={color}
              fill-rule="nonzero"
              {...otherProps}
            />
          )}
        </Svg>
      </View>
    );
  } else {
    return (
      <View style={style}>
        <Svg width={size} height={size} viewBox={`0 0 24 24`}>
        </Svg>
      </View>
    )
  }
}
