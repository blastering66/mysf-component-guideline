import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import Icons from '../../components/Icons';

type Props = {
  style?: {};
  text?: string;
  chosen?: boolean;
  textStyle?: {};
  onSelect?: () => void;
  onIconPress?: () => void;
  withIcon: boolean;
};
export default function Tag(props: Props) {
  const {
    style,
    text,
    chosen,
    textStyle,
    withIcon,
    onSelect,
    onIconPress,
    ...otherProps
  } = props;
  return (
    <View style={[styles.wrapperTag]}>
      <TouchableOpacity
        onPress={onSelect}
        style={[style, chosen ? styles.filledTag : styles.unFilledTag]}
        {...otherProps}
      >
        <Text
          style={[
            textStyle,
            chosen ? styles.filledTagText : styles.unFilledTagText,
          ]}
        >
          {text}
        </Text>
        {withIcon && chosen && (
          <TouchableOpacity style={{ }} onPress={onIconPress}>
            <View style={{ paddingTop: 2, paddingLeft: 10 }}>
              <Icons name={'close'} color={'white'} size={12} />
            </View>
          </TouchableOpacity>
        )}
        {withIcon && !chosen && (
          <TouchableOpacity style={{ }} onPress={onIconPress}>
            <View style={{ paddingTop: 2, paddingLeft: 10 }}>
              <Icons name={'close'} color={'black'} size={12} />
            </View>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
}
