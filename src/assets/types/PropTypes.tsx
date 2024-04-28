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

interface Room {
  address: string;
  area_height: number;
  area_width: number;
  name_room: string;
  note: string;
  number_of_people: number;
  note_gender: string;
  province: string;
  room_price: number;
}

interface Account {
  customer_name: string;
}

export interface DataItem1 {
  id: number;
  accounts: Account;
  rooms: Room;
  title: string;
  create_at: Date;
}

export type cardPostProps = {
  item: DataItem1;
  onPress: (event: GestureResponderEvent) => void;
};
