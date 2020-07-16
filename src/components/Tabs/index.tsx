import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './style';
import BaseStyle from '../../utils/BaseStyles';
import { WHITE } from '../../utils/BaseColors';
import { PROGRESSBAR_RED } from '../../utils/ComponentColors';
import Txt from '../Text/Txt';

type Props = {
  style?: {};
  text?: string;
  textStyle?: {};
  onSelect?: () => void;
  active?: boolean;
  rounded?: boolean;
  value?: number;
};
export default function Tabs(props: Props) {
  const {
    style,
    text,
    textStyle,
    onSelect,
    active,
    rounded,
    value,
    ...otherProps
  } = props;

  return (
    <>
      {rounded ? (
        <TouchableOpacity
          style={[
            BaseStyle.roundedTabs,
            active ? styles.activeTab : styles.inActiveTab,
            style,
          ]}
          {...otherProps}
          onPress={onSelect}
        >
          <Txt
            style={[
              active ? styles.activeTabsText : styles.inActiveTabsText,
              { fontSize: 12 },
              textStyle,
            ]}
          >
            {text}
          </Txt>
        </TouchableOpacity>
      ) : (
        <View style={{ flex: 1, height: 40 }}>
          <TouchableOpacity
            style={[
              BaseStyle.Tabs,
              active ? styles.activeTabStd : styles.inActiveTab,
              {
                flexDirection: 'row',
                justifyContent: 'center',
              },
              style,
            ]}
            {...otherProps}
            onPress={onSelect}
          >
            <Txt
              style={[
                active ? styles.activeTabsText : styles.inActiveTabsText,
                { fontSize: 12 },
                textStyle,
              ]}
            >
              {text}
            </Txt>

            {value && (
              <View
                style={{
                  paddingHorizontal: 6,
                  paddingBottom: 4,
                  paddingTop: 2,
                  borderRadius: 100,
                  backgroundColor: PROGRESSBAR_RED,
                  marginLeft: 5,
                }}
              >
                <Txt
                  light
                  style={[
                    {
                      fontSize: 10,
                      color: WHITE,
                    },
                    textStyle,
                  ]}
                >
                  {value && value}
                </Txt>
              </View>
            )}
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
