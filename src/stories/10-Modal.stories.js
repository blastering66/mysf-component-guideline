import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import ModalBanner from '../components/Modal/ModalBanner';
// import Modal from '../components/Modal/Modal';
import DefaultView from './DefaultView';


export default {
  title: 'Modal',
};

export const Dialog = () => (
  <DefaultView style={{ width: 800, height: 600 }}>
    <ModalBanner
        positiveLabel={'Submit'}
        negativeLabel={'Close'}
        img={
          'https://i.picsum.photos/id/89/225/400.jpg?hmac=plj4bcHOWzkl4SYHtDMM3Adhcatk7nw6jds4HiKyUH4'
        }
        onPositivePressed={() => console.log('Pressed')}
        onNegativePressed={() => console.log('Pressed')}
        closeable
        close={() => console.log('Pressed')}
        visible={true}
        style={{ width: 1000, height: 800 }}
      ></ModalBanner>
  </DefaultView>
)

export const Banner = () => (
  <DefaultView>
    <ModalBanner
      positiveLabel={'Submit'}
      negativeLabel={'Close'}
      img={
        'https://i.picsum.photos/id/89/225/400.jpg?hmac=plj4bcHOWzkl4SYHtDMM3Adhcatk7nw6jds4HiKyUH4'
      }
      onPositivePressed={() => console.log('Pressed')}
      onNegativePressed={() => console.log('Pressed')}
      closeable
      close={() => console.log('Pressed')}
      visible={true}
      style={{ minWidth: 800, minHeight: 600 }}
    ></ModalBanner>
  </DefaultView>
)