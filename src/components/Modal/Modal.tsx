import React from 'react';
import {
  View,
  Modal as BaseModal,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import ModalContainer from './ModalContainer';
import Text from '../Text/Txt';
import ButtonSmart from '../Button/ButtonSmart';
import {
  RADIUS_MODAL,
  FONTSIZE_BIG,
  FONTSIZE_NORMAL,
  FONTSIZE_SMALL,
} from '../../utils/Dimens';
import Icons from '../../components/Icons';
import BaseStyles from '../../utils/BaseStyles';
import { CloseCircle } from '../Misc';
import { WHITE, RED, GRAY } from '../../utils/BaseColors';
import Space from '../Space/Space';
import styles from './style';
type Props = {
  modalStyle?: {};
  imageStyle?: {};
  type: 'default' | 'border' | 'iconOnly';
  title: string;
  message: string;
  positiveLabel: string;
  negativeLabel: string;
  img: string;
  onPositivePressed: () => void;
  onNegativePressed: () => void;
  close: () => void;
  closeable: boolean;
};

Modal.defaultProps = {
  type: 'default',
};

export default function Modal(props: Props) {
  let {
    modalStyle,
    imageStyle,
    type,
    title,
    message,
    positiveLabel,
    negativeLabel,
    img,
    onPositivePressed,
    onNegativePressed,
    closeable,
    close,
    ...otherProps
  } = props;

  return (
    <BaseModal style={[BaseStyles.wrapper_center]} {...otherProps}>
      <TouchableWithoutFeedback onPress={closeable ? close : null}>
        <View style={[BaseStyles.wrapper_abs, { backgroundColor: 'gray' }]}>
          <View
            style={[
              {
                width: '70%',
                height: '100%',
                justifyContent: 'center',
                alignSelf: 'center',
              },
            ]}
          >
            <ModalContainer
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: WHITE,
                padding: 10,
              }}
              showShadow={true}
              radius={RADIUS_MODAL}
            >
              <Space />
              {img && (
                <Image source={{ uri: img }} style={[styles.img, imageStyle]} />
              )}
              <Text style={{ padding: 10, fontSize: FONTSIZE_BIG }}>
                {title}
              </Text>
              <Text
                light={true}
                style={{
                  padding: 10,
                  fontSize: FONTSIZE_NORMAL,
                  textAlign: 'center',
                }}
              >
                {message}
              </Text>
              <View style={{ height: 50 }} />
              {type === 'default' && (
                <View
                  style={[
                    BaseStyles.wrapper_abs_bottom,
                    styles.row,
                    { padding: 10 },
                  ]}
                >
                  {negativeLabel && (
                    <ButtonSmart
                      outlined={true}
                      onPress={onNegativePressed}
                      style={[styles.fill, { paddingHorizontal: 10 }]}
                    >
                      <Text
                        style={{
                          fontSize: FONTSIZE_SMALL,
                          fontFamily: 'TruenoSBd',
                        }}
                      >
                        {negativeLabel}
                      </Text>
                    </ButtonSmart>
                  )}
                  {negativeLabel && <Space />}
                  <ButtonSmart
                    onPress={onPositivePressed}
                    style={[styles.fill, { paddingHorizontal: 10 }]}
                  >
                    <Text
                      style={{
                        fontSize: FONTSIZE_SMALL,
                        color: WHITE,
                        fontFamily: 'TruenoSBd',
                      }}
                    >
                      {positiveLabel}
                    </Text>
                  </ButtonSmart>
                </View>
              )}
              {type === 'border' && (
                <View
                  style={[
                    BaseStyles.wrapper_abs_bottom,
                    styles.row,
                    styles.wrapper_bottom,
                  ]}
                >
                  {negativeLabel && (
                    <TouchableOpacity
                      onPress={onNegativePressed}
                      style={styles.fill}
                    >
                      <View style={[styles.bottom_button_border_left]}>
                        <Text
                          style={{
                            fontSize: FONTSIZE_SMALL,
                            color: RED,
                            textAlign: 'center',
                            fontFamily: 'TruenoSBd',
                            paddingVertical: 15,
                          }}
                        >
                          {negativeLabel}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}

                  <TouchableOpacity
                    onPress={onPositivePressed}
                    style={styles.fill}
                  >
                    <View style={styles.bottom_button_border_right}>
                      <Text
                        style={{
                          fontSize: FONTSIZE_SMALL,
                          color: RED,
                          textAlign: 'center',
                          fontFamily: 'TruenoSBd',
                          paddingVertical: 15,
                        }}
                      >
                        {positiveLabel}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}

              {type === 'iconOnly' && (
                <View style={[BaseStyles.wrapper_abs_bottom, styles.row]}>
                  <TouchableOpacity
                    onPress={onNegativePressed}
                    style={styles.fill}
                  >
                    <View style={[{ padding: 20 }]}>
                      <Icons
                        name={'close'}
                        size={24}
                        color={'#808080'}
                        style={{ padding: 5 }}
                      />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={onPositivePressed}
                    style={styles.fill}
                  >
                    <View
                      style={[{ alignItems: 'flex-end', padding: 20 }]}
                    >
                      <Icons
                        name={'checkmark'}
                        size={24}
                        color={RED}
                        style={{ padding: 5 }}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              )}

              {close && (
                <View style={{ position: 'absolute', top: -15, right: -15 }}>
                  <TouchableWithoutFeedback onPress={close}>
                    <View>
                      <CloseCircle />
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              )}
            </ModalContainer>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </BaseModal>
  );
}
