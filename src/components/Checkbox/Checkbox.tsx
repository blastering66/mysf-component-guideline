import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  TouchableOpacityBase,
} from 'react-native';
import Text from '../../../src/components/Text/Txt';
import styles from './style';
import Icons from '../../components/Icons';
import BaseStyle from '../../utils/BaseStyles';
import PropTypes from 'prop-types';
import {
  RED,
  WHITE,
} from '../../utils/BaseColors';
import {
  GRAY_CHECKBOX_DEFAULT_BG,
  GRAY_CHECKBOX_BORDER,
} from '../../utils/ComponentColors';

type Props = {
  style?: {};
  onPress: () => void;
  checked: boolean;
  disabled: boolean;
  rounded: boolean;
  label: string;
};

export default function Checkbox(props: Props) {
  const {
    style,
    checked,
    disabled,
    rounded,
    label,
    onPress,
    ...otherProps
  } = props;

  let checkboxStyle = null;
  if (checked) {
    checkboxStyle = {
      width: 24,
      height: 24,
      backgroundColor: RED,
      borderRadius: rounded ? 5 : 12,
    };
  } else {
    checkboxStyle = {
      width: 24,
      height: 24,
      backgroundColor: GRAY_CHECKBOX_DEFAULT_BG,
      borderRadius: rounded ? 5 : 12,
      borderColor: GRAY_CHECKBOX_BORDER,
      borderWidth: 1,
    };
  }

  let opacityStyle = null;
  if (disabled) {
    opacityStyle = {
      opacity: 0.8,
    };
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, opacityStyle, style]} {...otherProps}>
        <View style={[checkboxStyle, BaseStyle.wrapper_center]}>
          <Icons name={'checkmark'} size={18} color={WHITE} />
        </View>
        <Text style={styles.label}>{label}</Text>
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
