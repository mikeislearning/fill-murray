import loremIpsum from 'lorem-ipsum-react-native';
import {
  Property,
  PropertyRoom,
  Location,
  PropertyAmenities,
  PropertyImage,
} from '../types';

const market: Location = {
  country: 'Canada',
  country_code: 'CA',
  display_name: 'Canada',
  email: '',
};

const amenityOne: PropertyAmenities = {
  display_name: loremIpsum(1),
  type: loremIpsum(1),
};

const amenityTwo: PropertyAmenities = {
  display_name: loremIpsum(1),
  type: loremIpsum(1),
};

const imageOne: PropertyImage = {
  caption: loremIpsum(5),
  lg_url: 'http://www.fillmurray.com/g/450/550',
  md_url: 'http://www.fillmurray.com/g/350/450',
  order: 1,
  sm_url: 'http://www.fillmurray.com/g/250/350',
};

const imageTwo: PropertyImage = {
  caption: loremIpsum(4),
  lg_url: 'http://www.fillmurray.com/400/500',
  md_url: 'http://www.fillmurray.com/300/400',
  order: 1,
  sm_url: 'http://www.fillmurray.com/200/300',
};

const roomOne: PropertyRoom = {
  price: 800,
};

const roomTwo: PropertyRoom = {
  price: 1000,
};

const roomThree: PropertyRoom = {
  price: 1200,
};

export const propertyOne: Property = {
  amenities: [amenityOne],
  available_room_count: 3,
  headline: loremIpsum(10),
  images: [imageOne, imageTwo],
  market,
  num_bathrooms: 3,
  room_prices: [123, 456],
  rooms: [roomOne],
  total_room_count: 3,
  slug: '0',
};

export const propertyTwo: Property = {
  amenities: [amenityTwo],
  available_room_count: 2,
  headline: loremIpsum(10),
  images: [imageOne, imageTwo],
  market,
  num_bathrooms: 5,
  room_prices: [789, 555],
  rooms: [roomTwo, roomThree],
  total_room_count: 5,
  slug: '1',
};

export const properties: Property[] = [propertyOne, propertyTwo];
