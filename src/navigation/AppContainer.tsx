/*
 * Contains the primary navigator
 */

import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Properties, Property } from '../screens';

import images from '../theme/images';
import routes from './routes';

const styles: any = {
  header: {
    height: 60,
    justifyContent: 'center',
    width: 150,
  },
};

const AppNavigator: any = createStackNavigator(
  {
    [routes.properties]: {
      screen: Properties,
      navigationOptions: {
        headerTitle: (
          <Image
            resizeMode="contain"
            source={images.logo}
            style={styles.header}
          />
        ),
      },
    },
    [routes.property]: {
      screen: Property,
      navigationOptions: {
        headerTitle: (
          <Image
            resizeMode="contain"
            source={images.logo}
            style={styles.header}
          />
        ),
      },
    },
  },
  {
    [routes.properties]: Properties,
    headerLayoutPreset: 'center',
  }
);

const AppContainer: any = createAppContainer(AppNavigator);

export default AppContainer;
