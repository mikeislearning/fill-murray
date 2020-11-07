import React from 'react';
import { Text, ScrollView, View } from 'react-native';

import Carousel from '../../components/Carousel/Carousel';
import Loading from '../../components/Loading/Loading';
import {
  CarouselItem,
  Property,
  PropertyAmenities,
  PropertyImage,
} from '../../types';

import styles from './Property.styles';
import { logger } from '../../utils/logger';

interface AppProps {
  getProperty: Function;
  navigation: any;
  data: Property;
  loading: boolean;
  error: object;
}

export default class PropertyScreen extends React.Component<AppProps> {
  componentDidMount() {
    const { slug } = this.props.navigation.state.params;

    this.props.getProperty(slug);
  }

  render() {
    const { data, error, loading } = this.props;

    if (loading || !data) {
      return <Loading />;
    }

    if (error) {
      logger.error('Error loading property', error);
    }

    console.log('THE DATS IS', data);
    const property: Property = this.props.data;

    let entries: Array<CarouselItem> = [];
    if (property.images && property.images.length > 0) {
      entries = property.images.map((image: PropertyImage) => ({
        image: image.md_url,
        caption: image.caption,
      }));
    }

    const amenities: Array<PropertyAmenities> = property.amenities || [];

    const price: number = property.rooms ? property.rooms[0].price : 0;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headline}>{property.headline}</Text>
        <Carousel entries={entries} />
        <View style={styles.content}>
          {price > 0 && <Text style={styles.price}>${price} per month</Text>}
          <Text style={styles.bathrooms}>
            Bathrooms: {property.num_bathrooms}
          </Text>

          <View style={styles.amenitiesContainer}>
            <Text style={styles.amenities}>Amenities</Text>
            {amenities.map((amenity: PropertyAmenities, i: number) => (
              <Text key={i}>- {amenity.display_name}</Text>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}
