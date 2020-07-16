import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Switch } from 'react-native';
import Text from '../../../src/components/Text/Txt';
import PropTypes from 'prop-types';
import styles from './style';
import { RED, GRAY } from '../../utils/BaseColors';

type Props = {
  style?: {};
  type?: 'default' | 'onoff';
  labelLeft?: string;
  labelRight?: string;
  disabled?: boolean;
  nativeView?: boolean;
  forList?: boolean;
};

Switcher.defaultProps = {
  type: 'default',
};

export default function Switcher(props: Props) {
  const [firstSelected, setFirstSelected] = useState(true);
  const {
    style,
    type,
    labelLeft,
    labelRight,
    nativeView,
    disabled,
    forList,
    ...otherProps
  } = props;

  let opacityStyle = null;
  if (disabled) {
    opacityStyle = {
      opacity: 0.3,
    };
  }
  /*
  * Native View type not used again in version 0.3
  */
  // if (nativeView) {
  //   return (
  //     <TouchableWithoutFeedback
  //       onPress={() => (disabled ? null : setFirstSelected(!firstSelected))}
  //     >
  //       {firstSelected ? (
  //         <View style={[styles.container_native, opacityStyle]}>
  //           <Switch
  //             disabled={true}
  //             value={true}
  //             trackColor={{ false: RED, true: GRAY }}
  //             thumbColor={RED}
  //             ios_backgroundColor="white"
  //           />
  //           <View style={{ width: 10 }} />
  //           <Text style={styles.textRight}>{labelLeft}</Text>
  //         </View>
  //       ) : (
  //         <View style={[styles.container_native, opacityStyle]}>
  //           <Switch
  //             disabled={true}
  //             value={false}
  //             trackColor={{ false: GRAY, true: '#81b0ff' }}
  //             thumbColor={GRAY}
  //             ios_backgroundColor="white"
  //           />
  //           <View style={{ width: 10 }} />
  //           <Text style={styles.textRight}>{labelRight}</Text>
  //         </View>
  //       )}
  //     </TouchableWithoutFeedback>
  //   );
  // }

  if (type === 'default') {
    return (
      <TouchableWithoutFeedback
        onPress={() => (disabled ? null : setFirstSelected(!firstSelected))}
      >
        {firstSelected ? (
          <View style={[styles.container_native, opacityStyle, style]}>
            <Switch
              disabled={true}
              value={true}
              trackColor={{ false: RED, true: GRAY }}
              thumbColor={RED}
              ios_backgroundColor="white"
            />
            <View style={{ width: 10 }} />
            {forList ? (
              <Text style={[styles.textRightList]}>{labelLeft}</Text>
            ) : (
              <Text style={[styles.textRight]}>{labelLeft}</Text>
            )}
          </View>
        ) : (
          <View style={[styles.container_native, opacityStyle, style]}>
            <Switch
              disabled={true}
              value={false}
              trackColor={{ false: GRAY, true: '#81b0ff' }}
              thumbColor={GRAY}
              ios_backgroundColor="white"
            />
            <View style={{ width: 10 }} />
            {forList ? (
              <Text style={[styles.textRightList]}>{labelRight}</Text>
            ) : (
              <Text style={[styles.textRight]}>{labelRight}</Text>
            )}
          </View>
        )}
      </TouchableWithoutFeedback>
    );
  } else {
    return (
      <TouchableWithoutFeedback
        onPress={() => (disabled ? null : setFirstSelected(!firstSelected))}
      >
        {firstSelected ? (
          <View style={[styles.container, opacityStyle, style]}>
            {forList ? (
              <Text style={styles.textLeftList}>{labelLeft}</Text>
            ) : (
              <Text style={styles.textLeft}>{labelLeft}</Text>
            )}
            <View style={{ width: 10 }} />
            <View style={styles.circle_red} />
            <View style={{ width: 5 }} />
            <Text style={styles.textRight}>{labelLeft}</Text>
          </View>
        ) : (
          <View style={[styles.container, opacityStyle, style]}>
            <View
              style={
                styles.circle_red
              }
            />
            <View style={{ width: 10 }} />
            {forList ? (
              <Text style={[styles.textRightList]}>{labelRight}</Text>
            ) : (
              <Text style={[styles.textRight]}>{labelRight}</Text>
            )}
          </View>
        )}
      </TouchableWithoutFeedback>
    );
  }
}
