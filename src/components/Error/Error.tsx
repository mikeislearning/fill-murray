/*
 * Components to render errors
 */

import React from 'react';
import { Text, View } from 'react-native';

import styles from './Error.styles';

interface ErrorProps {
  error: any;
}

export default class ErrorComponent extends React.Component<ErrorProps> {
  render() {
    const { error } = this.props;

    return (
      <View style={[styles.container, styles.horizontal]}>
        <Text style={styles.text}>{error}</Text>
      </View>
    );
  }
}
