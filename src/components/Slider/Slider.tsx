import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  TouchableOpacityBase,
} from 'react-native';
import Text from '../Text/Txt';
import styles from './style';
import BaseStyle from '../../utils/BaseStyles';
import PropTypes from 'prop-types';
import { GRAY, RED } from '../../utils/BaseColors';
import Slider from '@react-native-community/slider';

type Props = {
  style?: {};
  sliderStyle?: {};
  minimumValue: number;
  maximumValue: number;
  step: number;
  label?: string;
  showValue?: boolean;
  ranged?: boolean;
  thickness?: number;
};

export default function SliderSmart(props: Props) {
  const {
    style,
    sliderStyle,
    minimumValue,
    maximumValue,
    step,
    label,
    showValue,
    ranged,
    thickness,
    ...otherProps
  } = props;

  let thicknessStyle = null;
  if (thickness) {
    thicknessStyle = {
      height: thickness,
    };
  }

  if (ranged) {
    return (
      <View style={[styles.container, style]}>
        <View style={[styles.container_value]}>
          <Text light={true}>{minimumValue}</Text>
          <Text light={true} style={{ flex: 1, textAlign: 'right' }}>
            {maximumValue}
          </Text>
        </View>
        <Slider
          style={[styles.slider, sliderStyle, thicknessStyle]}
          step={step}
          minimumValue={minimumValue}
          maximumValue={maximumValue}
          minimumTrackTintColor={RED}
          maximumTrackTintColor={GRAY}
          {...otherProps}
        />
      </View>
    );
  } else {
    return (
      <View style={[styles.container, style]}>
        <Text>{label}</Text>
        <Slider
          style={[styles.slider, sliderStyle, thicknessStyle]}
          step={step}
          minimumValue={minimumValue}
          maximumValue={maximumValue}
          minimumTrackTintColor={RED}
          maximumTrackTintColor={GRAY}
          {...otherProps}
        />
        {showValue ? (
          <View style={[styles.container_value]}>
            <Text light={true}>{minimumValue}</Text>
            <Text light={true} style={{ flex: 1, textAlign: 'right' }}>
              {maximumValue}
            </Text>
          </View>
        ) : null}
      </View>
    );
  }
}
