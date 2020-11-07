/*
 * Show the preview of a property in a list
 */

import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import routes from '../../navigation/routes';

import { PropertyImage, Property } from '../../types';
import styles from './Preview.styles';

interface PreviewProps {
  navigation: any;
  item: Property;
}

class Preview extends React.Component<PreviewProps> {
  viewProperty = (slug: string) => {
    const { navigate }: { navigate: Function } = this.props.navigation;

    return navigate({
      routeName: routes.property,
      params: { slug },
    });
  };

  render() {
    const property: Property = this.props.item;

    const firstImage: PropertyImage = property.images[0];

    const roomCount: string = `${property.available_room_count} / ${property.total_room_count}`;

    const price: number = property.room_prices[0];

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.viewProperty(property.slug)}
      >
        <View style={styles.imageWrapper}>
          <Image source={{ uri: firstImage.sm_url }} style={styles.image} />
        </View>
        <View style={styles.textContent}>
          <Text style={styles.headline}>{property.headline}</Text>
          <Text style={styles.roomCount}>{roomCount} rooms available</Text>
          <Text style={styles.price}>${price} per month</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(Preview);
