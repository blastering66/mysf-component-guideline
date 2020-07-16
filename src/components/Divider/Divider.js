import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './style';
import BaseStyle from '../../utils/BaseStyles';
import PropTypes from 'prop-types';
import { GRAY } from '../../utils/BaseColors';

export default class Divider extends Component {
  static propTypes = {
    style: PropTypes.any,
    vertical: PropTypes.bool,
    thick: PropTypes.number,
  };

  static defaultProps = {
    thick: 1,
  };

  render() {
    const { style, size, children, thick, vertical, ...restProps } = this.props;

    let orientationStyle = null;
    if (vertical) {
      orientationStyle = {
        width: thick,
        height: 'auto',
        alignSelf: 'stretch',
        backgroundColor: GRAY,
      };
    } else {
      orientationStyle = {
        alignSelf: 'stretch',
        witdh: 'auto',
        height: thick,
        backgroundColor: GRAY,
      };
    }

    return (
      <View style={[styles.line, orientationStyle, style]} {...restProps} />
    );
  }
}
