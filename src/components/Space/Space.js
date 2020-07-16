import React, {Component} from 'react';
import {View, ViewProps} from 'react-native';
import PropTypes from 'prop-types';

const size = {
  small: 'small',
  big: 'big',
};

class Space extends Component {
  static propTypes = {
    size: PropTypes.number
  }
  
  render() {
    let {
      size
    } = this.props;
    if (size === 'small') {
      return (
        <View style={{width: 5, height: 5}} />  
      );
    }
    return (
      <View style={{width: 10, height: 10}} />
    );
  }
}

Space.size = size;
export default Space;
