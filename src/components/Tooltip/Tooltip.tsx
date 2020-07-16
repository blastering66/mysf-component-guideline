import React, { Component, useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import Text from '../Text/Txt';
import styles from './style';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import {
  GRAY,
  RED,
  BLACK,
  WHITE,
  TRANSPARENT,
} from '../../utils/BaseColors';
import {
  TOOLTIP_DARK,
} from '../../utils/ComponentColors';
import { array } from '@storybook/addon-knobs';
import Icons from '../../components/Icons';
import BaseStyles from '../../utils/BaseStyles';

type Props = {
  style?: {};
  message: string;
  darkmode?: boolean;
  /**
   * Visibility: Tooltip inherits the Modal Component, which is use the visible property
   */
  visible?: boolean;
  /**
   * Position: is where the position to show the Arrow / the Tip of the Tooltip pointing at the top or bottom
   */
  position?: 'top' | 'bottom';
  /**
   * AlignTip: is where the position of the Arrow / Tip. left or right or center
   */
  alignTip?: 'left' | 'center' | 'right';
  /**
   * top: is value of the position y in the screen to hover / float below / above the view
   * To get the value of this just use the 'onLayout' properties of the View Component. then 
   * use the measure method of the reference of the view. example : 
   * 
   * constructor(props) {
   *  super(props);
   *  this.handleLayoutChange = this.handleLayoutChange.bind(this);
   * }
   * 
   * handleLayoutChange() {
   *  this.buttonDefaultTooltip.measure((fx, fy, width, height, px, py) => {
   *    console.log('Component width is: ' + width);
   *    console.log('Component height is: ' + height);
   *    console.log('X offset to page: ' + px);
   *    console.log('Y offset to page: ' + py);
   *    this.setState({ xTooltip: px, yTooltip: py })
   *  }); 
   * }
   * 
   * <View
   *  onLayout={(event) => this.handleLayoutChange(event)}
   *  ref={(view) => { this.buttonDefaultTooltip = view }}
   * >
   * 
   */
  top: 0;
  left: 0;
  close?: () => void;
};

Tooltip.defaultProps = {
  message: 'Message',
  position: 'top',
  alignTip: 'center',
};

export default function Tooltip(props: Props) {
  let {
    style,
    message,
    visible,
    darkmode,
    position,
    alignTip,
    top,
    left,
    close,
    ...otherProps
  } = props;

  let positionStyle= null
  let tipPositionStyle = null
  let tipColorStyle = null

  if (position === 'top') {
    positionStyle = styles.triangle_top
    if (alignTip === 'left') {
      tipPositionStyle = styles.tooltip_bottom_left
    } else if (alignTip === 'right') {
      tipPositionStyle = styles.tooltip_bottom_right
    } else {
      tipPositionStyle = styles.tooltip_bottom_center
    }

    if (darkmode) {
      tipColorStyle = styles.tip_top_dark
    } else {
      tipColorStyle = styles.tip_top_white
    }
    
  } else {
    positionStyle = styles.triangle
    if (alignTip === 'left') {
      tipPositionStyle = styles.tooltip_left
    } else if (alignTip === 'right') {
      tipPositionStyle = styles.tooltip_right
    } else {
      tipPositionStyle = styles.tooltip_center
    }

    if (darkmode) {
      tipColorStyle = styles.tip_bottom_dark
    } else {
      tipColorStyle = styles.tip_bottom_white
    }
  }
  
  return (
    <Modal transparent={true} visible={visible}>
      <TouchableWithoutFeedback onPress={close}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: TRANSPARENT,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: GRAY,
            borderRadius: 10,
            padding: 10,
            zIndex: 10
          }}
        >
          <View
            style={[
              {
                minWidth: 300,
                height: 'auto',
                backgroundColor: darkmode ? TOOLTIP_DARK : WHITE,
                position: 'absolute',
                top: top,
                left: left,
                borderWidth: 1,
                borderColor: GRAY,
                borderRadius: 10,
                padding: 10,
              },
              BaseStyles.shadow,
            ]}
          >
            <View
              style={[
                BaseStyles.row,
                BaseStyles.shadow,
                BaseStyles.wrapper_center,
                { justifyContent: 'center' }
              ]}
            >
              <Text style={[{ padding: 5, flex: 1, color: darkmode ? WHITE : BLACK }, style]}>{message}</Text>
              <TouchableOpacity onPress={(close)}>
                <Icons name={'close'} size={18} color={GRAY} />
              </TouchableOpacity>
            </View>

            <View style={[tipPositionStyle , positionStyle, tipColorStyle]} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
