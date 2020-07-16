import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import styles from './style';
import {
  PROGRESSBAR_QUOTA_BACKGROUND,
  PROGRESSBAR_QUOTA_FOREGROUND,
  GRAY_SWITCHER_TEXT,
} from '../../utils/ComponentColors';
import { BLACK } from '../../utils/BaseColors';
import Txt from '../Text/Txt';
import { FONTSIZE_TINY } from '../../utils/Dimens';

type Props = {
  style?: {};
  mainText?: string;
  currentLimit?: string;
  onTap?: () => void;
  fullLimit?: string;
  expiredTime?: string;
  progressNumber?: number;
  heightBarSize?: number;
  unlimited?: boolean;
};
type ProgressBarProps = {
  progressValue?: number;
  progressBarText?: string;
  heightBar?: number;
  unlimited?: boolean;
};
export function QuotaBar(props: Props) {
  const {
    style,
    mainText,
    currentLimit,
    fullLimit,
    expiredTime,
    onTap,
    progressNumber,
    heightBarSize,
    unlimited,
    ...otherProps
  } = props;
  return (
    <View style={[styles.wrapperTag]}>
      <TouchableOpacity
        {...otherProps}
        style={[style, { width: '100%' }]}
        onPress={onTap}
      >
        <View style={{ marginBottom: 12 }}>
          <Txt>{mainText}</Txt>
        </View>
        <View style={{ flexDirection: 'row', marginBottom: 8 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Txt style={[styles.limitFontSize]}>
              {unlimited ? 'Unlimited' : currentLimit + '/'}
            </Txt>
            <Txt style={[styles.limitFontSize, { color: GRAY_SWITCHER_TEXT }]}>
              {unlimited ? '' : fullLimit}
            </Txt>
          </View>
          <View style={[{ flex: 1, alignItems: 'flex-end' }]}>
            <Txt
              style={[styles.expLimitFontSize, { color: GRAY_SWITCHER_TEXT }]}
            >
              {expiredTime}
            </Txt>
          </View>
        </View>
        <ProgressBar
          progressValue={progressNumber}
          heightBar={heightBarSize}
          unlimited={unlimited}
        />
      </TouchableOpacity>
    </View>
  );
}

export function ProgressBar(props: ProgressBarProps) {
  const { progressBarText, progressValue, heightBar, unlimited } = props;
  return (
    <View>
      <View
        style={{
          backgroundColor: PROGRESSBAR_QUOTA_BACKGROUND,
          width: '100%',
          height: heightBar ? heightBar : 10,
          borderRadius: 9,
        }}
      >
        <View
          style={{
            backgroundColor: unlimited ? BLACK : PROGRESSBAR_QUOTA_FOREGROUND,
            width: unlimited ? '100%' : progressValue?.toString() + '%',
            height: heightBar ? heightBar : 10,
            borderRadius: 9,
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          {progressBarText && (
            <Txt
              style={{
                position: 'relative',
                marginLeft: 10,
                marginTop: 2,
                fontSize: FONTSIZE_TINY,
              }}
            >
              {progressBarText}
            </Txt>
          )}
        </View>
      </View>
    </View>
  );
}
