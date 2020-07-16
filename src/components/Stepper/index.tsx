import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import styles from './style';
import BaseStyle from '../../utils/BaseStyles';
import { BLACK, WHITE, RED, GRAY } from '../../utils/BaseColors';
import Icons from '../../components/Icons';
import Txt from '../Text/Txt';
import Divider from '../Divider/Divider';

type Props = {
  style?: {};
  text?: string;
  label?: string;
  labelStyle?: {};
  onSelect?: () => void;
  done?: boolean;
  active?: boolean;
  final?: boolean;
  icon?: string;
  iconActive?: string;
};
export default function Stepper(props: Props) {
  const {
    style,
    text,
    label,
    labelStyle,
    onSelect,
    done,
    active,
    final,
    icon,
    iconActive,
    ...otherProps
  } = props;

  return (
    <View style={[BaseStyle.row, BaseStyle.wrapper_center]}>
      <View style={[BaseStyle.wrapper_center, { paddingRight: 24 }, style]}>
        {!final && (
          <View
            style={[
              styles.stepper_line,
              { backgroundColor: done ? BLACK : GRAY },
            ]}
          />
        )}
        <View
          style={[
            styles.circle,
            { backgroundColor: active ? (done ? BLACK : RED) : GRAY },
          ]}
        >
          {done && <Icons name={'checkmark'} color={WHITE} size={12} />}
          {!done && icon && active && (
            <Image source={icon} resizeMode={'contain'} style={styles.icon} />
          )}
          {!done && iconActive && !active && (
            <Image
              source={iconActive}
              resizeMode={'contain'}
              style={styles.icon}
            />
          )}
          {!done && text && (
            <Txt style={{ color: WHITE, fontSize: 12, paddingLeft: 1 }}>
              {text}
            </Txt>
          )}
        </View>
        {label ? (
          <Txt
            numberOfLines={1}
            ellipsize={'tail'}
            style={[
              {
                textAlign: 'center',
                maxWidth: 60,
                minWidth: 60,
                fontSize: 10,
                padding: 5,
                color: active ? (done ? BLACK : RED) : GRAY,
              },
              labelStyle,
            ]}
          >
            {label}
          </Txt>
        ) : (
          <Txt
            ellipsize={'tail'}
            numberOfLines={1}
            style={[
              {
                maxWidth: 60,
                minWidth: 60,
                fontSize: 10,
                padding: 5,
                color: active ? (done ? BLACK : RED) : GRAY,
              },
              labelStyle,
            ]}
          >
            {' '}
          </Txt>
        )}
      </View>
    </View>
  );
}
