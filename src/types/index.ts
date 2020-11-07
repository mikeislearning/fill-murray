export interface CarouselItem {
  caption: string;
  image: string;
}

export interface Location {
  country: string;
  country_code: string;
  display_name: string;
  email: string;
}
export interface PropertyImage {
  caption: string;
  lg_url: string;
  md_url: string;
  order: number;
  sm_url: string;
}

export interface PropertyAmenities {
  display_name: string;
  type: string;
}

export interface PropertyRoom {
  price: number;
}

export interface Property {
  amenities: PropertyAmenities[];
  available_room_count: number;
  headline: string;
  images: PropertyImage[];
  market: Location;
  num_bathrooms: number;
  room_prices: number[];
  rooms: PropertyRoom[];
  total_room_count: number;
  slug: string;
}

export interface PropertiesAction {
  data: Property[];
  error: Error;
  type: string;
}

export interface PropertyAction {
  data: Property;
  error: Error;
  type: string;
}
