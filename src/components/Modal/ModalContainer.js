import React, { Component } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import styles from './style';
import BaseStyle from '../../utils/BaseStyles';
import PropTypes from 'prop-types';
import { WHITE } from '../../utils/BaseColors';

export default class ModalContainer extends Component {
  static propTypes = {
    style: PropTypes.any,
    children: PropTypes.node,
    showShadow: PropTypes.bool,
    radius: PropTypes.number,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    showShadow: false,
    radius: 0,
  };

  render() {
    const {
      style,
      children,
      showShadow,
      radius,
      onPress,
      ...restProps
    } = this.props;

    let shadowStyle = showShadow ? BaseStyle.shadow : null;
    let radiusStyle = null;
    if (radius > 0) {
      radiusStyle = {
        borderRadius: radius,
      };
    }
    return (
      <TouchableWithoutFeedback>
        <View
          onPress={() => null}
          style={[styles.container, radiusStyle, shadowStyle, style]}
          {...restProps}
        >
          {children}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
