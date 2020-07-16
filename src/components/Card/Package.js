import React, {Component} from 'react';
import {Image, View, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import Text from '../../../src/components/Text/Txt';
import styles from './style';
import BaseStyle from '../../utils/BaseStyles';
import PropTypes from 'prop-types';
import { GRAY } from '../../../src/utils/BaseColors';
import Space from '../Space/Space';

export default class Package extends Component {
  static propTypes = {
    style: PropTypes.any,
    children: PropTypes.node,
    showShadow: PropTypes.bool,
    radius: PropTypes.number,
    onPress: PropTypes.func,
    kuota: PropTypes.string,
    title: PropTypes.string,
    tag: PropTypes.string,
    benefit1: PropTypes.string,
    benefit2: PropTypes.string,
    benefit3: PropTypes.string,
    kuotaBottom: PropTypes.string,
    likeCounter: PropTypes.number,
    image: PropTypes.string,
  }

  static defaultProps = {
    style: {
      width: '100%',
      height: 'auto'
    },
    showShadow: false,
    radius: 0,
    kuota: 'XX GB',
    title: 'Package Title',
    tag: '#TAG',
    benefit1: 'Benefit 1',
    benefit2: 'Benefit 2',
    benefit3: 'Benefit 3',
    kuotaBottom: 'Kuota Bottom GB',
    likeCounter: '100',
  }

  render() {
    let {
      style,
      children,
      showShadow,
      radius,
      onPress,
      title,
      kuota,
      tag,
      benefit1,
      benefit2,
      benefit3,
      kuotaBottom,
      likeCounter,
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
        <View style={[styles.container, styles.card, radiusStyle, shadowStyle, style]}>
          <View style={[styles.row, styles.container_top]}>
            <Text style={[styles.fill, styles.title]}>{kuota}</Text>
            <View style={[styles.tag]}>
              <Text style={[styles.tag_text]}>{tag}</Text>
            </View>
          </View>
          <Text light={true} style={[ styles.subtitle ]}>{title}</Text>
          <View style={[styles.row, { paddingVertical: 10 }]}>
            <View style={[styles.fill, {  }]}>
              <View style={[styles.row, styles.container_benefit]}>
                <Image style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: GRAY }} />
                <Text style={[styles.fill, styles.benefit, { paddingLeft: 5}]}>{benefit1}</Text>
              </View>
              <View style={[styles.row, styles.container_benefit]}>
                <Image style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: GRAY }} />
                <Text style={[styles.fill, styles.benefit, { paddingLeft: 5}]}>{benefit2}</Text>
              </View>
              <View style={[styles.row, styles.container_benefit]}>
                <Image style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: GRAY }} />
                <Text style={[styles.fill, styles.benefit, { paddingLeft: 5}]}>{benefit3}</Text>
              </View>
            </View>
            <Image style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: GRAY }} />
          </View>
          <View style={styles.line} />
          <View style={[styles.row, styles.container_bottom]}>
            <Text style={{ flex: 1 }}>{kuotaBottom}</Text>
            <Text>{likeCounter}</Text>
            <Space size={'small'} />
            <Image style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: GRAY }} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}