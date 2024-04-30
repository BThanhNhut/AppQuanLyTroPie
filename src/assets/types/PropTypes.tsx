import {GestureResponderEvent} from 'react-native';

export type ItemMenu = {
  nameIcon: any;
  text: string;
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
  name: string;
  price: number;
  measure: string;
  icon: string;
  note: string;
};

export type CardServiceItemProps = {
  service: ServiceItem;
};

export type District = {
  id: number;
  name: string;
  link: any;
};

//Home
type Types = {
  type_name: string;
  status: boolean;
};

type Room = {
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

type Account = {
  id: number;
  customer_name: string;
  avatar: string;
};

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
