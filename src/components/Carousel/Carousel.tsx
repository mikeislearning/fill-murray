import React from 'react';
import { Image, Text, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { CarouselItem } from '../../types';

import colors from '../../theme/colors';

import styles from './Carousel.styles';

interface CarouselProps {
  entries: CarouselItem[];
}

interface CarouselState {
  dotIndex: number;
}

export default class CarouselComponent extends React.Component<
  CarouselProps,
  CarouselState
> {
  state = { dotIndex: 0 };

  renderItem = ({ item }: { item: CarouselItem }) => {
    return (
      <View style={styles.item}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.caption}>{item.caption}</Text>
      </View>
    );
  };

  render() {
    const { entries }: { entries: Array<CarouselItem> } = this.props;

    return (
      <View style={styles.container}>
        <Carousel
          sliderWidth={300}
          itemWidth={300}
          data={entries}
          renderItem={this.renderItem}
          onSnapToItem={(index: number) => this.setState({ dotIndex: index })}
        />
        <Pagination
          dotsLength={entries.length}
          activeDotIndex={this.state.dotIndex}
          dotColor={colors.black}
          inactiveDotColor={colors.gray.medium}
        />
      </View>
    );
  }
}
