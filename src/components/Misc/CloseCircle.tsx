import React from 'react';
import { View } from 'react-native';
import Icons from '../../components/Icons';
import { BLACK } from '../../utils/BaseColors';
import BaseStyles from '../../utils/BaseStyles';
import styles from './style';

type Props = {
  style?: {};
};

export default function CloseCircle(props: Props) {
  return (
    <View style={[BaseStyles.wrapper_center, styles.container_circle]}>
      <Icons
        name={'close'}
        size={24}
        color={BLACK}
      />
    </View>
  );
}
