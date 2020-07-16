import React, {Component} from 'react';
import {Image, View, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import styles from './style';
import BaseStyle from '../../utils/BaseStyles';
import PropTypes from 'prop-types';

export default class Banner extends Component {
  static propTypes = {
    style: PropTypes.any,
    children: PropTypes.node,
    showShadow: PropTypes.bool,
    radius: PropTypes.number,
    onPress: PropTypes.func,
    image: PropTypes.string,
  }

  static defaultProps = {
    showShadow: false,
    radius: 0,
    style: {
      width: 150,
      height: 200
    }
  }

  render() {
    let {
      style,
      children,
      showShadow,
      radius,
      onPress,
      image,
      ...restProps
    } = this.props;

    let shadowStyle = showShadow ? BaseStyle.shadow : null
    let radiusStyle = null
    if (radius > 0) {
      radiusStyle = {
        borderRadius: radius
      }
    }

    return (
      <TouchableWithoutFeedback
        onPress={onPress}
        {...restProps}>
        <View style={[styles.container, styles.banner, radiusStyle, shadowStyle, style]}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}