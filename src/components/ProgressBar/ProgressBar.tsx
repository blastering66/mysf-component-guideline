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
import {
  GRAY,
  RED,
  GRAYCONTAINER
} from '../../utils/BaseColors';
import {
  PROGRESSBAR_RED,
  PROGRESSBAR_BLUE,
  PROGRESSBAR_GREEN,
  PROGRESSBAR_YELLOW,
  PROGRESSBAR_ORANGE,
} from '../../utils/ComponentColors';
import Slider from '@react-native-community/slider';
import * as Progress from 'react-native-progress';

type Props = {
  style?: {};
  width: number;
  thickness?: number;
  type: 'package' | 'detail_package' | 'timeline' | 'mission';
  color?: 'red' | 'blue' | 'green' | 'yellow' | 'orange';
  packageName?: string;
  currentValuePackage?: string;
  totalValuePackage?: string;
  disabled?: boolean;
  value: number;
};

export default function ProgressBar(props: Props) {
  const {
    style,
    type,
    color,
    width,
    thickness,
    packageName,
    currentValuePackage,
    totalValuePackage,
    disabled,
    value,
    ...otherProps
  } = props;

  let thicknessStyle = null;
  if (thickness) {
    thicknessStyle = {
      height: thickness,
    };
  }

  let opacityStyle = null;
  if (disabled) {
    opacityStyle = {
      opacity: 0.2,
    };
  }

  if (type === 'package') {
    return (
      <View style={[styles.container, opacityStyle, style]}>
        <Text style={{ paddingBottom: 10 }}>{packageName}</Text>
        <View style={[styles.container_value]}>
          <Text>
            {currentValuePackage}GB / {totalValuePackage}GB
          </Text>
          <Text style={{ flex: 1, textAlign: 'right' }}>*FUP</Text>
        </View>
        <Progress.Bar
          color={RED}
          progress={value / 100}
          width={width}
          borderRadius={10}
          height={thickness}
        />
      </View>
    );
  } else if (type === 'detail_package') {
    let colorProgress = null;
    if (color === 'red') {
      colorProgress = PROGRESSBAR_RED;
    } else if (color === 'blue') {
      colorProgress = PROGRESSBAR_BLUE;
    } else if (color === 'green') {
      colorProgress = PROGRESSBAR_GREEN;
    } else if (color === 'yellow') {
      colorProgress = PROGRESSBAR_YELLOW;
    } else {
      colorProgress = PROGRESSBAR_ORANGE;
    }
    return (
      <View style={[styles.row, opacityStyle, style]}>
        <View style={[styles.row, { flex: 1 }]}>
          <Image source={require('../../assets/images/icon_heart.png')} />
          <Text style={{ paddingLeft: 10 }}>{packageName}</Text>
        </View>
        <View style={{ paddingLeft: 20, flex: 2 }}>
          <Progress.Bar
            color={colorProgress}
            progress={value / 100}
            width={width}
            borderRadius={15}
            height={thickness}
            unfilledColor={GRAYCONTAINER}
            borderWidth={0}
          />
          <View style={{ position: 'absolute', top: 2, left: 35 }}>
            <Text>{'XX GB'}</Text>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={[styles.container, opacityStyle, style]}>
        <Text style={{ paddingBottom: 10 }}>{packageName}</Text>
        <View style={[styles.container_value]}>
          <Text>
            {currentValuePackage}GB / {totalValuePackage}GB
          </Text>
          <Text style={{ flex: 1, textAlign: 'right' }}>*FUP</Text>
        </View>
        <Slider
          style={[styles.slider, thicknessStyle, { opacity: 1 }]}
          step={10}
          minimumValue={0}
          maximumValue={100}
          thumbTintColor={'transparent'}
          disabled={true}
          minimumTrackTintColor={RED}
          maximumTrackTintColor={GRAY}
          {...otherProps}
        />
      </View>
    );
  }
}
