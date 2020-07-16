import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import styles from './style';
import Divider from '../Divider/Divider';
import { RED, GRAY, GREEN_VERIFIED, WHITE } from '../../utils/BaseColors';
import {
  TEXTINPUT_LABEL_GRAY,
  TEXTINPUT_BOTTOM_BORDER,
  TEXTINPUT_DISABLE_GRAY,
  TEXTINPUT_CLOSE_BUTTON,
} from '../../utils/ComponentColors';
import Txt from '../Text/Txt';
import BaseStyles from '../../utils/BaseStyles';
import Icons from '../Icons';

type Props = {
  style?: {};
  inputStyle?: {};
  label?: string;
  labelSection?: string;
  caption?: string;
  errorMessage?: string;
  textStyle?: {};
  disabled?: boolean;
  clear?: () => void;
  onChangeText?: (text: string) => void;
  rightIcons?: Array<ImageSourcePropType>;
  onIconClicked?: () => void;
  needVerification?: boolean;
  verified?: boolean;
};

export default function InputAreaSection(props: Props) {
  const {
    style,
    inputStyle,
    label,
    labelSection,
    caption,
    errorMessage,
    textStyle,
    disabled,
    clear,
    onChangeText,
    rightIcons,
    needVerification,
    verified,
    ...textInputProps
  } = props;

  let [label_, setLabel] = useState(label);
  let [caption_, setCaption] = useState(caption);
  let [isFocused, setFocus] = useState(false);
  let [currentText, setCurrentText] = useState('');

  let opacityStyle = null;
  if (disabled) {
    opacityStyle = {
      opacity: 0.3,
    };
  }

  let rightIconsView = null;
  if (rightIcons) {
    rightIconsView = (
      <View style={[BaseStyles.row]}>
        {rightIcons.map((v, i) => (
          <Image source={rightIcons[i]} style={styles.icon_right} />
        ))}
      </View>
    );
  }

  return (
    <View style={[{ paddingHorizontal: 0 }, opacityStyle]}>
      <View
        style={[
          errorMessage
            ? styles.container_border_error
            : styles.container_border,
          style,
        ]}
      >
        <View style={[{ padding: 10 }]}>
          <View style={[BaseStyles.row]}>
            <View
              style={[
                BaseStyles.fill,
                BaseStyles.row,
                { alignItems: 'center' },
              ]}
            >
              <Txt light style={{ paddingRight: 10 }}>
                {labelSection}
              </Txt>
              {verified ? (
                <View
                  style={[
                    BaseStyles.wrapper_center,
                    styles.circle,
                    { backgroundColor: GREEN_VERIFIED },
                  ]}
                >
                  <Icons name={'checkmark'} color={WHITE} size={10} />
                </View>
              ) : needVerification ? (
                <View
                  style={[
                    BaseStyles.wrapper_center,
                    styles.circle,
                    { backgroundColor: RED },
                  ]}
                >
                  <Icons name={'close'} color={WHITE} size={11} />
                </View>
              ) : null}
            </View>

            {rightIconsView}
          </View>
          {caption !== '' || isFocused ? (
            <View style={[styles.label, {}]}>
              <Txt
                light
                style={[
                  styles.textLabel,
                  textStyle,
                  {
                    color: TEXTINPUT_LABEL_GRAY,
                  },
                ]}
              >
                {label}
              </Txt>
            </View>
          ) : null}
          <TextInput
            style={[
              isFocused ? styles.input : styles.input_inactive,
              styles.textCaption,
              inputStyle,
            ]}
            placeholder={caption !== '' || isFocused ? caption : label}
            underlineColorAndroid={'transparent'}
            placeholderTextColor={GRAY}
            editable={!disabled}
            selectionColor={RED}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChangeText={(value) => {
              setCurrentText(value);
              if (onChangeText) onChangeText(value);
            }}
            {...textInputProps}
          />
          {currentText !== '' && isFocused ? (
            needVerification ? (
              <TouchableOpacity
              onPress={clear}
              style={{ position: 'absolute', bottom: 20, right: 10 }}
            >
              <Txt style={styles.textEdit}>Edit</Txt>
            </TouchableOpacity>
            ) : (
              <TouchableOpacity
              onPress={clear}
              style={{ position: 'absolute', bottom: 15, right: 10 }}
            >
              <Icons name={'close'} color={TEXTINPUT_CLOSE_BUTTON} size={24} />
            </TouchableOpacity>
            )
          ) : null }
        </View>
      </View>
      {errorMessage !== '' ? (
        <View style={[{ paddingLeft: 10, paddingTop: 5 }]}>
          <Txt style={[styles.textError, textStyle]}>{errorMessage}</Txt>
        </View>
      ) : null}
    </View>
  );
}
