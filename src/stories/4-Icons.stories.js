import React from 'react';
import { Text } from 'react-native';
import Icons from '../components/Icons';
import Avatar from '../components/Avatar';
import DefaultView from './DefaultView';
import { BLACK, RED, WHITE } from '../utils/BaseColors'

export default {
  title: 'Icons',
};

export const Default = () => (
  <DefaultView>
    <Text style={{ fontSize: 18, paddingBottom: 10 }}>Default Icons</Text>
    <Icons name={'arrow-left'} size={24} color={BLACK} rotate />
    <Icons
      name={'arrow-right'}
      size={20}
      color={WHITE}
      style={{
        width: 24,
        height: 24,
        backgroundColor: RED,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
    <Icons name={'chevron-right'} size={24} color={BLACK} />
    <Icons name={'eye-off'} size={24} color={RED} />
    <Icons name={'travel'} size={24} color={BLACK} />
    <Icons name={'down'} size={24} color={BLACK} />
    <Icons name={'package'} size={24} color={BLACK} />
  </DefaultView>
)