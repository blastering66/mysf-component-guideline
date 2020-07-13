import React, {Component} from 'react';
import {View, ViewProperties} from 'react-native-web';
import PropTypes from 'prop-types';
import DIMENS from '../../utils/Dimens';
import COLORS from '../../utils/Colors';

const orientation = {
  vertical: 'vertical',
  horizontal: 'horizontal',
};

class Garis extends Component {
  static propTypes = {
    vertical: PropTypes.bool,
    style: PropTypes.node
  }

  render() {
    const {
      vertical,
      style
    } = this.props;

    if (vertical) {
      return (
        <View style={[{ width: 10, height: '100%', backgroundColor: 'red', opacity: 0.3 }, style]}/>
      );
    }
    return (
      <View style={[{ width: '100%', height: 10, backgroundColor: 'red', opacity: 0.3 }, style]} />
    );
  }
}

Garis.orientation = orientation;
export default Garis;
