import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import styles from './style';
import BaseStyle from '../../utils/BaseStyles';
import { GRAY_SWITCHER_TEXT } from '../../utils/ComponentColors';
import { RED, WHITE } from '../../utils/BaseColors';
import Txt from '../Text/Txt';
import { FONTSIZE_TINY, FONTSIZE_SMALL } from '../../utils/Dimens';
import { QuotaBar } from '../../components/ListMisc';
import Card from '../../components/Container/Card';
import ButtonSmart from '../../../src/components/Button/ButtonSmart';

type Props = {
  style?: {};
  mainText?: string;
  currentLimit?: string;
  onTap?: () => void;
  fullLimit?: string;
  expiredTime?: string;
  progressNumber: number;
  heightBarSize: number;
  children?: {};
  secondText?: string;
  noButton?: boolean;
  buttonActionPrimary?: () => {};
  buttonActionSecondary?: () => {};
  buttonActionPrimaryText: string;
  buttonActionSecondaryText: string;
};

export function QuotaCard(props: Props) {
  const {
    style,
    mainText,
    currentLimit,
    fullLimit,
    expiredTime,
    onTap,
    progressNumber,
    heightBarSize,
    children,
    secondText,
    noButton,
    buttonActionPrimary,
    buttonActionSecondary,
    buttonActionPrimaryText,
    buttonActionSecondaryText,
    ...otherProps
  } = props;
  return (
    <View style={[styles.wrapperTag]}>
      <TouchableOpacity
        {...otherProps}
        style={[style, { width: '100%' }]}
        onPress={onTap}
      >
        <View style={{ paddingVertical: 10 }}>
          <Card
            showShadow={true}
            radius={10}
            style={{
              width: '100%',
              paddingVertical: 20,
              paddingHorizontal: 15,
            }}
          >
            <Txt style={{ marginBottom: 10 }}>{mainText}</Txt>
            {secondText && (
              <Txt
                style={{
                  marginBottom: 10,
                  color: GRAY_SWITCHER_TEXT,
                  fontSize: FONTSIZE_SMALL,
                }}
              >
                {secondText}
              </Txt>
            )}
            {!noButton && (
              <View style={{ flexDirection: 'row', marginBottom: 25 }}>
                {buttonActionSecondary && (
                  <ButtonSmart
                    onPress={buttonActionSecondary}
                    outlined={true}
                    style={{
                      flex: 1,
                      paddingVertical: 8,
                      height: 50,
                      marginRight: 5,
                    }}
                  >
                    <Txt
                      style={{
                        fontWeight: 'bold',
                        fontSize: FONTSIZE_SMALL,
                        color: RED,
                      }}
                    >
                      {buttonActionSecondaryText
                        ? buttonActionSecondaryText
                        : 'Deactivate'}
                    </Txt>
                  </ButtonSmart>
                )}
                {buttonActionPrimary && (
                  <ButtonSmart
                    onPress={buttonActionPrimary}
                    style={{ flex: 1, paddingVertical: 8, height: 50 }}
                  >
                    <Txt
                      style={{
                        fontWeight: 'bold',
                        fontSize: FONTSIZE_SMALL,
                        color: WHITE,
                      }}
                    >
                      {buttonActionPrimaryText
                        ? buttonActionPrimaryText
                        : 'Buy'}
                    </Txt>
                  </ButtonSmart>
                )}
              </View>
            )}
            <View>{children}</View>
          </Card>
        </View>
      </TouchableOpacity>
    </View>
  );
}
