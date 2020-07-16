import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  TouchableOpacityBase,
} from 'react-native';
import Text from '../../../src/components/Text/Txt';
import styles from './style';
import BaseStyle from '../../utils/BaseStyles';
import PropTypes from 'prop-types';
import {
  RED,
} from '../../utils/BaseColors';
import {
  GRAY_RADIOBUTTON_DEFAULT_BG,
  GRAY_RADIOBUTTON_BORDER,
} from '../../utils/ComponentColors';

type Props = {
  style?: {};
  onPress: () => void;
  checked: boolean;
  disabled: boolean;
  label: string;
};

export default function RadioButton(props: Props) {
  const { style, checked, disabled, label, onPress, ...otherProps } = props;

  let radioButtonStyle = null;
  if (checked) {
    radioButtonStyle = {
      width: 24,
      height: 24,
      backgroundColor: RED,
      borderRadius: 12,
      borderWidth: 0,
      borderColor: '#ffa2a1',
    };
  } else {
    radioButtonStyle = {
      width: 24,
      height: 24,
      backgroundColor: GRAY_RADIOBUTTON_DEFAULT_BG,
      borderRadius: 12,
      borderColor: GRAY_RADIOBUTTON_BORDER,
      borderWidth: 1,
    };
  }

  let opacityStyle = null;
  if (disabled) {
    opacityStyle = {
      opacity: 0.8,
    };
  }

  if (disabled) {
    return (
      <View style={[styles.container, opacityStyle, style]} {...otherProps}>
        <View style={[radioButtonStyle, BaseStyle.wrapper_center]}>
          {checked && (
            <View
              style={{ backgroundColor: RED, padding: 8, borderRadius: 12 }}
            />
          )}
        </View>
        <Text style={[styles.label, opacityStyle]}>{label}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, opacityStyle, style]} {...otherProps}>
        <View style={[radioButtonStyle, BaseStyle.wrapper_center]}>
          {checked && (
            <View
              style={{
                backgroundColor: '#ffa2a1',
                padding: 8,
                borderRadius: 12,
              }}
            />
          )}
        </View>
        <Text style={[styles.label, opacityStyle]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

// export default class Checkbox extends Component {
//   static propTypes = {
//     style: PropTypes.any,
//     onPress: PropTypes.func,
//     checked: PropTypes.bool,
//     disabled: PropTypes.bool,
//     rounded: PropTypes.bool,
//     label: PropTypes.string
//   }

//   render() {
//     const {
//       style,
//       checked,
//       disabled,
//       rounded,
//       label,
//       onPress,
//       ...otherProps
//     } = this.props;

//     let checkboxStyle = null;
//     if (checked) {
//       checkboxStyle = {
//         width: 24,
//         height: 24,
//         backgroundColor: RED,
//         borderRadius: rounded ? 5 : 12
//       }
//     } else {
//       checkboxStyle = {
//         width: 24,
//         height: 24,
//         backgroundColor: GRAY,
//         borderRadius: rounded ? 5 : 12,
//         borderColor: BLACK,
//         borderWidth: 1
//       }
//     }

//     let opacityStyle = null;
//     if (disabled) {
//       opacityStyle = {
//         opacity: 0.8
//       }
//     }

//     return (
//       <TouchableOpacity onPress={onPress}>
//         <View style={[styles.container, opacityStyle, style]} {...otherProps}>
//           <View style={[ checkboxStyle ]} />
//           <Text style={styles.label}>{label}</Text>
//         </View>
//       </TouchableOpacity>

//     )
//   }
// }
