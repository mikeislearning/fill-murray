/*
 * @ Renders a loading indicator
 */

import * as React from 'react';
import { ActivityIndicator, View } from 'react-native';

import styles from './Loading.styles';

interface LoadingProps {
  size: string;
}

export default class Loading extends React.Component<LoadingProps> {
  static defaultProps = {
    size: 'large',
  };

  render() {
    const { size }: { size: any } = this.props;

    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size={size} />
      </View>
    );
  }
}
