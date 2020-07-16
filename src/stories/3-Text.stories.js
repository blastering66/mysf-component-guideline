import React from 'react';
import { Text } from 'react-native';
import BaseStyle from '../utils/BaseStyles';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Avatar from '../components/Avatar';
import DefaultView from './DefaultView';
import Swap from '../components/Swap';

export default {
  title: 'Text',
};

export const Default = () => (
  <DefaultView>
    <Avatar img={'https://i.picsum.photos/id/568/200/300.jpg?hmac=vQmkZRQt1uS-LMo2VtIQ7fn08mmx8Fz3Yy3lql5wkzM'} />
    <Text style={{ fontSize: 30 }}>Qq Gg</Text>
    <Text style={[BaseStyle.regular, { fontSize: 30 }]}>Qq Gg</Text>
    <Text style={[{}, { fontFamily: 'TruenoRg', fontSize: 30 }]}>Qq Gg</Text>
    <Text style={[{}, { fontFamily: 'TruenoRg', fontSize: 30 }]}>Smartfren</Text>
    <Text style={[{}, { fontSize: 30 }]}>Smartfren</Text>
    <Text style={{ fontWeight: 'bold', fontSize: 30  }}>Trueno</Text>
    <Text style={BaseStyle.light}>Light</Text>
    <Swap />
  </DefaultView>
)