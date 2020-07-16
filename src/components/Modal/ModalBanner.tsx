import React from 'react';
import {
  Dimensions,
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
import BaseStyles from '../../utils/BaseStyles';
import CloseCircle from '../Misc/CloseCircle';
import { WHITE, RED, GRAY } from '../../utils/BaseColors';
import Space from '../Space/Space';
import styles from './style';
type Props = {
  modalStyle?: {};
  imageStyle?: {};
  type: 'default' | 'square' | 'overflow';
  positiveLabel: string;
  negativeLabel: string;
  img: string;
  onPositivePressed: () => void;
  onNegativePressed: () => void;
  close: () => void;
  closeable: boolean;
};

ModalBanner.defaultProps = {
  type: 'default',
};

export default function ModalBanner(props: Props) {
  let {
    modalStyle,
    imageStyle,
    type,
    positiveLabel,
    negativeLabel,
    img,
    onPositivePressed,
    onNegativePressed,
    closeable,
    close,
    ...otherProps
  } = props;

  /* 
    custom style for Dialog Banner with Overflow style
    width adjusted based on width of Banner ( 80 % of the screen)
    Height is 1.5x times from width

    image for overflow is best resolution is (400 x 600)
  */
  let adjustedImgStyle = null;
  if (type === 'overflow') {
    const imgW = Dimensions.get('window').width * 0.8;
    const imgH = imgW * 1.5;
    adjustedImgStyle = {
      width: imgW,
      height: imgH,
    };
  }

  return (
    <BaseModal style={[BaseStyles.wrapper_center]} {...otherProps}>
      <TouchableWithoutFeedback onPress={closeable ? close : null}>
        <View style={[BaseStyles.wrapper_abs, { backgroundColor: 'gray' }]}>
          <View
            style={[
              {
                width: '80%',
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
                padding: type === 'overflow' ? 0 : 10,
                overflow: type === 'overflow' ? 'hidden' : 'visible',
              }}
              showShadow={true}
              radius={RADIUS_MODAL}
            >
              {img && type === 'default' && (
                <Image
                  resizeMode={'cover'}
                  source={{ uri: img }}
                  style={[styles.img_banner_default, imageStyle]}
                />
              )}

              {img && type === 'square' && (
                <Image
                  resizeMode={'contain'}
                  source={{ uri: img }}
                  style={[styles.img_banner_square, imageStyle]}
                />
              )}

              {img && type === 'overflow' && (
                <Image
                  resizeMode={'cover'}
                  source={{ uri: img }}
                  style={[
                    styles.img_banner_overflow,
                    adjustedImgStyle,
                    imageStyle,
                  ]}
                />
              )}

              <View style={{ height: 46 }} />
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

              {close && type === 'default' && (
                <View style={{ position: 'absolute', top: -15, right: -15 }}>
                  <TouchableWithoutFeedback onPress={close}>
                    <View>
                      <CloseCircle />
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              )}

              {close && type === 'square' && (
                <View style={{ position: 'absolute', top: -15, right: -15 }}>
                  <TouchableWithoutFeedback onPress={close}>
                    <View>
                      <CloseCircle />
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              )}

              {close && type === 'overflow' && (
                <View style={{ position: 'absolute', top: 5, right: 5 }}>
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
