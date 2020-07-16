import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Avatar from '../components/Avatar';
import DefaultView from './DefaultView';
import List from '../components/List';
import ListOptBorder from '../components/ListOptBorder';
import ListText from '../components/ListText';
import QuotaBar from '../components/ListMisc/QuotaBar';
import {
  ListContentRow,
  ListContentStack,
  ListContentUsercrown,
  ListContentSimple,
  ListMonthStepper,
} from '../components/ListContent';
// import ListContentRow from '../src/components/ListContent/ListContentRow';


export default {
  title: 'List',
};

export const WithBorder = () => (
  <DefaultView>
    <List
      onTap={() => {
        this.selectedList();
      }}
      text="Deduct Balance"
      rightIcon="rupiah"
      style={{ marginBottom: 10, maxWidth: 500 }}
    />
    <List
      onTap={() => {
        this.selectedList();
      }}
      text="Terms and Conditions"
      rightIcon="chevron-right"
      style={{ marginBottom: 10, maxWidth: 500 }}
    />
    <List
      onTap={() => {
        this.selectedList();
      }}
      text="Deduct Balance"
      image="https://sadewapulsa.com/wp-content/uploads/2019/01/ovo-logo-png-6.png"
      style={{ marginBottom: 10, maxWidth: 500 }}
    />
    <List
      onTap={() => {
        this.selectedList();
      }}
      text="Learn More"
      leftIcon="info"
      rightIcon="chevron-right"
      style={{ marginBottom: 10, maxWidth: 500 }}
    />
  </DefaultView>
)

export const WithText = () => (
  <DefaultView>
    <Text style={{ fontSize: 18, paddingBottom: 10 }}>Active</Text>
    <ListText
      subTitle="Payment"
      title="Payment ‘Internet Unlimited 75K’ Success"
      text="Your payment with BCA Virtual Account Rp 75,000 is successfully received."
      date="28 Apr 2020"
      onTap={() => {
        this.selectedList();
      }}
      style={{ maxWidth: 500 }}
    />
    <ListText
      subTitle="Exclusive Offer"
      title="Spend Rp 50.000 until the end of month, get cashback 10%"
      date="28 Apr 2020"
      onTap={() => {
        this.selectedList();
      }}
      style={{ maxWidth: 500 }}
    />
    <Text style={{ fontSize: 18, paddingBottom: 15, marginTop: 20 }}>
      Inactive
    </Text>
    <ListText
      subTitle="Payment"
      title="Payment ‘Internet Unlimited 75K’ Success"
      text="Your payment with BCA Virtual Account Rp 75,000 is successfully received."
      date="28 Apr 2020"
      inactive
      onTap={() => {
        this.selectedList();
      }}
      style={{ maxWidth: 500 }}
    />
    <ListText
      subTitle="Exclusive Offer"
      title="Spend Rp 50.000 until the end of month, get cashback 10%"
      date="28 Apr 2020"
      inactive
      onTap={() => {
        this.selectedList();
      }}
      style={{ maxWidth: 500 }}
    />
  </DefaultView>
)

export const OptionalBorder = () => (
  <DefaultView>
    <ListOptBorder
      onTap={() => {
        this.selectedList();
      }}
      text="Internet"
      leftIcon="ios-globe"
      rightText="2GB(Per 4 Week) X 6"
      style={{ marginBottom: 10, maxWidth: 500 }}
    />
    <ListOptBorder
      onTap={() => {
        this.selectedList();
      }}
      number="7"
      leftImage="1"
      rightText="Point earning from transaction in MySF"
      style={{ marginBottom: 10, maxWidth: 500 }}
    />
    <ListOptBorder
      onTap={() => {
        this.selectedList();
      }}
      borderBottom
      text="How to videos"
      leftIcon="ios-play-circle"
      rightIcon="ios-arrow-forward"
      style={{ marginBottom: 10, maxWidth: 500 }}
    />
    <ListOptBorder
      onTap={() => {
        this.selectedList();
      }}
      borderBottom
      text="Rewards"
      leftIcon="ios-card"
      rightIcon="ios-arrow-forward"
      style={{ marginBottom: 10, maxWidth: 500 }}
    />
    <ListOptBorder
      onTap={() => {
        this.selectedList();
      }}
      borderBottom
      text="Terms and conditions"
      leftIcon="ios-paper"
      style={{ marginBottom: 10, maxWidth: 500 }}
    />
    <ListOptBorder
      onTap={() => {
        this.selectedList();
      }}
      borderBottom
      text="Notifications"
      leftIcon="ios-notifications-outline"
      style={{ marginBottom: 10, maxWidth: 500 }}
      withSwitch
      leftSwitch={'ON'}
      rightSwitch={'OF'}
    />
    <ListOptBorder
      onTap={() => {
        this.selectedList();
      }}
      text="Power Up"
      leftIcon="ios-globe"
      style={{ marginBottom: 10, maxWidth: 500 }}
      progressBar={40}
      progressBarText={'1.3 GB'}
    />
    <ListOptBorder
      onTap={() => {
        this.selectedList();
      }}
      text="Title"
      disabledList
      style={{ marginBottom: 10, maxWidth: 500 }}
    />
  </DefaultView>
)

export const Misc = () => (
  <DefaultView>
    <ListContentRow
      firstImage={'1'}
      firstTitle={'Smartpoin'}
      firstAmount={'1.000.000'}
      secondImage={'2'}
      secondTitle={'Cashbac'}
      secondAmount={'1.200.000'}
      date={'10 May 2020'}
      time={'10:10 AM'}
      onTap={() => {
        this.selectedList();
      }}
      style={{ maxWidth: 500 }}
    />
    <ListContentStack
      mainText={'Purchase Package Unlimited Internet 75K'}
      firstImage={'1'}
      firstTitle={'Point'}
      firstAmount={'+800'}
      secondImage={'2'}
      secondTitle={'Loyalty'}
      secondAmount={'+8'}
      date={'10 May 2020'}
      time={'10:10 AM'}
      onTap={() => {
        this.selectedList();
      }}
      style={{ maxWidth: 500 }}
    />
    <ListContentUsercrown
      userId={'Userid789101234'}
      mdn={'6288817261901XXX'}
      rank={'1'}
      sumRank={'2'}
      secondImage={'2'}
      secondAmount={'1.000.000'}
      firstImage={'1'}
      rankUp
      onTap={() => {
        this.selectedList();
      }}
      style={{ maxWidth: 500 }}
    />
    <ListContentSimple
      style={{ marginBottom: 10, marginTop: 10 }}
      text={'Description Content'}
      onTap={() => {
        this.selectedList();
      }}
      style={{ maxWidth: 500 }}
    />
    <QuotaBar
      mainText={'Ruangguru Access'}
      currentLimit={'38.3GB'}
      fullLimit={'40GB'}
      expiredTime={'Exp in 3 Days'}
      progressNumber={75}
      style={{ marginBottom: 20, maxWidth: 500 }}
    />

    <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
      <ListMonthStepper
        completed
        monthName={'MAY'}
        date={'1'}
        quota={'+500MB'}
        style={{ maxWidth: 500 }}
      />
      <ListMonthStepper monthName={'MAY'} date={'1'} quota={'+500MB'} style={{ maxWidth: 500 }} />
      <ListMonthStepper monthName={'MAY'} date={'1'} quota={'+500MB'} style={{ maxWidth: 500 }} />
      <ListMonthStepper monthName={'MAY'} date={'1'} quota={'+500MB'} style={{ maxWidth: 500 }} />
    </ScrollView>
  </DefaultView>
)