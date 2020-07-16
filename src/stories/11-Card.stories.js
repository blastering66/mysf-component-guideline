import React from 'react';
import { Text, Image } from 'react-native';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Avatar from '../components/Avatar';
import DefaultView from './DefaultView';
import BaseStyle from '../utils/BaseStyles';
import Space from '../components/Space/Space';
import Package from '../components/Card/Package';
import Voucher from '../components/Card/Voucher';
import Banner from '../components/Card/Banner';
import QuotaCard from '../components/QuotaCard/QuotaCard';
import QuotaBar from '../components/ListMisc/QuotaBar';

export default {
  title: 'Card',
};

export const DefaultPackage = () => (
  <DefaultView>
    <Package
      showShadow={true}
      radius={10}
      style={{ maxWidth: 200 }}
    />
  </DefaultView>
)

export const DefaultVoucher = () => (
  <DefaultView>
    <Voucher
      showShadow={true}
      type={1}
      style={{ maxWidth: 200 }}
      />
    <Space />
    <Voucher
      showShadow={true}
      radius={20}
      type={2}
      style={{ maxWidth: 200 }}
    />
    <Space />
    <Voucher
      showShadow={true}
      radius={20}
      type={3}
      style={{ maxWidth: 200 }}
    />
  </DefaultView>
)

export const DefaultBanner = () => (
  <DefaultView>
    <Banner
      showShadow={true}
      radius={0}
      style={{ width: 200, height: 400 }}
    >
    </Banner>
  </DefaultView>
)

export const DefaultQuota = () => (
  <DefaultView>
    <QuotaCard
      mainText={'Internet 120GB* Renewal'}
      secondText={'Vaild until 20 Dec 2020'}
      buttonActionPrimary={() => {
        this.selectedButton();
      }}
      buttonActionSecondary={() => {
        this.selectedButton();
      }}
      style={{ maxWidth: 300 }}
    >
      <QuotaBar
        mainText={'Internet Quota'}
        currentLimit={'38.3GB'}
        fullLimit={'40GB'}
        expiredTime={'FUP'}
        progressNumber={75}
        heightBarSize={6}
        style={{ marginBottom: 20 }}
      />
      <QuotaBar
        mainText={'Midnight Quota'}
        currentLimit={'24GB'}
        fullLimit={'30GB'}
        expiredTime={'FUP'}
        progressNumber={75}
        heightBarSize={6}
        style={{ marginBottom: 20 }}
      />
      <QuotaBar
        unlimited
        mainText={'Smartfren VoLTE Call Bonus'}
        heightBarSize={6}
        style={{ marginBottom: 20 }}
      />
    </QuotaCard>

    <Text style={{ marginTop: 20 }}>Remaining Quota - Others</Text>
    <QuotaCard mainText={'Internet 120GB* Renewal'} noButton style={{ maxWidth: 300 }}>
      <QuotaBar
        mainText={'Internet Quota'}
        currentLimit={'38.3GB'}
        fullLimit={'40GB'}
        expiredTime={'FUP'}
        progressNumber={75}
        heightBarSize={6}
        style={{ marginBottom: 20 }}
      />
      <QuotaBar
        mainText={'Midnight Quota'}
        currentLimit={'24GB'}
        fullLimit={'30GB'}
        expiredTime={'FUP'}
        progressNumber={75}
        heightBarSize={6}
        style={{ marginBottom: 20 }}
      />
      <QuotaBar
        unlimited
        mainText={'Smartfren VoLTE Call Bonus'}
        heightBarSize={6}
        style={{ marginBottom: 20 }}
      />
    </QuotaCard>
    <Text style={{ marginTop: 20 }}>Single Card with Cartbar</Text>
    <QuotaCard
      mainText={'Internet 120GB* Renewal'}
      buttonActionPrimary={() => {
        this.selectedButton();
      }}
      buttonActionPrimaryText={'Buy Add-On'}
      style={{ maxWidth: 300 }}
    >
      <QuotaBar
        mainText={'Internet Quota 4GB + 1GB'}
        currentLimit={'4.3GB'}
        fullLimit={'5GB'}
        expiredTime={'Valid Until 14 Oct 2020'}
        progressNumber={75}
        heightBarSize={6}
        style={{ marginBottom: 20 }}
      />
    </QuotaCard>
  </DefaultView>
)