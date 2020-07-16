import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import styles from './style';
import Icons from '../../components/Icons';
import BaseStyle from '../../utils/BaseStyles';
import {
  BLACK,
} from '../../utils/BaseColors';
import {
  PROGRESSBAR_QUOTA_BACKGROUND,
  PROGRESSBAR_QUOTA_FOREGROUND,
} from '../../utils/ComponentColors';
import Txt from '../Text/Txt';
import { FONTSIZE_SMALL, ICON_SIZE, FONTSIZE_TINY } from '../../utils/Dimens';
import Switcher from '../../../src/components/Switcher';

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
  borderBottom?: boolean;
  withSwitch?: boolean;
  leftSwitch?: string;
  rightSwitch?: string;
  progressBar?: number;
  progressBarText?: string;
  disabledList?: boolean;
};
export default function ListOptBorder(props: Props) {
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
    borderBottom,
    withSwitch,
    leftSwitch,
    rightSwitch,
    progressBar,
    progressBarText,
    disabledList,
    ...otherProps
  } = props;
  return (
    <View style={[styles.wrapperTag]}>
      <TouchableOpacity
        {...otherProps}
        style={[
          style,
          borderBottom ? BaseStyle.borderBottomList : BaseStyle.noBorderList,
          disabledList ? styles.disabledList : styles.normalList,
          styles.listRounded,
        ]}
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
            <Txt style={[disabledList && styles.disabledText]}>{text}</Txt>
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
        <View />
        {withSwitch && (
          <Switcher labelLeft={leftSwitch} labelRight={rightSwitch} forList />
        )}
        {progressBar && (
          <View
            style={{
              backgroundColor: PROGRESSBAR_QUOTA_BACKGROUND,
              flex: 10,
              height: 20,
              borderRadius: 9,
            }}
          >
            <View
              style={{
                backgroundColor: PROGRESSBAR_QUOTA_FOREGROUND,
                width: progressBar?.toString() + '%',
                height: 18,
                borderRadius: 9,
              }}
            ></View>
            <Txt
              style={{
                position: 'absolute',
                marginLeft: 10,
                marginTop: 2,
                fontSize: FONTSIZE_TINY,
              }}
            >
              {progressBarText}
            </Txt>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}
