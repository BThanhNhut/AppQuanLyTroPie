import {View} from 'react-native';
import CardPost2 from '../../components/CardPost2';
import {District, Posts} from '../types/PropTypes';

const data = [
  {id: '1', content: 'Item 1'},
  {id: '2', content: 'Item 2'},
  {id: '3', content: 'Item 3'},
  {id: '4', content: 'Item 4'},
  {id: '5', content: 'Item 5'},
  // Thêm dữ liệu khác nếu cần thiết
];

type props = {
  provinceroot: string;
  districtHCM: District[];
  districtDN: District[];
  districtHN: District[];
};

export const renderCards = (posts: Posts[]) => {
  const cardRows = [];
  for (let i = 0; i < posts.length; i += 2) {
    const row = (
      <View key={i} style={{flexDirection: 'row'}}>
        {posts.slice(i, i + 2).map(item => (
          <CardPost2 key={item.id} item={item} />
        ))}
      </View>
    );
    cardRows.push(row);
  }
  return cardRows;
};

export const checkProvince = ({
  provinceroot,
  districtHCM,
  districtDN,
  districtHN,
}: props): District[] => {
  if (provinceroot === 'TP Hồ Chí Minh') {
    console.log('hcm');
    return districtHCM;
  } else if (provinceroot === 'TP Đà Nẵng') {
    console.log('dn');
    return districtDN;
  } else {
    return districtHN;
  }
};
