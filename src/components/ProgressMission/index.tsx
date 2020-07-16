import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import styles from './style';
import BaseStyle from '../../utils/BaseStyles';
import { WHITE, RED, GRAY } from '../../utils/BaseColors';
import Icons from '../../components/Icons';
import Txt from '../Text/Txt';
import Divider from '../Divider/Divider';

type Props = {
  style?: {};
  done?: boolean;
  final?: boolean;
  iconFinal?: string;
  index?: number;
  elevation?: number;
};
export default function ProgressMission(props: Props) {
  const {
    style,
    done,
    final,
    iconFinal,
    index,
    ...otherProps
  } = props;

  let elevation = 0;
  if (index === 0) {
    elevation = 5
  } else if (index === 1) {
    elevation = 4
  } else if (index === 2) {
    elevation = 3
  } else if (index === 3) {
    elevation = 2
  } else if (index === 4) {
    elevation = 1
  }

  return (
    <View style={[ BaseStyle.wrapper_center]}>
      <View style={[BaseStyle.wrapper_center, { paddingRight: 24 }, style]}>
        {done && !final && <View
            style={[
              styles.circle,
              { backgroundColor: done ? RED : GRAY },
            ]}
          >
            <Icons name={'checkmark'} color={WHITE} size={12} />
          </View>}
        {!done && !final && <View
            style={[
              styles.circle,
              { backgroundColor: done ? RED : GRAY },
            ]}
          >
            <Icons name={'checkmark'} color={WHITE} size={12} />
          </View>}

        {final &&  <Image source={iconFinal} resizeMode={'contain'} style={styles.icon} />}
        
        <View style={{ width: 10, height: 20 }} />

        {!final && (
          <View
            style={[
              styles.stepper_line,
              { 
                backgroundColor: done ? RED : GRAY,
                elevation: elevation
              },
            ]}
          />
        )}
      </View>
      
    </View>
  );
}
