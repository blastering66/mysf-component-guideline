import React from 'react';
import { Text, View } from 'react-native';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Avatar from '../components/Avatar';
import Tag from '../components/Tag';
import Divider from '../components/Divider/Divider'
import FlexRow from '../components/Flexrow'
import Space from '../components/Space/Space'

import DefaultView from './DefaultView';

const styles = {
  wrapper: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
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

export default {
  title: 'Misc',
};

export const DefaultAvatar = () => (
  <DefaultView>
    <FlexRow>
    <Avatar />
    <Space />
    <Avatar type={'male'} />
    <Space />
    <Avatar type={'female'} />
    <Space />
    <Avatar img={'https://i.picsum.photos/id/152/64/64.jpg?hmac=yln7fL6bBg-ZPUJTLA9-IiHs3EkZ5pCVvhZL6qXXyX8'} type={'female'} />
  </FlexRow>
  </DefaultView>
)

export const TagAndBridge = () => (
  <DefaultView>
    <Text style={{ fontSize: 18, paddingBottom: 10 }}>Fill</Text>
    <View style={styles.overFlow}>
      <Tag
        text='Option'
        chosen
        style={{ marginRight: 12 }}
        onSelect={() => this.selectedTag()}
      />
      <Tag
        text='Option'
        chosen
        withIcon
        style={{ marginRight: 12 }}
        onSelect={() => this.selectedTag()}
        onIconPress={() => this.pressedIcon()}
      />
      <Tag text='2' chosen onSelect={() => this.selectedTag()} />
    </View>
    <Text style={{ fontSize: 18, paddingBottom: 10 }}>Outline</Text>
    <View style={styles.overFlow}>
      <Tag
        text='Option'
        style={{ marginRight: 12 }}
        onSelect={() => this.selectedTag()}
      />
      <Tag
        text='Option'
        withIcon
        style={{ marginRight: 12 }}
        onSelect={() => this.selectedTag()}
        onIconPress={() => this.pressedIcon()}
      />
      <Tag text='2' onSelect={() => this.selectedTag()} />
    </View>
  </DefaultView>
)

export const DefaultDivider = () => (
  <DefaultView>
    <Text style={{ paddingBottom: 20 }}>Divider as long as View span</Text>
    <Divider thick={1} vertical={false} style={{ maxWidth: 500 }} />
  </DefaultView>
)