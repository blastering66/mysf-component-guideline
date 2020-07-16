import React, { Component } from 'react';
import { View } from 'react-native';
import Space from '../Space/Space';
import styles from './style';
import BaseStyles from '../../../src/utils/BaseStyles';
import { DOT_ACTIVE } from '../../../src/utils/ComponentColors';

type Props = {
  style?: {};
  dotSize: number;
  active: false;
  activeColor: string;
  showBorder?: false;
  borderColor?: string;
};

export default function IndicatrDot(props: Props) {
  const {
    style,
    dotSize,
    active,
    activeColor,
    showBorder,
    borderColor,
  } = props;

  let dotStyle = null;
  if (dotSize) {
    dotStyle = {
      width: dotSize,
      height: dotSize,
      borderRadius: dotSize / 2,
    };
  }

  let dotActiveStyle = null;
  if (activeColor) {
    dotActiveStyle = {
      backgroundColor: activeColor,
    };
  } else {
    dotActiveStyle = {
      backgroundColor: DOT_ACTIVE,
    };
  }

  return (
    <View style={[BaseStyles.row, BaseStyles.wrapper_center]}>
      <Space />
      <View
        style={[
          active ? styles.dot : styles.dot_inactive,
          showBorder && !active ? styles.dot_inactive_border : null,
          showBorder && active ? styles.dot_inactive_border : null,
          dotStyle,
          active ? dotActiveStyle : null,
        ]}
      />
      <Space />
    </View>
  );
}
