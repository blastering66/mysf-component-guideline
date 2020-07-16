import React from 'react';
import { View } from 'react-native';
import styles from './style';
import Space from '../Space/Space';
type Props = {
  style?: {};
}
export default function DragBar(props: Props) {
  return (
    <View style={props.style}>
      <View style={styles.dragbar} />
    </View>
  )
  
}