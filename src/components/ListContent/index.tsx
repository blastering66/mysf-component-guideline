import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import styles from './style';
import Icons from '../../components/Icons';
import BaseStyle from '../../utils/BaseStyles';
import {
  BLACK,
  RED,
  WHITE,
} from '../../utils/BaseColors';
import {
  GRAY_SWITCHER_BG,
  GRAY_SWITCHER_TEXT,
  RANK_BG,
  PIEBLUE,
  INACTIVE_MONTH_STEP,
} from '../../utils/ComponentColors';
import Txt from '../Text/Txt';
import {
  FONTSIZE_TINY,
  FONTSIZE_BIG,
  FONTSIZE_NORMAL,
  FONTSIZE_ACTIONBAR_TITLE,
} from '../../utils/Dimens';
import { color } from '@storybook/addon-knobs';

type Props = {
  style?: {};
  onTap?: () => void;
  firstImage: string;
  firstTitle: string;
  firstAmount: string;
  secondImage: string;
  secondTitle: string;
  secondAmount: string;
  date: string;
  time: string;
};
export function ListContentRow(props: Props) {
  const {
    style,
    onTap,
    firstImage,
    firstAmount,
    firstTitle,
    secondAmount,
    secondImage,
    secondTitle,
    date,
    time,
    ...otherProps
  } = props;
  return (
    <View style={[styles.wrapperTag]}>
      <TouchableOpacity
        {...otherProps}
        style={[
          style,
          {
            width: '100%',
            borderBottomColor: GRAY_SWITCHER_BG,
            borderBottomWidth: 1,
            paddingVertical: 19,
          },
        ]}
        onPress={onTap}
      >
        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginRight: 6 }}>
            <Image
              source={{ uri: firstImage }}
              style={{
                width: 35,
                height: 35,
                resizeMode: 'contain',
                backgroundColor: '#ffce30',
                borderRadius: 100,
              }}
            />
          </View>
          <View style={{ marginRight: 8 }}>
            <Txt style={[styles.subContentSize]}>{firstTitle}</Txt>
            <Txt>{firstAmount}</Txt>
          </View>
          <View
            style={{
              marginRight: 8,
              marginTop: 5,
            }}
          >
            <Icons
              name={'arrow-right'}
              color={GRAY_SWITCHER_TEXT}
              size={25}
            />
          </View>
          <View style={{ marginRight: 6 }}>
            <Image
              source={{ uri: secondImage }}
              style={{
                width: 35,
                height: 35,
                resizeMode: 'contain',
                backgroundColor: '#14b4ff',
                borderRadius: 100,
              }}
            />
          </View>
          <View style={{ marginRight: 6 }}>
            <Txt style={[styles.subContentSize]}>{secondTitle}</Txt>
            <Txt>{secondAmount}</Txt>
          </View>
          <View>
            <Txt style={[styles.subContentSize, { textAlign: 'right' }]}>
              {date}
            </Txt>
            <Txt style={[styles.subContentSize, { textAlign: 'right' }]}>
              {time}
            </Txt>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

type PropsStack = {
  style?: {};
  onTap?: () => void;
  firstImage: string;
  firstTitle: string;
  firstAmount: string;
  secondImage: string;
  secondTitle: string;
  secondAmount: string;
  date: string;
  time: string;
  mainText: string;
};
export function ListContentStack(props: PropsStack) {
  const {
    style,
    onTap,
    firstImage,
    firstAmount,
    firstTitle,
    secondAmount,
    secondImage,
    secondTitle,
    date,
    time,
    mainText,
    ...otherProps
  } = props;
  return (
    <View style={[styles.wrapperTag]}>
      <TouchableOpacity
        {...otherProps}
        style={[
          style,
          {
            width: '100%',
            borderBottomColor: GRAY_SWITCHER_BG,
            borderBottomWidth: 1,
            paddingVertical: 19,
          },
        ]}
        onPress={onTap}
      >
        <View style={{ marginBottom: 6 }}>
          <Txt style={{ fontize: FONTSIZE_NORMAL }}>{mainText}</Txt>
        </View>
        <View style={{ flexDirection: 'row', marginBottom: 11 }}>
          <Txt
            style={[
              styles.subContentSize,
              { textAlign: 'right', marginRight: 15 },
            ]}
          >
            {date}
          </Txt>
          <Txt style={[styles.subContentSize, { textAlign: 'right' }]}>
            {time}
          </Txt>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ marginRight: 6 }}>
              <Image
                source={{ uri: firstImage }}
                style={{
                  width: 35,
                  height: 35,
                  resizeMode: 'contain',
                  backgroundColor: '#ffce30',
                  borderRadius: 100,
                }}
              />
            </View>
            <View style={{ marginRight: 8 }}>
              <Txt style={[styles.subContentSize]}>{firstTitle}</Txt>
              <Txt>{firstAmount}</Txt>
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ marginRight: 6 }}>
              <Image
                source={{ uri: secondImage }}
                style={{
                  width: 35,
                  height: 35,
                  resizeMode: 'contain',
                  backgroundColor: '#14b4ff',
                  borderRadius: 100,
                }}
              />
            </View>
            <View style={{ marginRight: 6 }}>
              <Txt style={[styles.subContentSize]}>{secondTitle}</Txt>
              <Txt>{secondAmount}</Txt>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

type PropsUserCrown = {
  style?: {};
  onTap?: () => void;
  userId: string;
  mdn: string;
  rank: string;
  sumRank: string;
  firstImage: string;
  secondImage: string;
  secondAmount: string;
  rankUp: boolean;
};
export function ListContentUsercrown(props: PropsUserCrown) {
  const {
    style,
    onTap,
    userId,
    mdn,
    rank,
    sumRank,
    firstImage,
    secondImage,
    secondAmount,
    rankUp,
    ...otherProps
  } = props;
  return (
    <View style={[styles.wrapperTag]}>
      <TouchableOpacity
        {...otherProps}
        style={[
          style,
          {
            width: '100%',
            borderBottomColor: GRAY_SWITCHER_BG,
            borderBottomWidth: 1,
            paddingVertical: 19,
          },
        ]}
        onPress={onTap}
      >
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              marginRight: 8,
              paddingHorizontal: 15,
              paddingVertical: 5,
              backgroundColor: RANK_BG,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 6,
            }}
          >
            <Txt style={{ fontWeight: 'bold' }}>{rank}</Txt>
          </View>
          <View
            style={{
              marginRight: 10,
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: -10,
            }}
          >
            <Icons name={'down'} color={PIEBLUE} size={25} />
            <Txt
              style={{
                fontSize: FONTSIZE_NORMAL,
                color: PIEBLUE,
                marginTop: -12,
              }}
            >
              2
            </Txt>
          </View>
          <View
            style={{
              marginRight: 6,
              justifyContent: 'center',
            }}
          >
            <Image
              source={{ uri: secondImage }}
              style={{
                width: 26,
                height: 26,
                resizeMode: 'contain',
                backgroundColor: '#ffce30',
                borderRadius: 100,
              }}
            />
          </View>
          <View style={{ marginRight: 6 }}>
            <Txt>{userId}</Txt>
            <Txt style={[styles.subContentSize]}>{mdn}</Txt>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginRight: 6,
              backgroundColor: RANK_BG,
              paddingHorizontal: 6,
              paddingVertical: 8,
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 6,
            }}
          >
            <Txt light style={{ marginRight: 7 }}>
              {secondAmount}
            </Txt>
            <Image
              source={{ uri: secondImage }}
              style={{
                width: 14,
                height: 14,
                resizeMode: 'contain',
                backgroundColor: '#fff120',
                borderRadius: 100,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

type PropsSimpleList = {
  style?: {};
  text?: string;
  bulletsColor: string;
  textStyle?: {};
  onTap?: () => void;
};
export function ListContentSimple(props: PropsSimpleList) {
  const { style, text, onTap, bulletsColor, textStyle, ...otherProps } = props;
  return (
    <View style={[styles.wrapperTag]}>
      <TouchableOpacity
        {...otherProps}
        style={[
          style,
          {
            width: '100%',
            paddingVertical: 19,
          },
        ]}
        onPress={onTap}
      >
        <View
          style={[textStyle, { flexDirection: 'row', alignItems: 'center' }]}
        >
          <View
            style={{
              width: 5,
              height: 5,
              backgroundColor: bulletsColor ? bulletsColor : BLACK,
              marginRight: 8,
              borderRadius: 100,
            }}
          />

          <Txt>{text}</Txt>
        </View>
      </TouchableOpacity>
    </View>
  );
}

type PropsMonthStepper = {
  style?: {};
  completed: boolean;
  monthName: string;
  date: string;
  quota: string;
  onTap?: () => void;
};
export function ListMonthStepper(props: PropsMonthStepper) {
  const {
    style,
    monthName,
    onTap,
    date,
    quota,
    completed,
    ...otherProps
  } = props;
  return (
    <View style={[styles.wrapperTag]}>
      <TouchableOpacity {...otherProps} style={[style, {}]} onPress={onTap}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: 75,
            width: 75,
          }}
        >
          {completed ? (
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: RED, width: 28, height: 28, borderRadius: 14 }}>
              <Icons name={'checkmark'} color={WHITE} size={20} />
            </View>
          ) : (
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: INACTIVE_MONTH_STEP, width: 28, height: 28, borderRadius: 14 }}>
              <Icons name={'checkmark'} color={WHITE} size={20} />
            </View>
          )}
        </View>
        <View
          style={{
            flexDirection: 'column',
            width: 70,
            alignItems: 'center',
            borderColor: BLACK,
            borderWidth: 1,
            borderRadius: 6,
            marginTop: 8,
            marginBottom: 8,
            marginRight: 24,
          }}
        >
          <View
            style={{
              backgroundColor: RED,
              paddingVertical: 4,
              paddingHorizontal: 16,
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,
              width: '100%',
            }}
          >
            <Txt style={{ color: WHITE, fontWeight: 'bold' }}>{monthName}</Txt>
          </View>
          <View>
            <Txt style={{ fontSize: 28, paddingVertical: 14 }}>{date}</Txt>
          </View>
        </View>
        <View>
          <Txt style={{ fontSize: FONTSIZE_BIG }}>{quota}</Txt>
        </View>
      </TouchableOpacity>
    </View>
  );
}
