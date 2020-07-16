import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import styles from './style';
import Icons from '../../components/Icons';
import BaseStyle from '../../utils/BaseStyles';
import { WHITE, BLACK, GRAY } from '../../utils/BaseColors';
import { GRAY_SWITCHER_BG } from '../../utils/ComponentColors';
import Txt from '../Text/Txt';
import { FONTSIZE_SMALL, ICON_SIZE, FONTSIZE_TITLE } from '../../utils/Dimens';

type Props = {
  style?: {};
  text?: string;
  rightIcon?: string;
  textStyle?: {};
  onTap?: () => void;
  image?: string;
  leftImage?: string;
  leftIcon?: string;
  rightText?: string;
  number?: string;
};
export default function List(props: Props) {
  const {
    style,
    text,
    textStyle,
    image,
    onTap,
    rightIcon,
    rightText,
    leftIcon,
    leftImage,
    number,
    ...otherProps
  } = props;
  return (
    <View style={[styles.wrapperTag]}>
      <TouchableOpacity
        {...otherProps}
        style={[style, BaseStyle.roundedList, styles.listRounded]}
        onPress={onTap}
      >
        {leftIcon && (
          <View style={{ marginRight: 10 }}>
            <Icons name={leftIcon as any} color={BLACK} size={20} />
          </View>
        )}
        {leftImage && (
          <View style={{ marginRight: 10 }}>
            <Image
              source={{ uri: leftImage }}
              style={{
                width: 35,
                height: 35,
                resizeMode: 'contain',
                backgroundColor: '#ccc',
                borderRadius: 100,
              }}
            />
          </View>
        )}

        {leftImage ? (
          <View style={{ marginRight: 10 }}>
            <Txt style={{ fontSize: ICON_SIZE, marginTop: -8 }}>{number}%</Txt>
          </View>
        ) : (
          <View style={{ flex: 4 }}>
            <Txt>{text}</Txt>
          </View>
        )}

        {image && (
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Image
              source={{ uri: image }}
              style={{
                width: 35,
                height: 35,
                resizeMode: 'contain',
              }}
            />
          </View>
        )}
        {rightIcon && (
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Icons name={rightIcon as any} color={BLACK} size={20} />
          </View>
        )}

        {rightText && !leftImage && (
          <View
            style={{
              flex: 5,
              alignItems: 'flex-end',
            }}
          >
            <Txt light style={{ fontSize: FONTSIZE_SMALL }}>
              {rightText}
            </Txt>
          </View>
        )}
        {rightText && leftImage && (
          <View
            style={{
              flex: 3,
              flexShrink: 1,
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              height: 30,
            }}
          >
            <Txt light style={{ fontSize: FONTSIZE_SMALL }}>
              {rightText}
            </Txt>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}
