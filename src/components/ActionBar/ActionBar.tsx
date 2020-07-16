import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import BaseStyles from '../../utils/BaseStyles';
import { FONTSIZE_ACTIONBAR_TITLE, FONTSIZE_NORMAL, FONTSIZE_TINEST, FONTSIZE_TINY } from '../../utils/Dimens';
import Text from '../Text/Txt';
import Space from '../Space/Space';
import Icons from '../../components/Icons';
import { GRAY, WHITE, BLACK } from '../../../src/utils/BaseColors';
import { ACTIONBAR_TAG } from '../../../src/utils/ComponentColors';
type Props = {
  style?: {};
  type?: 'home' | 'back' | 'close';
  title?: string;
  onBackPress: () => void;
  onAvatarPress: () => void;
  avatar?: any;
  homeTag?: string;
  homeLabel?: string;
  iconRight?: string;
  iconRightSecond?: string;
  counterFirst?: number;
  counterSecond?: number;
  onIconRightPress?: () => {},
  onIconSecondRightPress?: () => {},
};

ActionBar.defaultProps = {
  type: 'home',
  title: 'Screen Title',
};
export default function ActionBar(props: Props) {
  const {
    style,
    type,
    title,
    onBackPress,
    onAvatarPress,
    avatar,
    homeTag,
    homeLabel,
    iconRight,
    iconRightSecond,
    counterFirst,
    counterSecond,
    onIconRightPress,
    onIconSecondRightPress
  } = props;

  if (type === 'home') {
    return (
      <View
        style={[styles.container, styles.border_bottom, BaseStyles.row, style]}
      >
        <View style={[BaseStyles.row,{ alignItems: 'center', flex: 1, padding: 10 }]}>
          <TouchableOpacity onPress={onAvatarPress} style={{ paddingLeft: 5, backgroundColor: 'transparent' }}>
            { avatar ? (
              <Image source={{ uri: avatar }} style={{ width: 40, height: 40, backgroundColor: GRAY }} />
            ) : (
              <Image style={{ width: 40, height: 40, backgroundColor: GRAY }} />
            )}
          </TouchableOpacity>
          <View style={{ paddingLeft: 10 }}>
            <Text style={{ fontSize: FONTSIZE_NORMAL, paddingBottom: 5 }}>{title}</Text>
            <View style={[BaseStyles.row, { alignItems: 'center' }]}>
              <View style={{ backgroundColor: ACTIONBAR_TAG, padding: 5 }}>
                <Text style={{ fontSize: FONTSIZE_TINEST, color: WHITE, paddingHorizontal: 5 }}>{homeTag}</Text>
              </View>
              <Text style={{ fontSize: FONTSIZE_TINY, paddingLeft: 5 }}>{homeLabel}</Text>
            </View>
          </View>
        </View>
        <View style={[BaseStyles.row, { backgroundColor: 'transparent', alignItems: 'center', padding: 10 }]}>
          { iconRightSecond ? (
            <TouchableOpacity onPress={onIconRightPress}>
              <View style={{  }}>
                <Image source={iconRightSecond} style={{ width: 30, height: 30, borderRadius: 15 }} />
                { counterSecond && 
                  <View style={{ position: 'absolute', top: 0, right: -5 }}>
                    <View style={{
                      backgroundColor: 'red',
                      overflow: 'hidden',
                      borderRadius: 9,
                      width: 18,
                      height: 18,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 2,
                      borderColor: WHITE,
                    }}>
                      <Text style={{ color: WHITE, fontSize: 10, paddingLeft: 1}}>{counterSecond}</Text>
                    </View>
                  </View>
                }
              </View>
            </TouchableOpacity>
          ) : (
            <View style={{ width: 30, height: 30 }} />
          ) }
          
          { iconRightSecond && <Space />}

          { iconRight ? (
            <TouchableOpacity onPress={onIconSecondRightPress}>
              <View style={{  }}>
                <Image source={iconRight} style={{ width: 30, height: 30, borderRadius: 15 }} />
                { counterFirst && 
                  <View style={{ position: 'absolute', top: 0, right: -5 }}>
                    <View style={{
                      backgroundColor: 'red',
                      overflow: 'hidden',
                      borderRadius: 9,
                      width: 18,
                      height: 18,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 2,
                      borderColor: WHITE,
                    }}>
                      <Text style={{ color: WHITE, fontSize: 10, paddingLeft: 1}}>{counterFirst}</Text>
                    </View>
                  </View>
                }
              </View>
            </TouchableOpacity>
          ) : (
            <View style={{ width: 30, height: 30 }} />
          ) }
          <Space />
        </View>
      </View>
    );
  } else {
    return (
      <View
        style={[styles.container, styles.border_bottom, BaseStyles.row, style]}
      >
        <View style={[BaseStyles.row,{ alignItems: 'center', flex: 1, padding: 10 }]}>
          {type === 'back' ? (
            <TouchableOpacity onPress={onBackPress}>
              <View style={{ paddingLeft: 10 }}>
                <Icons name={'arrow-left'} rotate size={24} color={BLACK} style={{ width: 24, height: 24 }}  />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={onBackPress}>
              <View style={{ paddingLeft: 10 }}>
                <Icons name={'close'} size={24} color={'black'} style={{ width: 24, height: 24 }} />
              </View>
            </TouchableOpacity>
          )}
          <Text style={{ paddingLeft: 10 , fontSize: FONTSIZE_ACTIONBAR_TITLE }}>{title}</Text>
        </View>
        <View style={[BaseStyles.row, { backgroundColor: 'transparent', alignItems: 'center', padding: 10 }]}>
          { iconRightSecond ? (
            <TouchableOpacity onPress={onIconRightPress}>
              <View style={{  }}>
                <Image source={iconRightSecond} style={{ width: 30, height: 30, borderRadius: 15 }} />
                { counterSecond && 
                  <View style={{ position: 'absolute', top: 0, right: -5 }}>
                    <View style={{
                      backgroundColor: 'red',
                      overflow: 'hidden',
                      borderRadius: 9,
                      width: 18,
                      height: 18,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 2,
                      borderColor: WHITE,
                    }}>
                      <Text style={{ color: WHITE, fontSize: 10, paddingLeft: 1}}>{counterSecond}</Text>
                    </View>
                  </View>
                }
              </View>
            </TouchableOpacity>
          ) : (
            <View style={{ width: 30, height: 30 }} />
          ) }
          
          { iconRightSecond && <Space />}

          { iconRight ? (
            <TouchableOpacity onPress={onIconSecondRightPress}>
            <View style={{  }}>
              <Image source={iconRight} style={{ width: 30, height: 30, borderRadius: 15 }} />
              { counterFirst && 
                <View style={{ position: 'absolute', top: 0, right: -5 }}>
                  <View style={{
                    backgroundColor: 'red',
                    overflow: 'hidden',
                    borderRadius: 9,
                    width: 18,
                    height: 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 2,
                    borderColor: WHITE,
                  }}>
                    <Text style={{ color: WHITE, fontSize: 10, paddingLeft: 1}}>{counterFirst}</Text>
                  </View>
                </View>
              }
            </View>
          </TouchableOpacity>
          ) : (
            <View style={{ width: 30, height: 30 }} />
          ) }
          <Space />
        </View>
      </View>
    );
  }
}
