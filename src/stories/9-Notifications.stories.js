import React from 'react';
import { Text, View } from 'react-native';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Avatar from '../components/Avatar';
import DefaultView from './DefaultView';
import Toast from '../components/Toast';
import Tooltip from '../components/Tooltip/Tooltip';
import ToastSticky from '../components/ToastSticky';

export default {
  title: 'Notifications',
};

export const DefaultToast = () => (
  <DefaultView>
    <Text style={{ fontSize: 18, paddingBottom: 10 }}>Without Icon</Text>
    <Toast
      onClose={() => this.pressedIcon()}
      onTap={() => this.selectedTag()}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    />
    <Toast
      success
      style={{ marginTop: 20 }}
      onClose={() => this.pressedIcon()}
      onTap={() => this.selectedTag()}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    />
    <Toast
      danger
      style={{ marginTop: 20 }}
      onClose={() => this.pressedIcon()}
      onTap={() => this.selectedTag()}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    />
  </DefaultView>
)

export const ToastWithIcon = () => (
  <DefaultView>
    <Toast
      onClose={() => this.pressedIcon()}
      onTap={() => this.selectedTag()}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    />
    <Toast
      success
      iconSuccess
      style={{ marginTop: 20 }}
      onClose={() => this.pressedIcon()}
      onTap={() => this.selectedTag()}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    />
    <Toast
      danger
      iconFail
      style={{ marginTop: 20 }}
      onClose={() => this.pressedIcon()}
      onTap={() => this.selectedTag()}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    />
  </DefaultView>
)

export const TooltipDefault = () => (
  <DefaultView>
    <Tooltip
      message={'Welcome to tooltip'}
      visible={true}
      position={'top'}
      alignTip={'left'}
      top={100 - 70}
      left={50}
      close={() => this.setState({ tooltip_default: false })}
    />

    <Tooltip
      message={'Welcome to tooltip'}
      visible={true}
      position={'top'}
      alignTip={'center'}
      top={150 - 70}
      left={50}
      close={() => this.setState({ tooltip_default: false })}
    />

    <Tooltip
      message={'Welcome to tooltip'}
      visible={true}
      position={'top'}
      alignTip={'right'}
      top={200 - 70}
      left={50}
      close={() => this.setState({ tooltip_default: false })}
    />

    <Tooltip
      message={'Welcome to tooltip'}
      visible={true}
      position={'bottom'}
      alignTip={'left'}
      top={250 - 70}
      left={50}
      close={() => this.setState({ tooltip_default: false })}
    />

    <Tooltip
      message={'Welcome to tooltip'}
      visible={true}
      position={'bottom'}
      alignTip={'center'}
      top={300 - 70}
      left={50}
      close={() => this.setState({ tooltip_default: false })}
    />

    <Tooltip
      message={'Welcome to tooltip'}
      visible={true}
      position={'bottom'}
      alignTip={'right'}
      top={350 - 70}
      left={50}
      close={() => this.setState({ tooltip_default: false })}
    />
  </DefaultView>
)

export const TooltipDark = () => (
  <DefaultView>
    <Tooltip
      darkmode
      message={'Welcome to tooltip'}
      visible={true}
      position={'top'}
      alignTip={'left'}
      top={100 - 70}
      left={50}
      close={() => this.setState({ tooltip_default: false })}
    />

    <Tooltip
      darkmode
      message={'Welcome to tooltip'}
      visible={true}
      position={'top'}
      alignTip={'center'}
      top={150 - 70}
      left={50}
      close={() => this.setState({ tooltip_default: false })}
    />

    <Tooltip
      darkmode
      message={'Welcome to tooltip'}
      visible={true}
      position={'top'}
      alignTip={'right'}
      top={200 - 70}
      left={50}
      close={() => this.setState({ tooltip_default: false })}
    />

    <Tooltip
      darkmode
      message={'Welcome to tooltip'}
      visible={true}
      position={'bottom'}
      alignTip={'left'}
      top={250 - 70}
      left={50}
      close={() => this.setState({ tooltip_default: false })}
    />

    <Tooltip
      darkmode
      message={'Welcome to tooltip'}
      visible={true}
      position={'bottom'}
      alignTip={'center'}
      top={300 - 70}
      left={50}
      close={() => this.setState({ tooltip_default: false })}
    />

    <Tooltip
      darkmode
      message={'Welcome to tooltip'}
      visible={true}
      position={'bottom'}
      alignTip={'right'}
      top={350 - 70}
      left={50}
      close={() => this.setState({ tooltip_default: false })}
    />
  </DefaultView>
)

export const StickyOnTop = () => (
  <DefaultView>
    <Text style={{ fontSize: 18, paddingBottom: 10 }}>With Icon</Text>
    <ToastSticky
      danger
      iconFail
      style={{ marginTop: 20 }}
      onClose={() => this.pressedIcon()}
      onTap={() => this.selectedTag()}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    />
    <ToastSticky
      success
      iconInfo
      style={{ marginTop: 20 }}
      onClose={() => this.pressedIcon()}
      onTap={() => this.selectedTag()}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    />
    <Text style={{ fontSize: 18, paddingBottom: 10, marginTop: 40 }}>
      Without Icon
    </Text>
    <ToastSticky
      danger
      style={{ marginTop: 20 }}
      onClose={() => this.pressedIcon()}
      onTap={() => this.selectedTag()}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    />
    <ToastSticky
      success
      style={{ marginTop: 20 }}
      onClose={() => this.pressedIcon()}
      onTap={() => this.selectedTag()}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    />
  </DefaultView>
)
