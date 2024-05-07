import {GestureResponderEvent} from 'react-native';

export type ItemMenu = {
  nameIcon: any;
  text: string;
  screen: string;
};

export type CustomModalProps = {
  visible: boolean;
  onClose: () => void;
};

export type DialogProvinceProps = {
  onClose: () => void;
};

export type DropdownComponentProps = {
  name: string;
};

export type DataItem = {
  label: string;
  value: string;
};

export type CardServiceProps = {
  name: string;
  image: any;
};

// addroom
export type ServiceItem = {
  id: number;
  service_name: string;
  cost: number;
  note: string;
  icon: string;
  status: boolean;
};

export type CardServiceItemProps = {
  id: number;
  services: ServiceItem;
};

export type District = {
  id: number;
  name: string;
  link: any;
};

//Home
type Room = {
  id: number;
  name_room: string;
  address: string;
  room_price: number;
  deposit_price: number;
  image: string;
  area_width: number;
  area_height: number;
  phone_number: string;
  floor: number;
  number_of_people: number;
  note: string;
  note_gender: string;
  province: string;
  district: string;
  ward: string;
  types: Types;
};

// type Account = {
//   id: number;
//   customer_name: string;
//   avatar: string;
// };

export type Posts = {
  id: number;
  accounts: Account;
  rooms: Room;
  title: string;
  create_at: Date;
};

export type cardPostProps = {
  item: Posts;
  onPress: (id: number) => void;
};
//  onPress: (event: GestureResponderEvent) => void;

// Detail

export type Amenities = {
  id: number;
  amenity_name: string;
  icon: string;
  status: boolean;
};

export type AmenitiesItem = {
  id: number;
  amenities: Amenities;
};

export type Furniture = {
  id: number;
  furniture_name: string;
  icon: string;
  status: boolean;
};

export type FurnitureItem = {
  id: number;
  furniture: Furniture;
};

//create room

export type Types = {
  id: number;
  type_name: string;
  status: boolean;
};

export type ImageSelect = {
  height: number;
  uri: string;
  width: number;
};

//CreatePost
export type roomsid_name = {
  id: string;
  name_room: string;
};

//favorite
export type favoriteItem = {
  id: number;
  posts: Posts;
};

//Login
export type Account = {
  id: number;
  username: string;
  password: string;
  customer_name: string;
  phone_number: string;
  address: string;
  avatar: string;
};

export type AccountLogin = {
  msg: string;
  access_token: string;
  account: Account;
};
