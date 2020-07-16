import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import styles from './style';

export default function DefaultView({ children }) {
  return (
    <ScrollView>
      <View style={styles.main}>{children}</View>
    </ScrollView>
  );
}

DefaultView.defaultProps = {
  children: null,
};

DefaultView.propTypes = {
  children: PropTypes.node,
};
