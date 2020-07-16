import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import styles from './style';
import BaseStyle from '../../utils/BaseStyles';
import Txt from '../Text/Txt';

type Props = {
  style?: {};
  text?: string;
  textStyle?: {};
  onSelect?: () => void;
  active?: boolean;
  icon?: string;
};
export default function TabBarIcon(props: Props) {
  const {
    style,
    text,
    textStyle,
    onSelect,
    active,
    icon,
    ...otherProps
  } = props;

  return (
    <View style={{ alignItems: 'center' }}>
      <TouchableOpacity
        style={[
          BaseStyle.TabNav,
          active ? styles.activeTabStd : styles.inActiveTab,
          {
            justifyContent: 'center',
          },
          style
        ]}
        {...otherProps}
        onPress={onSelect}
      >
        <View style={{ padding: 10, alignItems: 'center'}}>
          <Image source={icon} style={{ width: 26, height: 26 }} />
          <Txt
            style={[
              active ? styles.activeTabsText : styles.inActiveTabsText,
              { fontSize: 12, paddingVertical: 0 },
              textStyle,
            ]}
          >
            {text}
          </Txt>
        </View>
        

      </TouchableOpacity>
    </View>
  );
}
