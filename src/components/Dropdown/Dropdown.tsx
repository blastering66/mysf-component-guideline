import React, { Component, useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import Text from '../Text/Txt';
import styles from './style';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import {
  GRAY,
  GRAY_200,
  TRANSPARENT,
} from '../../utils/BaseColors';
import DropdownItem from './DropdownItem';
import DropdownMultiItem from './DropdownMultiItem';
import { array } from '@storybook/addon-knobs';
import Icons from '../../components/Icons';

type Props = {
  style?: {};
  label?: string;
  selected?: string;
  data?: [];
  errorMessage?: string;
  disabled?: boolean;
  onPress?: () => void;
  type?: 'single' | 'multi';
};

Dropdown.defaultProps = {
  type: 'single',
};

export default function Dropdown(props: Props) {
  function onItemSelected(params: any) {
    console.log('onItemSelected', params);
    if (type === 'multi') {
      const oldData = data;
      console.log('oldData', oldData);
      const newData = update(oldData, {
        [params]: {
          selected: { $set: !oldData[params].selected },
        },
      });
      console.log('newData', newData);
      setData(newData);
      let arraySelected = [];
      newData?.map((value) => {
        if (value.selected) {
          arraySelected.push(value.value);
        }
      });
      if (arraySelected.length > 0) {
        setSelected(arraySelected.toString());
      } else {
        setSelected(label);
      }
    } else {
      setSelected(params);
    }
  }

  const [isShowingItem, showDropItem] = useState(false);
  const [current_x, setPosX] = useState(0);
  const [current_y, setPosY] = useState(0);
  const [current_width, setWidth] = useState(200);
  const [current_height, setHeight] = useState(100);
  const [selected, setSelected] = useState(props.label);
  const [data, setData] = useState(props.data);

  useEffect(() => {
    console.log('newData', data);
  });

  let {
    style,
    type,
    label,
    errorMessage,
    disabled,
    onPress,
    ...otherProps
  } = props;

  return (
    <View
      onLayout={(event) => {
        const layout = event.nativeEvent.layout;
        setPosX(layout.x);
        setPosY(layout.y);
        setWidth(layout.width);
        setHeight(layout.height);
      }}
    >
      <View style={{ width: '100%', height: 'auto', minWidth: 250 }}>
        <View style={{ padding: 10 }}>
          <Text>{selected === label ? ' ' : label}</Text>
        </View>
        <TouchableOpacity onPress={() => showDropItem(!isShowingItem)}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: GRAY,
              borderRadius: 10,
              padding: 10,
            }}
          >
            <Text style={{ flex: 1 }}>{selected}</Text>
            <Icons name={'down'} color={GRAY} size={12} />
          </View>
        </TouchableOpacity>
      </View>
      <Modal transparent={true} visible={isShowingItem}>
        <TouchableWithoutFeedback onPress={() => showDropItem(false)}>
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: TRANSPARENT,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: GRAY,
              borderRadius: 10,
              padding: 10,
            }}
          >
            <View
              style={{
                width: current_width,
                height: 'auto',
                backgroundColor: 'white',
                position: 'absolute',
                top: current_y + current_height + 42,
                left: current_x + 57,
                borderWidth: 1,
                borderColor: GRAY,
                borderRadius: 10,
                padding: 10,
              }}
            >
              {data.map((data_, index) => {
                return type === 'multi' ? (
                  <DropdownMultiItem
                    key={index}
                    selected={data_.selected}
                    label={data_.label}
                    value={index}
                    onSelected={(selected: any) => {
                      onItemSelected(selected);
                    }}
                  />
                ) : (
                  <DropdownItem
                    key={index}
                    label={data_.label}
                    value={data_.value}
                    onPress={(selected: any) => {
                      showDropItem(false);
                      onItemSelected(selected);
                    }}
                  />
                );
              })}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}
