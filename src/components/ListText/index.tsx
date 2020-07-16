import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './style';
import {
  WHITE,
  BLACK,
} from '../../utils/BaseColors';
import {
  LIST_BOTTOM_COLOR,
  LIST_SUBTITLE_COLOR,
  LIST_INACTIVE_BACKGROUND,
} from '../../utils/ComponentColors';
import Txt from '../Text/Txt';

type Props = {
  style?: {};
  text?: string;
  onTap?: () => void;
  subTitle: string;
  title: string;
  date: string;
  inactive: boolean;
};
export default function ListText(props: Props) {
  const {
    style,
    text,
    subTitle,
    title,
    date,
    onTap,
    inactive,
    ...otherProps
  } = props;
  return (
    <View style={[styles.wrapperTag]}>
      <TouchableOpacity
        onPress={onTap}
        {...otherProps}
        style={[
          style,
          {
            width: '100%',
            borderBottomColor: LIST_BOTTOM_COLOR,
            borderBottomWidth: 1,
            backgroundColor: inactive ? LIST_INACTIVE_BACKGROUND : WHITE,
            flexDirection: 'column',
            alignItems: 'flex-start',
            paddingVertical: 19,
            paddingHorizontal: 16,
          },
        ]}
      >
        {subTitle && (
          <View>
            <Txt
              light
              style={[
                {
                  color: inactive ? LIST_SUBTITLE_COLOR : BLACK,
                  fontSize: 10,
                  marginBottom: 14,
                },
              ]}
            >
              {subTitle}
            </Txt>
          </View>
        )}
        {title && (
          <View>
            <Txt
              style={[
                {
                  color: inactive ? LIST_SUBTITLE_COLOR : BLACK,
                  fontSize: 14,
                  marginBottom: 8,
                },
              ]}
            >
              {title}
            </Txt>
          </View>
        )}
        {text && (
          <View>
            <Txt
              light
              style={[
                {
                  color: inactive ? LIST_SUBTITLE_COLOR : BLACK,
                  fontSize: 12,
                  marginBottom: 8,
                  lineHeight: 16,
                },
              ]}
            >
              {text}
            </Txt>
          </View>
        )}
        {date && (
          <View>
            <Txt
              light
              style={[
                {
                  color: LIST_SUBTITLE_COLOR,
                  fontSize: 10,
                  lineHeight: 16,
                },
              ]}
            >
              {date}
            </Txt>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}
