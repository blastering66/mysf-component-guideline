import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './style';
import Icons from '../../components/Icons';
import BaseStyle from '../../utils/BaseStyles';
import { BLACK } from '../../utils/BaseColors';
import { ICON_SUCCESS, ICON_ALERT } from '../../utils/ComponentColors';
import Txt from '../Text/Txt';

type Props = {
  style?: {};
  text?: string;
  chosen?: boolean;
  textStyle?: {};
  onClose?: () => void;
  onTap?: () => void;
  iconFail?: boolean;
  iconSuccess?: boolean;
  success?: boolean;
  danger?: boolean;
};
export default function Toast(props: Props) {
  const {
    style,
    text,
    textStyle,
    success,
    danger,
    iconFail,
    iconSuccess,
    onClose,
    onTap,
    ...otherProps
  } = props;
  return (
    <View style={[styles.wrapperTag]}>
      <View
        style={[
          style,
          BaseStyle.shadow,
          success
            ? styles.successToast
            : danger
            ? styles.dangerToast
            : styles.standarToast,
        ]}
        {...otherProps}
      >
        <TouchableOpacity
          style={{ width: '90%', flexDirection: 'row' }}
          onPress={onTap}
        >
          {iconFail ? (
            <Icons name={'info'} color={'#fa6400'} size={26} />
          ) : iconSuccess ? (
            <Icons
              name={'checkmark'}
              color={ICON_SUCCESS}
              size={26}
            />
          ) : null}
          <Txt
            light
            style={[
              textStyle,
              iconFail || iconSuccess ? styles.iconPadding : null,
              { fontSize: 12 },
            ]}
          >
            {text}
          </Txt>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onClose}
          style={{
            width: '10%',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          <Icons name={'close'} color={BLACK} size={14} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
