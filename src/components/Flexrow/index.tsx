import React from 'react';
import { View } from 'react-native';

type Props = {
  style?: {};
  children?: {};
};
export default function Tabs(props: Props) {
  const { children, style } = props;

  return (
    <View
      style={[
        style,
        {
          flexDirection: 'row',
          flex: 1,
          maxHeight: 64,
        },
      ]}
    >
      {children}
    </View>
  );
}
