import React, {Component} from 'react';
import {Image, View, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import Text from '../../../src/components/Text/Txt';
import styles from './style';
import BaseStyle from '../../utils/BaseStyles';
import PropTypes from 'prop-types';
import { GRAY } from '../../../src/utils/BaseColors';
import { RADIUS } from '../../../src/utils/Dimens';

export default class Voucher extends Component {
  static propTypes = {
    style: PropTypes.any,
    children: PropTypes.node,
    showShadow: PropTypes.bool,
    type: PropTypes.oneOfType([1, 2, 3]),
    radius: PropTypes.number,
    onPress: PropTypes.func,
    title: PropTypes.string,
    image: PropTypes.string,
  }

  static defaultProps = {
    style: {
      width: '100%',
      height: 'auto'
    },
    showShadow: false,
    radius: RADIUS,
    title: 'Package Title',
    type: 1
  }

  render() {
    let {
      style,
      children,
      type,
      showShadow,
      radius,
      onPress,
      title,
      image,
      ...restProps
    } = this.props;

    let shadowStyle = showShadow ? BaseStyle.shadow : null
    let radiusStyle = null
    // if (radius > 0) {
    //   radiusStyle = {
    //     borderRadius: radius
    //   }
    // }
    if (type == 1) {
      return (
        <TouchableWithoutFeedback
          onPress={onPress}
          {...restProps}>
          <View style={[styles.container_voucher, radiusStyle, shadowStyle, style]}>
            <View style={[styles.row, styles.container_voucher_top]}>
              <View style={[styles.fill, { minHeight: 100 }]}>
                <Image style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: GRAY }} />
                <View>
                  <Text style={[styles.title_voucher, { paddingVertical: 10} ]} multiline={true} lines={3}>{title}</Text>
                </View>
              </View>
            </View>
            <View style={[styles.row, styles.container_voucher_bottom]}>
              <View style={[styles.row, { flex: 1, alignItems: 'center' }]}>
                <View style={{flex: 1}}>
                  <Text style={[styles.text_voucher_bottom_title]}>{'Ends in'}</Text>
                  <Text style={[styles.text_voucher_bottom_value]}>{'23h 59m 9s'}</Text>
                </View>
                <View style={{flex: 1, paddingLeft: 5}}>
                  <Text style={[styles.text_voucher_bottom_title]}>{'Stocks'}</Text>
                  <Text style={[styles.text_voucher_bottom_value]}>{'100%'}</Text>
                </View>
              </View>
              <View style={[styles.row, styles.container_bottom_price]}>
                <Image style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: GRAY }} />
                <Text style={{ paddingLeft: 10}}>{'1.000.000.000'}</Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
    } else if (type == 2){
      return (
        <TouchableWithoutFeedback
          onPress={onPress}
          {...restProps}>
          <View style={[styles.container_voucher, radiusStyle, shadowStyle, style]}>
            <View style={[styles.row, styles.container_voucher_top]}>
              <View style={[styles.fill, { minHeight: 100 }]}>
                <Image style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: GRAY }} />
                <View>
                  <Text style={[styles.title_voucher, { paddingVertical: 10} ]} multiline={true} lines={3}>{title}</Text>
                </View>
              </View>
            </View>
            <View style={[styles.row, styles.container_voucher_bottom_type2]}>
              <View style={{flex: 1}}>
                <Text style={[styles.text_voucher_bottom_title]}>{'Valid Until'}</Text>
                <Text style={[styles.text_voucher_bottom_value]}>{'May 31, 2020'}</Text>
              </View>
              <View style={{flex: 1, paddingLeft: 5}}>
                <Text style={[styles.text_voucher_bottom_title]}>{'Redemption Date'}</Text>
                <Text style={[styles.text_voucher_bottom_value]}>{'May 21, 2020, 01:21'}</Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
    } else {
      return (
        <TouchableWithoutFeedback
          onPress={onPress}
          {...restProps}>
          <View style={[styles.container_voucher, radiusStyle, shadowStyle, style]}>
            <View style={[styles.row, styles.container_voucher_top]}>
              <View style={[styles.fill, { minHeight: 100 }]}>
                <Image style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: GRAY }} />
                <View>
                  <Text style={[styles.title_voucher, { paddingVertical: 10} ]} multiline={true} lines={3}>{title}</Text>
                </View>
              </View>
            </View>
            <View style={[styles.row, styles.container_voucher_bottom_type2]}>
              <View style={{flex: 1}}>
                <Text style={[styles.text_voucher_bottom_title]}>{'Valid Until'}</Text>
                <Text style={[styles.text_voucher_bottom_value]}>{'May 31, 2020'}</Text>
              </View>
              <View style={{textAlign: 'right'}}>
                <Text style={[styles.text_voucher_bottom_value]}>{'Expired'}</Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
    }
  }
}