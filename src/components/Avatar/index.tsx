import React from 'react';
import { View, Image } from 'react-native';
import styles from './style';

type Props = {
  style?: {};
  img?: string;
  type?: 'default' | 'male' | 'female';
  onPress?: () => void;
};
Avatar.defaultProps = {
  type: 'default'
}
export default function Avatar(props: Props) {
  const { style, img, type, onPress, ...otherProps } = props;

  let backgroundStyle = null;
  if (type === 'default') {
    backgroundStyle = styles.bg_default;
  } else if (type === 'male') {
    backgroundStyle = styles.bg_male;
  } else if (type === 'female') {
    backgroundStyle = styles.bg_female;
  }

  return (
    <View style={[styles.container, styles.avatar, backgroundStyle, style]}>
      { img && <Image source={{ uri: img }} style={styles.img} /> }
    </View>
  );
}
