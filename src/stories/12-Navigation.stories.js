import React from 'react';
import { Text, View } from 'react-native';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Avatar from '../components/Avatar';
import DefaultView from './DefaultView';
import ActionBar from '../components/ActionBar/ActionBar';
import Space from '../components/Space/Space';
import Tabs from '../components/Tabs';
import TabBarIcon from '../components/TabBarIcon';
import Flexrow from '../components/Flexrow';
import Slider from '../components/Slider/Slider';
import Pagination from '../components/Misc/Pagination';
import IndicatorDot from '../components/Misc/IndicatorDot';
import Stepper from '../components/Stepper';

export default {
  title: 'Navigation',
};

let dataTabs = [
  {
    name: 'Option 1',
    icon: '',
    active: true,
    value: 2,
  },
  {
    name: 'Option 2',
    icon: '',
    active: false,
    value: null,
  },
];
let dataTabs2 = [
  {
    name: 'Option 1',
    icon: '',
    active: false,
    value: 2,
  },
  {
    name: 'Option 2',
    icon: '',
    active: true,
    value: null,
  },
  {
    name: 'Option 3',
    icon: '',
    active: false,
    value: null,
  },
];
let dataTabs3 = [
  {
    name: 'Option 1',
    icon: '',
    active: false,
    value: 2,
  },
  {
    name: 'Option 2',
    icon: '',
    active: true,
    value: null,
  },
  {
    name: 'Option 3',
    icon: '',
    active: false,
    value: null,
  },
  {
    name: 'Option 4',
    icon: '',
    active: false,
    value: null,
  },
];

let navTabs = [
  {
    name: 'Home',
    icon: require('../assets/images/icon_heart.png'),
    active: true,
  },
  {
    name: 'Shop',
    icon: require('../assets/images/icon_heart.png'),
    active: false,
  },
  {
    name: 'Smartpoin',
    icon: require('../assets/images/icon_heart.png'),
    active: false,
  },
  {
    name: 'Support',
    icon: require('../assets/images/icon_heart.png'),
    active: false,
  },
];

let indicator = [
  { value: 1, active: true },
  { value: 2, active: false },
  { value: 3, active: false },
  { value: 4, active: false },
];

let indicator_border = [
  { value: 1, active: false },
  { value: 2, active: true },
  { value: 3, active: false },
  { value: 4, active: false },
];

let dataDefault = [
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
    done: false
  },
  {
    text: '3',
    label: 'Shop',
    active: false,
    done: false
  }
];

let stepperTabs = [
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
];

export const TopBarAndActionBar = () => (
  <DefaultView>
    <ActionBar type={'back'} title={'Screen Title'} style={{ maxWidth: 500 }} />
    <Text style={{ padding: 10 }}>Action Bar With Back Navigation</Text>
    <Space />
    <ActionBar
      type={'close'}
      title={'Screen Title'}
      style={{ maxWidth: 500 }}
    />
    <Text style={{ padding: 10 }}>Action Bar With Close Navigation</Text>
    <Space />
    <ActionBar
      type={'back'}
      title={'Screen Title'}
      iconRight={require('../assets/images/icon_heart.png')}
      iconRightSecond={require('../assets/images/icon_heart.png')}
      style={{ maxWidth: 500 }}
    />
    <Space />
    <ActionBar
      type={'close'}
      title={'Screen Title'}
      iconRight={require('../assets/images/icon_heart.png')}
      iconRightSecond={require('../assets/images/icon_heart.png')}
      counterFirst={1}
      counterSecond={10}
      style={{ maxWidth: 500 }}
    />
    <Text style={{ padding: 10 }}>
      Action Bar With Close Navigation With Right Icons And Counter
    </Text>
    <Space />
    <ActionBar
      type={'home'}
      title={'Fullname'}
      homeTag={'POSTPAID'}
      homeLabel={'0888123456'}
      avatar={
        'https://i.picsum.photos/id/190/64/64.jpg?hmac=HycatZhDHmsqPGe0ZlDTiul4jVu7Ya6sqdoFNvIQqDI'
      }
      style={{ maxWidth: 500 }}
    />
    <Text style={{ padding: 10 }}>Home Action Bar</Text>
    <Space />
    <ActionBar
      type={'home'}
      title={'Fullname'}
      homeTag={'PREPAID'}
      homeLabel={'0888123456'}
      iconRight={require('../assets/images/icon_heart.png')}
      iconRightSecond={require('../assets/images/icon_heart.png')}
      counterFirst={9}
      counterSecond={99}
      style={{ maxWidth: 500 }}
    />
    <Text style={{ padding: 10 }}>Home Action Bar with Right Icons</Text>
    <Space />
  </DefaultView>
);

const styles = {
  wrapper: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
  },
  overFlow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    marginBottom: 18,
  },
  content: {
    fontSize: 12,
    marginBottom: 10,
    lineHeight: 18,
  },
};

export const DefaultTabs = () => (
  <DefaultView>
    <Text style={{ fontSize: 18, paddingBottom: 10 }}>Tabs Rounded</Text>
    <View style={styles.overFlow}>
      {dataTabs.map((tab, i) => {
        return (
          <Tabs
            rounded
            text={tab.name}
            active={tab.active}
            onSelect={() => this.selectedTab()}
          />
        );
      })}
    </View>
    <Text style={{ fontSize: 18, paddingBottom: 10 }}>if have 2 options</Text>
    <Flexrow style={{ maxWidth: 500 }}>
      {dataTabs.map((tab, i) => {
        return (
          <Tabs
            text={tab.name}
            active={tab.active}
            value={tab.value}
            onSelect={() => this.selectedTab()}
          />
        );
      })}
    </Flexrow>
    <Text style={{ fontSize: 18, paddingBottom: 10, paddingTop: 20 }}>
      3 options
    </Text>
    <Flexrow style={{ maxWidth: 500 }}>
      {dataTabs2.map((tab, i) => {
        return (
          <Tabs
            text={tab.name}
            active={tab.active}
            value={tab.value}
            onSelect={() => this.selectedTab()}
          />
        );
      })}
    </Flexrow>
    <Text style={{ fontSize: 18, paddingBottom: 10, paddingTop: 20 }}>
      more than 3 option
    </Text>
    <Flexrow style={{ maxWidth: 500 }}>
      {dataTabs3.map((tab, i) => {
        return (
          <Tabs
            text={tab.name}
            active={tab.active}
            value={tab.value}
            onSelect={() => this.selectedTab()}
          />
        );
      })}
    </Flexrow>
  </DefaultView>
);

export const NavigationTab = () => (
  <DefaultView>
    <Text style={{ fontSize: 18, paddingBottom: 10 }}>Tabs Rounded</Text>
    <Flexrow>
      {navTabs.map((item, i) => (
        <TabBarIcon
          rounded
          text={item.name}
          active={item.active}
          icon={item.icon}
          onSelect={() => this.selectedTab(i)}
        />
      ))}
    </Flexrow>
  </DefaultView>
);

export const DefaultSlider = () => (
  <DefaultView>
    <Text>Default Slider</Text>
    <Space />
    <Slider
      minimumValue={0}
      maximumValue={10}
      step={1}
      value={5}
      style={{ maxWidth: 500 }}
    />
    <Space />
    <Text>With Label</Text>
    <Space />
    <Slider
      minimumValue={0}
      maximumValue={10}
      step={1}
      value={5}
      label={'This is Label'}
      style={{ maxWidth: 500 }}
    />
    <Space />

    <Text>Label + Value</Text>
    <Space />
    <Slider
      minimumValue={0}
      maximumValue={10}
      step={1}
      value={5}
      label={'This is Label'}
      showValue={true}
      onValueChange={(value) => console.log('VALUE', value)}
      style={{ maxWidth: 500 }}
    />
    <Space />

    <Text>Ranged Value</Text>
    <Space />
    <Slider
      minimumValue={0}
      maximumValue={10}
      step={1}
      value={5}
      label={'This is Label'}
      showValue={true}
      onValueChange={(value) => console.log('VALUE', value)}
      style={{ maxWidth: 500 }}
    />
    <Space />

    <Text>Thicker Slider</Text>
    <Space />
    <Slider
      minimumValue={0}
      maximumValue={10}
      step={1}
      value={5}
      label={'This is Label'}
      showValue={true}
      onValueChange={(value) => console.log('VALUE', value)}
      style={{ maxWidth: 500 }}
    />
    <Space />
  </DefaultView>
);

export const PaginationNumber = () => (
  <DefaultView>
    <Text style={{ fontSize: 18, paddingBottom: 10 }}>Pagination</Text>
    <Space />
    <Pagination
      length={4}
      index={2}
      onPrevPress={() => console.log('PREV PRESS')}
      onNextPress={() => console.log('NET PRESS')}
      onChangeIndex={(index) => console.log('CHANGE INDEX', index)}
      style={{ maxWidth: 500 }}
    />
  </DefaultView>
);

export const DefaultIndicatorDot = () => (
  <DefaultView>
    <Text style={{ fontSize: 18, paddingBottom: 10 }}>
      Default Indicator
    </Text>
    <Space />
    <Flexrow>
      {indicator.map((value, i) => (
        <IndicatorDot active={value.active} key={i} />
      ))}
    </Flexrow>
    <Space />
    <Space />
    <Text style={{ fontSize: 18, paddingBottom: 10 }}>
      Border Indicator
    </Text>
    <Space />
    <Flexrow>
      {indicator_border.map((value, i) => (
        <IndicatorDot showBorder={true} active={value.active} key={i} />
      ))}
    </Flexrow>
    <Space />
  </DefaultView>
);

export const DefaultStepper = () => (
  <DefaultView>
    <Text style={{ fontSize: 18, paddingBottom: 10 }}>Default Stepper</Text>
    <Flexrow style={{ alignSelf: 'center' }}>
      { dataDefault.map((item, i) => (
        <Stepper
          text={item.text}
          labelStyle={{  }}
          done={item.done}
          active={item.active}
          final={dataDefault.length == i + 1}
        />
      )) }
    </Flexrow>

    <Text style={{ fontSize: 18, paddingBottom: 10 }}>Stepper With Label</Text>
    <Flexrow style={{ alignSelf: 'center', paddingLeft: 10 }}>
      { stepperTabs.map((item, i) => (
        <Stepper
          text={item.text}
          label={item.label}
          labelStyle={{  }}
          done={item.done}
          active={item.active}
          final={stepperTabs.length == i + 1}
        />
      )) }
    </Flexrow>

    <Text style={{ fontSize: 18, paddingBottom: 10 }}>Stepper With Icon</Text>
    <Flexrow style={{ alignSelf: 'center', paddingLeft: 10 }}>
      { stepperTabs.map((item, i) => (
        <Stepper
          label={item.label}
          labelStyle={{  }}
          iconActive={require('../assets/images/icon_heart.png')}
          icon={require('../assets/images/icon_heart_white.png')}
          done={item.done}
          active={item.active}
          final={stepperTabs.length == i + 1}
        />
      )) }
    </Flexrow>
  </DefaultView>
);
