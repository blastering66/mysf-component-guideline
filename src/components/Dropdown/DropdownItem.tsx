import React, { Component, useState } from 'react';
import { View, TouchableOpacity, Image, Modal } from 'react-native';
import Text from '../Text/Txt';
import styles from './style';
import BaseStyle from '../../utils/BaseStyles';
import PropTypes from 'prop-types';

type Props = {
  style?: {};
  label?: string;
  value?: string;
  errorMessage?: string;
  disabled?: boolean;
  onPress?: (param: any) => void;
  type?: 'single' | 'multi';
};

export default function DropdownItem(props: Props) {
  const [isShowingItem, showDropItem] = useState(false);
  const {
    style,
    type,
    label,
    value,
    errorMessage,
    disabled,
    onPress,
    ...otherProps
  } = props;

  return (
    <TouchableOpacity onPress={() => onPress(value)}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}
