import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './style';
import Icons from '../../components/Icons';
import BaseStyle from '../../utils/BaseStyles';
import { BLACK } from '../../utils/BaseColors';
import { ICON_ALERT } from '../../utils/ComponentColors';
import Txt from '../Text/Txt';

type Props = {
  style?: {};
  text?: string;
  chosen?: boolean;
  textStyle?: {};
  onClose?: () => void;
  onTap?: () => void;
  iconFail?: boolean;
  iconInfo?: boolean;
  success?: boolean;
  danger?: boolean;
};
export default function ToastSticky(props: Props) {
  const {
    style,
    text,
    textStyle,
    success,
    danger,
    iconFail,
    iconInfo,
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
          success ? styles.successToast : styles.dangerToast,
        ]}
        {...otherProps}
      >
        <TouchableOpacity
          style={{ width: '90%', flexDirection: 'row' }}
          onPress={onTap}
        >
          {iconFail ? (
            <Icons name={'info'} color={ICON_ALERT} size={26} />
          ) : iconInfo ? (
            <Icons
              name={'info'}
              color={BLACK}
              size={26}
            />
          ) : null}
          <Txt
            light
            style={[
              textStyle,
              iconFail || iconInfo ? styles.iconPadding : null,
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
