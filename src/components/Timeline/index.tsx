import React, { Component } from 'react';
import { View } from 'react-native';

type Props = {
  style?: {};
  width: number;
  progress: number;
};
export default function Timeline(props: Props) {
  let {
    style,
    width,
    progress,
    ...otherProps
  } = props
  return (
    <View
      style={{
        width: width,
        height: 12,
        backgroundColor: 'rgba(191, 191, 191, 0.5)',
        borderRadius: 6
      }} >
      <View
        style={{
        width: (progress / 100) * width,
        height: 12,
        borderRadius: 6,
        backgroundColor: 'red'
      }} />
    </View>
  )
}
