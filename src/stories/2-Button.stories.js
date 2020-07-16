import React from 'react';
import { action } from '@storybook/addon-actions';
import { Text, View, Image } from 'react-native';
import Avatar from '../components/Avatar';
import ButtonSmart from '../components/Button/ButtonSmart';
import DefaultView from './DefaultView';

export default {
  title: 'Button',
};

export const WithIcon = () => (
  <DefaultView>
    <Text style={{ fontSize: 18, paddingBottom: 10 }}>Button With Icon</Text>
    <Text style={{ fontSize: 12, paddingBottom: 10 }}>Default State</Text>
    <ButtonSmart
      style={{ flexDirection: 'row' }}>
      <Image resizeMode="contain" source={require('../assets/images/icon_heart_white.png')}  style={{ width: 18, height: 18, marginRight: 10 }} />
      <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'white' }}>Click Me !</Text>
    </ButtonSmart>
  </DefaultView>
)

export const OnlyIcon = () => (
  <DefaultView>
    <Text style={{ fontSize: 18, paddingBottom: 10 }}>Button Only Icon</Text>
    <Text style={{ fontSize: 12, paddingBottom: 10 }}>Default State</Text>
    <ButtonSmart
      style={{ width: 60, height: 60, justifyContent: 'center', alignItems: 'center' }}>
      <Image resizeMode="contain" source={require('../assets/images/icon_heart_white.png')}  style={{ width: 30, height: 30 }} />
    </ButtonSmart>
  </DefaultView>
)