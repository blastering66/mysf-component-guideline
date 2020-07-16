import React, { Component, useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Space from '../Space/Space';
import styles from './style';
import BaseStyles from '../../utils/BaseStyles';
import { DOT_ACTIVE } from '../../utils/ComponentColors';
import Txt from '../Text/Txt';
import Flexrow from '../Flexrow';

type Props = {
  style?: {};
  textStyle?: {};
  index: number;
  currentIndex: number;
  length: number;
  activeColor: string;
  onChangeIndex?: (index: number) => void;
};

export default function Pagination(props: Props) {
  let [currentIndex, setCurrentIndex] = useState(props.index)

  function prevPressed() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  function nextPressed() {
    if (currentIndex < length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const {
    style,
    textStyle,
    length,
    activeColor,
    onChangeIndex,
    ...otherProps
  } = props;

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

  let arrayPage = Array.from(Array(length + 1).keys());
  arrayPage.splice(0, 1);

  return (
    <View style={[BaseStyles.row, BaseStyles.wrapper_center]} {...otherProps} >
      <TouchableOpacity onPress={() => prevPressed()}>
        <View>
          <Txt bold>Prev</Txt>
        </View>
      </TouchableOpacity>
      <Space />
      <View style={[BaseStyles.row]}>
        {arrayPage.map((v, i) => (
          <TouchableOpacity onPress={() => setCurrentIndex(i)}>
            {currentIndex == i ? (
              <View
                style={[
                  BaseStyles.wrapper_center,
                  styles.container_pagination_active
                ]}
              >
                <Txt style={[{ color: 'white', fontSize: 18 }]}>{v}</Txt>
              </View>
            ) : (
              <View
                style={[
                  BaseStyles.wrapper_center,
                  styles.container_pagination_inactive
                ]}
              >
                <Txt bold>{i >= length - 1 ? '...' : v}</Txt>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <Space />
      <TouchableOpacity onPress={() => nextPressed()}>
        <View>
          <Txt bold>Next</Txt>
        </View>
      </TouchableOpacity>
    </View>
  );
}
