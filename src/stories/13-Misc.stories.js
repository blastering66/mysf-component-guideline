import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { Avatar as AvatarNya } from '../components/Avatar';
import DefaultView from './DefaultView';

export default {
  title: 'Misc',
};

export const Avatar = () => (
  <DefaultView>
    <AvatarNya img={'https://i.picsum.photos/id/568/200/300.jpg?hmac=vQmkZRQt1uS-LMo2VtIQ7fn08mmx8Fz3Yy3lql5wkzM'} />
  </DefaultView>
)

export const TagAndBridge = () => (
  <DefaultView>
    <AvatarNya img={'https://i.picsum.photos/id/568/200/300.jpg?hmac=vQmkZRQt1uS-LMo2VtIQ7fn08mmx8Fz3Yy3lql5wkzM'} />
  </DefaultView>
)

export const Divider = () => (
  <DefaultView>
    <AvatarNya img={'https://i.picsum.photos/id/568/200/300.jpg?hmac=vQmkZRQt1uS-LMo2VtIQ7fn08mmx8Fz3Yy3lql5wkzM'} />
  </DefaultView>
)