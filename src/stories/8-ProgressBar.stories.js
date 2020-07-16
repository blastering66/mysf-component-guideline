import React from 'react';
import { View, Text } from 'react-native';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Avatar from '../components/Avatar';
import DefaultView from './DefaultView';
// import ProgressBar from '../components/ProgressBar/ProgressBar';
import ProgressMission from '../components/ProgressMission';
import Flexrow from '../components/Flexrow';

export default {
  title: 'Progress Bar',
};

let dataTabs = [
  {
    text: '1',
    label: 'Home',
    active: true,
    done: true
  },
  {
    text: '2',
    label: 'Payment',
    active: true,
    done: true
  },
  {
    text: '3',
    label: 'Shop',
    active: true,
    done: false
  },
  {
    text: '4',
    label: 'Review',
    active: false,
    done: false
  },
  {
    text: '5',
    label: 'Checkout Mandiri',
    active: false,
    done: false
  }
]
export const Timeline = () => (
  <DefaultView>
    <Text>DEFAULT SLIDER</Text>
    {/* <Space />
    <ProgressBar
      type={'package'}
      packageName={'Package Name'}
      currentValuePackage={'10'}
      totalValuePackage={'100'}
      value={40}
      width={200}
      thickness={6}
    />
    <Space />
    <Space />
    <Text>DISABLED SLIDER</Text>
    <Space />
    <ProgressBar
      type={'package'}
      packageName={'Package Name'}
      currentValuePackage={'10'}
      totalValuePackage={'100'}
      value={90}
      width={200}
      thickness={6}
      disabled={true}
    />
    <Space />
    <Space />
    <Text>SLIDER PACKAGE</Text>
    <Space />
    <ProgressBar
      type={'detail_package'}
      packageName={'Internet'}
      value={90}
      width={200}
      thickness={20}
      color={'red'}
    />
    <Space />
    <ProgressBar
      type={'detail_package'}
      packageName={'Internet'}
      value={60}
      width={200}
      thickness={20}
      color={'blue'}
    />
    <Space />
    <ProgressBar
      type={'detail_package'}
      packageName={'Internet'}
      value={40}
      width={200}
      thickness={20}
      color={'green'}
    />
    <Space />
    <ProgressBar
      type={'detail_package'}
      packageName={'Call'}
      value={40}
      width={200}
      thickness={20}
      color={'yellow'}
    />
    <Space />
    <ProgressBar
      type={'detail_package'}
      packageName={'SMS'}
      value={40}
      width={200}
      thickness={20}
      color={'orange'}
    /> */}
  </DefaultView>
)

export const MissionProgress = () => (
  <DefaultView>
    <Text style={{ fontSize: 18, paddingBottom: 10 }}>Progress Mission With Icon</Text>
    <Flexrow style={{ alignSelf: 'center', paddingLeft: 10 }}>
      { dataTabs.map((item, i) => (
        <ProgressMission
          iconFinal={require('../assets/images/icon_heart.png')}
          done={item.done}
          final={dataTabs.length == i + 1}
          index={i}
        />
      )) }
    </Flexrow>
  </DefaultView>
)
