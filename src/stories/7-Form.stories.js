import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Avatar from '../components/Avatar';
import DefaultView from './DefaultView';
import { View, Text, Alert } from 'react-native';
import InputArea from '../components/InputArea';
import InputAreaSection from '../components/InputAreaSection';
import Dropdown from '../components/Dropdown/Dropdown';
import Space from '../components/Space/Space';
import Switcher from '../components/Switcher';
import Checkbox from '../components/Checkbox/Checkbox';
import RadioButton from '../components/RadioButton/RadioButton';
import Swap from '../components/Swap';
import Counter from '../components/Counter';

export default {
  title: 'Form',
};

let text = '';
let textNumber = '08123';
let text2 = '';
let text3 = 'Type Here';
let text4 = 'Type Here';
let textPassword = '';
let textSearch = '';

let dummy = [{
  id: 1,
  label: 'Option 1',
  value: 1
}, {
  id: 2,
  label: 'Option 2',
  value: 2
}, {
  id: 3,
  label: 'Option 3',
  value: 3
}];

let styles = {
  wrapper: {
    flex: 1,
    padding: 24,
    justifyContent: 'center'
  },
  header: {
    fontSize: 18,
  },
  content: {
    fontSize: 12,
    marginBottom: 10,
    lineHeight: 18,
  },
};

export const TextInput = () => (
  <DefaultView>
    <InputArea
      label={'Form Title'}
      value={text}
      errorMessage={''}
      onChangeText={(value) => this.setState({ text: value })}
      clear={() => this.setState({ text: '' })}
      disabled={false}
      style={{ maxWidth: 500 }}
    />
    <View style={{ height: 20 }} />
    <InputArea
      label={'Form Show Right Icon'}
      value={text}
      errorMessage={''}
      onChangeText={(value) => this.setState({ text: value })}
      clear={() => this.setState({ text: '' })}
      disabled={false}
      rightIcon={require('../assets/images/icon_heart.png')}
      style={{ maxWidth: 500 }}
    />
    <View style={{ height: 20 }} />
    <InputArea
      label={'Form Title'}
      value={textNumber}
      errorMessage={''}
      onChangeText={(value) => this.setState({ textNumber: value })}
      clear={() => this.setState({ textNumber: '' })}
      keyboardType={'number-pad'}
      style={{ maxWidth: 500 }}
    />
    <View style={{ height: 20 }} />
    <Text>Input with digit</Text>
    <View style={{ height: 10 }} />
    <InputArea
      value={textNumber}
      errorMessage={''}
      onChangeText={(value) => this.setState({ textNumber: value })}
      clear={() => console.log('CLEAR')}
      keyboardType={'number-pad'}
      showBorder
      maxLength={14}
      style={{ maxWidth: 500 }}
    />
    <View style={{ height: 20 }} />
    <InputArea
      label={'Form Password'}
      caption={'Input Password'}
      value={textPassword}
      errorMessage={''}
      onChangeText={(value) => this.setState({ textPassword: value })}
      clear={() => this.setState({ textPassword: '' })}
      disabled={false}
      secure
      style={{ maxWidth: 500 }}
    />
    <View style={{ height: 20 }} />
    <InputArea
      label={'Form Title'}
      value={'This is Disabled'}
      errorMessage={''}
      onChangeText={(value) => this.setState({ text: value })}
      clear={() => this.setState({ text: '' })}
      disabled={true}
      style={{ maxWidth: 500 }}
    />
    <View style={{ height: 20 }} />
    <InputArea
      label={'Form 2 No Text'}
      value={text2}
      errorMessage={'Has Error'}
      onChangeText={(value) => this.setState({ text2: value })}
      clear={() => this.setState({ text2: '' })}
      disabled={false}
      style={{ maxWidth: 500 }}
    />
    <View style={{ height: 20 }} />
    <InputArea
      label={'Form 2'}
      value={text3}
      errorMessage={'Has Error'}
      onChangeText={(value) => this.setState({ text3: value })}
      clear={() => this.setState({ text3: '' })}
      disabled={true}
      style={{ maxWidth: 500 }}
    />
    <View style={{ height: 20 }} />
    <InputArea
      caption={'Merchant or Location'}
      value={textSearch}
      errorMessage={''}
      type={'search'}
      onChangeText={(value) => this.setState({ textSearch: value })}
      clear={() => this.setState({ textSearch: '' })}
      keyboardType={'number-pad'}
      onIconClicked={() => Alert.alert('OnPress')}
      style={{ maxWidth: 500 }}
    />
    <View style={{ height: 20 }} />
    <InputArea
      label={'1.1'}
      type={'smartpoin'}
      style={{ maxWidth: 500 }}
    />
    <View style={{ height: 20 }} />
  </DefaultView>
)

export const TextInputSection = () => (
  <DefaultView>
    <InputAreaSection
      label={'Form Title'}
      labelSection={'OVO'}
      caption={'Input Text'}
      value={text}
      errorMessage={''}
      onChangeText={(value) => this.setState({ text: value })}
      clear={() => this.setState({ text: '' })}
      disabled={false}
      rightIcons={[
        require('../assets/images/icon_heart.png')
      ]}
      style={{ maxWidth: 500 }}
    />
    <View style={{ height: 20 }} />
    <InputAreaSection
      label={'Form Title'}
      labelSection={'OVO'}
      caption={'Input Text'}
      value={text2}
      errorMessage={'Error Message'}
      onChangeText={(value) => this.setState({ text2: value })}
      clear={() => this.setState({ text2: '' })}
      disabled={false}
      rightIcons={[
        require('../assets/images/icon_heart.png'),
        require('../assets/images/icon_heart.png')
      ]}
      secureTextEntry={true}
      style={{ maxWidth: 500 }}
    />
    <View style={{ height: 20 }} />
    <InputAreaSection
      label={'Form Title'}
      labelSection={'OVO'}
      caption={'Input Text'}
      value={text3}
      errorMessage={''}
      needVerification
      verified
      onChangeText={(value) => this.setState({ text3: value })}
      clear={() => this.setState({ text3: '' })}
      disabled={false}
      rightIcons={[
        require('../assets/images/icon_heart.png'),
      ]}
      style={{ maxWidth: 500 }}
    />
    <View style={{ height: 20 }} />
    <InputAreaSection
      label={'Form Title'}
      labelSection={'OVO'}
      caption={'Input Text'}
      value={text4}
      errorMessage={''}
      needVerification
      verified={false}
      onChangeText={(value) => this.setState({ text4: value })}
      clear={() => this.setState({ text4: '' })}
      disabled={false}
      rightIcons={[
        require('../assets/images/icon_heart.png'),
        require('../assets/images/icon_heart.png')
      ]}
      style={{ maxWidth: 500 }}
    />
  </DefaultView>
)

export const DefaultDropdown = () => (
  <DefaultView>
    <Text style={styles.header}>Dropdown Default</Text>
    <Dropdown data={dummy} disabled={false} rounded={true} label="Select"/>
    <Space />
    <Space />
    <Text style={styles.header}>Dropdown Multi</Text>
    <Dropdown type="multi" data={dummy} disabled={false} rounded={true} label="Select"/>
  </DefaultView>
)

export const DefaultSwitcher = () => (
  <DefaultView>
    <Switcher
      labelLeft={'On'}
      labelRight={'Off'}
      type={'onoff'}
      style={{ maxWidth: 100 }}
    />
    <View style={{height: 20}} />
    <Switcher
      labelLeft={'ID'}
      labelRight={'EN'}
      disabled={false}
      style={{ maxWidth: 100 }}
    />
    <View style={{height: 20}} />
    <Switcher
      labelLeft={'ID'}
      labelRight={'EN'}
      disabled
      style={{ maxWidth: 100 }}
    />
  </DefaultView>
)

export const DefaultCheckbox = () => (
  <DefaultView>
    <Text style={styles.header}>Checkbox Rounded</Text>
    <Checkbox checked={true} disabled={false} rounded={true} label="This is Checkbox" />
    <Space />
    <Text style={styles.header}>Checkbox Circle</Text>
    <Checkbox checked={true} disabled={false} rounded={false} label="This is Checkbox" />
  </DefaultView>
)

export const DefaultRadioButton = () => (
  <DefaultView>
    <Text style={styles.header}>Radio Button Default</Text>
    <RadioButton checked={true} disabled={false} label="This is Radio Button" />
    <Space />
    <Text style={styles.header}>Radio Button Disabled</Text>
    <RadioButton disabled={true} label="This is Radio Button" />
  </DefaultView>
)

export const DefaultSwap = () => (
  <DefaultView>
    <Swap />
  </DefaultView>
)

export const CounterOrStepper = () => (
  <DefaultView>
    <Text>This is Counter</Text>
    <Space />
    {/* <Text>Current Counter : {currentCount}</Text> */}
    <Space />
    <Counter
      onValueChanged={(value) => {
        console.log('onValueChanged', value)
        this.setState({ currentCount: value })
      }}
    />
  </DefaultView>
)

export const DatePicker = () => (
  <DefaultView>
    <Text>DatePicker</Text>
  </DefaultView>
)