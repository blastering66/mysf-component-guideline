import React, { useState } from 'react';
import { View, TouchableOpacity, Switch } from 'react-native';
import Txt from '../Text/Txt';
import Icons from '../../components/Icons';
import styles from './style';
import {
  RED,
  GRAY,
} from '../../utils/BaseColors';
import {
  COUNTER_ICON,
  GRAY_SWAP_BG,
  COUNTER_ICON_DISABLED,
  COUNTER_BG_DISABLED,
  COUNTER_BORDER,
} from '../../utils/ComponentColors';
import BaseStyles from '../../utils/BaseStyles';

type Props = {
  style?: {};
  onValueChanged?: (value: number) => void;
};

export default function Counter(props: Props) {
  const [value, valueChanged] = useState(0);
  const { style, onValueChanged, ...otherProps } = props;

  function increment() {
    const newValue = value + 1
    valueChanged(newValue);
    if (onValueChanged) onValueChanged(newValue)
  }

  function decrement() {
    if (value > 0) {
      const newValue = value - 1
      valueChanged(newValue);  
      if (onValueChanged) onValueChanged(newValue)
    }
  }

  return (
    <View style={[BaseStyles.row]}>
      <TouchableOpacity onPress={decrement}>
        {value == 0 ? (
          <View style={[styles.container_icon, styles.container_icon_disabled]}>
            <Icons
              name={'minus'}
              size={20}
              color={COUNTER_ICON_DISABLED}
            />
          </View>
        ) : (
          <View style={[styles.container_icon, styles.container_icon_active]}>
            <Icons name={'minus'} size={20} color={COUNTER_ICON} />
          </View>
        )}
      </TouchableOpacity>

      <View style={[styles.container_text]}>
        <Txt style={{ fontSize: 20 }}>{value}</Txt>
      </View>

      <TouchableOpacity onPress={increment}>
        <View style={[styles.container_icon, styles.container_icon_active]}>
          <Icons name={'plus'} size={20} color={COUNTER_ICON} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
