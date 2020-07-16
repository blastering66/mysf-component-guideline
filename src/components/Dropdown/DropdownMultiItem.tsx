import React, { Component, useState } from 'react';
import { View, TouchableOpacity, Image, Modal } from 'react-native';
import Text from '../Text/Txt';
import styles from './style';
import BaseStyle from '../../utils/BaseStyles';
import PropTypes from 'prop-types';
import {
  GRAY,
  RED,
  BLACK,
  WHITE,
  GRAYCONTAINER,
  GRAYTRANS
} from '../../utils/BaseColors';
import { RADIUS, RADIUS_SQUARE } from '../../utils/Dimens';
import Icons from '../../components/Icons';

type Props = {
  style?: {};
  label?: string;
  value?: string;
  selected?: boolean;
  onSelected?: (param: any) => void;
};

export default function DropdownMultiItem(props: Props) {
  const [isShowingItem, showDropItem] = useState(false);
  const [isSelected, setSelected] = useState(props.selected);
  const { style, label, value, onSelected, ...otherProps } = props;

  return (
    <TouchableOpacity
      onPress={() => {
        setSelected(!isSelected);
        onSelected(value);
        // onPress(value)
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        {isSelected ? (
          <View
            style={{
              width: 24,
              height: 24,
              padding: 5,
              alignItems: 'center',
              borderRadius: RADIUS_SQUARE,
              backgroundColor: RED,
            }}
          >
            <Icons name={'checkmark'} color={WHITE} size={14} />
          </View>
        ) : (
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: RADIUS_SQUARE,
              backgroundColor: GRAYTRANS,
            }}
          />
        )}
        <Text style={{ paddingLeft: 10 }}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}
