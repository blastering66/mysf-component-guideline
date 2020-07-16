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
import Txt from '../Text/Txt';
import { RED, GRAY, BLUE } from '../../utils/BaseColors';
import {
  TEXTINPUT_LABEL_GRAY,
  TEXTINPUT_BOTTOM_BORDER,
  TEXTINPUT_DISABLE_GRAY,
  TEXTINPUT_CLOSE_BUTTON,
} from '../../utils/ComponentColors';
import BaseStyles from '../../utils/BaseStyles';
import { FONTSIZE_BIG } from '../../utils/Dimens';
import Icons from '../Icons';

type Props = {
  style?: {};
  inputStyle?: {};
  label?: string;
  caption?: string;
  errorMessage?: string;
  textStyle?: {};
  showBorder?: boolean;
  disabled?: boolean;
  clear?: () => void;
  onChangeText?: (text: string) => void;
  rightIcon?: ImageSourcePropType;
  onIconClicked?: () => void;
  secure?: boolean;
  maxLength?: number;
  type?: 'default' | 'search' | 'smartpoin';
};

InputArea.defaultProps = {
  type: 'default',
};
export default function InputArea(props: Props) {
  const {
    type,
    style,
    inputStyle,
    label,
    caption,
    errorMessage,
    textStyle,
    showBorder,
    disabled,
    clear,
    onChangeText,
    rightIcon,
    onIconClicked,
    maxLength,
    ...textInputProps
  } = props;

  let [label_, setLabel] = useState(label);
  let [caption_, setCaption] = useState(caption);
  let [isFocused, setFocus] = useState(false);
  let [currentText, setCurrentText] = useState('');
  let [isSecure, setVisibility] = useState(props.secure);

  let errorStyle = null;
  if (errorMessage) {
    errorStyle = {
      borderColor: RED,
      backgroundColor: '#fff0f0',
    };
  }

  let opacityStyle = null;
  if (disabled) {
    opacityStyle = {
      opacity: 0.3,
    };
  }

  if (type === 'search') {
    return (
      <View style={[{ paddingHorizontal: 0 }, opacityStyle]}>
        <View style={[styles.container_border, style]}>
          <View style={[{ padding: 10 }, errorStyle]}>
            <TextInput
              style={[styles.input, styles.textCaption, inputStyle]}
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
              maxLength={maxLength}
              {...textInputProps}
            />
            {currentText !== '' && isFocused && (
              <TouchableOpacity
                onPress={clear}
                style={{ position: 'absolute', top: 10, right: 50 }}
              >
                <Icons
                  name={'close'}
                  size={24}
                  color={TEXTINPUT_CLOSE_BUTTON}
                />
              </TouchableOpacity>
            )}

            <TouchableOpacity
              onPress={onIconClicked}
              style={{ position: 'absolute', top: 10, right: 10 }}
            >
              <Icons
                name={'search'}
                size={24}
                color={GRAY}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  } else if (type === 'smartpoin') {
    return (
      <View
        style={[
          BaseStyles.row,
          BaseStyles.wrapper_center,
          styles.container_border,
          { paddingVertical: 0 },
        ]}
      >
        <View
          style={[
            BaseStyles.fill,
            { alignItems: 'flex-start', justifyContent: 'center', padding: 10 },
          ]}
        >
          <Txt style={[{ fontSize: FONTSIZE_BIG, color: GRAY }]}>{label}</Txt>
        </View>
        <Divider vertical style={{ marginVertical: 10 }} />
        <TouchableOpacity style={[BaseStyles.fill]}>
          <View
            style={[BaseStyles.row, BaseStyles.wrapper_center, { padding: 5 }]}
          >
            <Icons
              name={'smartcoin'}
              size={24}
              color={BLUE}
            />
            <Txt light style={[{ paddingHorizontal: 10 }]}>
              Smartpoin
            </Txt>
            <Icons
              name={'chevron-left'}
              size={24}
              color={GRAY}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  } else if (showBorder) {
    return (
      <View style={[{ paddingHorizontal: 0 }, opacityStyle]}>
        <View style={[styles.container_border, style]}>
          <View style={[{ padding: 10 }, errorStyle]}>
            <TextInput
              style={[styles.input, styles.textCaption, inputStyle]}
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
              maxLength={maxLength}
              {...textInputProps}
            />
            {currentText !== '' && isFocused && (
              <TouchableOpacity
                onPress={clear}
                style={{ position: 'absolute', top: 10, right: 10 }}
              >
                <Icons
                  name={'close'}
                  size={24}
                  color={GRAY}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={[{ paddingLeft: 10, paddingTop: 5 }]}>
          <Txt style={[styles.textDigit]}>12-14 digit code</Txt>
        </View>
      </View>
    );
  } else {
    return (
      <View style={[{ paddingHorizontal: 0 }, opacityStyle]}>
        <View
          style={[
            showBorder ? styles.container_border : styles.container,
            style,
          ]}
        >
          <View style={[{ padding: showBorder ? 10 : 0 }, errorStyle]}>
            {caption !== '' || isFocused ? (
              <View style={[styles.label, {}]}>
                <Txt
                  light
                  style={[
                    styles.textLabel,
                    textStyle,
                    {
                      color:
                        errorMessage !== ''
                          ? disabled
                            ? TEXTINPUT_DISABLE_GRAY
                            : RED
                          : TEXTINPUT_LABEL_GRAY,
                    },
                  ]}
                >
                  {label}
                </Txt>
              </View>
            ) : null}
            <TextInput
              style={[styles.input, styles.textCaption, inputStyle]}
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
              secureTextEntry={isSecure}
              maxLength={maxLength}
              {...textInputProps}
            />
            {currentText !== '' && isFocused && (
              <TouchableOpacity
                onPress={clear}
                style={{
                  position: 'absolute',
                  top: 15,
                  right: rightIcon || props.secure ? 50 : 5,
                }}
              >
                <Icons
                  name={'close'}
                  size={24}
                  color={TEXTINPUT_CLOSE_BUTTON}
                />
              </TouchableOpacity>
            )}

            {props.secure && (
              <TouchableOpacity
                onPress={() => {
                  setVisibility(!isSecure);
                }}
                style={{
                  position: 'absolute',
                  top: 15,
                  right: rightIcon ? 50 : 5,
                }}
              >
                {isSecure ? (
                  <Icons
                    name={'eye-on'}
                    size={24}
                    color={TEXTINPUT_CLOSE_BUTTON}
                  />
                ) : (
                  <Icons
                    name={'eye-off'}
                    size={24}
                    color={TEXTINPUT_CLOSE_BUTTON}
                  />
                )}
              </TouchableOpacity>
            )}

            {rightIcon && (
              <TouchableOpacity
                onPress={clear}
                style={{ position: 'absolute', top: 15, right: 5 }}
              >
                <Image source={rightIcon} style={styles.icon_right} />
              </TouchableOpacity>
            )}

            {!showBorder && (
              <Divider
                style={{
                  marginVertical: 5,
                  backgroundColor:
                    errorMessage !== ''
                      ? disabled
                        ? TEXTINPUT_DISABLE_GRAY
                        : RED
                      : TEXTINPUT_BOTTOM_BORDER,
                }}
              />
            )}
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
}
