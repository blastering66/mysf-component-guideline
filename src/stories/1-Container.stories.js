import React from 'react';
import { Text } from 'react-native';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Card from '../components/Container/Card';
import Space from '../components/Space/Space';
import DefaultView from './DefaultView';

export default {
  title: 'Container',
};

// export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

// export const Emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//     <Avatar img={'https://i.picsum.photos/id/568/200/300.jpg?hmac=vQmkZRQt1uS-LMo2VtIQ7fn08mmx8Fz3Yy3lql5wkzM'} />
//   </Button>
// );

export const Default = () => (
  <DefaultView style={{  }}>
    <Card showShadow={true} style={{ width: 200, height: 100, alignItems: 'center', justifyContent: 'center' }} >
      <Text>Regular Card</Text>
    </Card>

    <Space />
    
  </DefaultView>
)