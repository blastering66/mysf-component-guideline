import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import { GRAY, GRAYTRANS } from '../../utils/BaseColors';
import { RED_PRESSED } from '../../utils/ComponentColors';

export default class ButtonSmart extends React.Component {
  static propTypes = {
    style: PropTypes.any,
    outlined: PropTypes.bool,
    ghost: PropTypes.bool,
    onPress: PropTypes.func,
    clicked: PropTypes.bool,
    disabled: PropTypes.bool,
    showProgress: PropTypes.bool,
    children: PropTypes.node
  }

  static defaultProps = {
    outlined: false,
    ghost: false,
    onPress: () => {},
    disabled: false,
    showProgress: false,
  }

  render() {
    const {
      style,
      outlined,
      ghost,
      clicked,
      disabled,
      showProgress,
      children,
      onPress,
      ...otherProps
    } = this.props

    let styleContainer = outlined ? styles.container_outline : styles.container
    if (ghost) {
      styleContainer = styles.container_ghost
    }

    let clickStyle = null
    if (clicked && outlined) {
      clickStyle = {
        backgroundColor: GRAYTRANS
      }
    } else if (clicked && !ghost) {
      clickStyle = {
        backgroundColor: RED_PRESSED
      }
    }

    let opacityStyle = null
    if (disabled) {
      opacityStyle = {
        opacity: 0.5
      }
    }
    if (disabled) {
      return (
        <View
          style={[styleContainer, opacityStyle, clickStyle, style]}
          {...otherProps}>
          { children}
        </View>
      )  
    }
    return (
      <TouchableOpacity onPress={onPress} style={style}>
        <View
          style={[styleContainer, opacityStyle, clickStyle, style]}
          {...otherProps}>
          { children}
        </View>
      </TouchableOpacity>

    )
  }
}