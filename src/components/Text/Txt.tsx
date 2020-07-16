import React from 'react';
import { Text as DefaultText } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

type Props = {
  style?: {};
  children?: {};
  light?: boolean;
  bold?: boolean;
  invert?: boolean;
};
export default function Txt(props: Props) {
  const { style, children, light, bold, invert, ...otherProps } = props;
  return (
    <DefaultText
      allowFontScaling={false}
      style={[
        light ? styles.font_light : styles.font_regular,
        bold ? styles.font_bold : null,
        invert && styles.invert,
        style,
      ]}
      {...otherProps}
    >
      {children}
    </DefaultText>
  );
}
