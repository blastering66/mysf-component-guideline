import React, { useState } from 'react';
import { View, TouchableOpacity, Switch } from 'react-native';
import Icons from '../../components/Icons';
import styles from './style';
import { GRAY_SWAP_BG } from '../../utils/ComponentColors';
import BaseStyles from '../../utils/BaseStyles';

type Props = {
  style?: {};
  onPress?: () => void
};

export default function Swap(props: Props) {
  const [firstSelected, setFirstSelected] = useState(true);
  const {
    style,
    onPress,
    ...otherProps
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={[styles.container, BaseStyles.wrapper_center]}>
        <Icons name={'switch'} size={18} color={GRAY_SWAP_BG} style={styles.swap} />
      </View>
    </TouchableOpacity>
  );
}
