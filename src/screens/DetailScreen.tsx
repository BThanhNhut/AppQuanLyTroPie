import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ColorValue,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import Icon4 from 'react-native-vector-icons/Ionicons';
import Icon5 from 'react-native-vector-icons/AntDesign';
// Component
import Cardaccount from '../components/CardAccount';
import BottomDetail from '../components/BottomDetail';
import {Posts} from '../assets/types/PropTypes';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const {width, height} = Dimensions.get('window');

let orange = '#FF7613';

type DetailsScreenProps = {
  route: any; // Adjust the type as per your route prop type
  navigation: any; // Adjust the type as per your navigation prop type
};

function formatCurrency(amount: any) {
  if (typeof amount === 'undefined' || amount === null) {
    return ''; // Trả về một giá trị mặc định hoặc làm bất cứ điều gì phù hợp với ứng dụng của bạn
  }
  return amount.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'});
}

function DetailScreen({
  route,
  navigation,
}: DetailsScreenProps): React.JSX.Element {
  const [iconColor, setIconColor] = useState<ColorValue>('#888888');
  const [dataRoom, setdataRoom] = useState<Posts>();
  const {itemId, otherParam} = route.params;

  const [service, setservice] = useState<any>();

  const handleIconPress = () => {
    const newColor = iconColor === '#888888' ? '#FF0000' : '#888888';
    setIconColor(newColor);
  };

  useEffect(() => {
    const num: number = parseInt(otherParam, 10);
    fetchData(num);
  }, []);

  const fetchData = async (parameter: number) => {
    // setLoading(true);
    try {
      const response = await fetch(
        `https://qlphong-tro-production.up.railway.app/posts/${parameter}`,
      ); // Sử dụng tham số trong URL
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      setdataRoom(result);
      console.log(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <Image
            source={{uri: dataRoom?.rooms.image}}
            style={styles.imgmain}
            resizeMode="contain"></Image>

          <View style={styles.borderscroll}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.borderimg}>
                <Image
                  source={require('../assets/images/hinhtro.jpg')}
                  style={styles.imgsuport}></Image>
              </View>
              <View style={styles.borderimg}>
                <Image
                  source={require('../assets/images/hinhtro.jpg')}
                  style={styles.imgsuport}></Image>
              </View>
              <View style={styles.borderimg}>
                <Image
                  source={require('../assets/images/hinhtro.jpg')}
                  style={styles.imgsuport}></Image>
              </View>
              <View style={styles.borderimg}>
                <Image
                  source={require('../assets/images/hinhtro.jpg')}
                  style={styles.imgsuport}></Image>
              </View>
            </ScrollView>
          </View>

          {/* Phần thông tin */}
          <View style={styles.infotitle}>
            <View style={styles.row}>
              <Text style={{color: '#808080', fontSize: 12}}>
                {dataRoom?.rooms.types.type_name}
              </Text>
              <Icon name="transgender" style={{marginLeft: 5}} size={15}></Icon>
              <Text style={{marginLeft: 2}}>{dataRoom?.rooms.note_gender}</Text>
            </View>
            <Text style={{fontWeight: 'bold', fontSize: 19}}>
              {dataRoom?.title}
            </Text>
            <View style={styles.row}>
              <Text style={{color: '#FF7613', fontWeight: 'bold'}}>
                {formatCurrency(dataRoom?.rooms.room_price)}/Tháng
              </Text>
              <Icon4
                name="heart-circle"
                style={{marginLeft: 200}}
                size={32}
                color={iconColor}
                onPress={handleIconPress}></Icon4>
            </View>
          </View>
          {/* Phần địa chỉ */}
          <View style={styles.infoaddress}>
            <View style={styles.row}>
              <Icon2 name="place" size={20} color={orange}></Icon2>
              <Text style={styles.txt}>{dataRoom?.rooms.address}</Text>
            </View>
            <View style={styles.row}>
              <Icon2 name="phone-android" size={20} color={orange}></Icon2>
              <Text style={styles.txt}>{dataRoom?.rooms.phone_number}</Text>
            </View>
          </View>
          {/* Phần thông tin */}
          <View style={styles.inforoom}>
            <View style={styles.column}>
              <Text style={styles.infotxt}>Tầng</Text>
              <Text style={styles.info2}>{dataRoom?.rooms.floor}</Text>
            </View>

            <View style={styles.column}>
              <Text style={styles.infotxt}>Diện tích</Text>
              <Text style={styles.info2}>
                {dataRoom?.rooms.area_width} x {dataRoom?.rooms.area_height}
              </Text>
            </View>

            <View style={styles.column}>
              <Text style={styles.infotxt}>Đặt cọc</Text>
              <Text style={styles.info2}>
                {formatCurrency(dataRoom?.rooms.deposit_price)}
              </Text>
            </View>

            <View style={styles.column}>
              <Text style={styles.infotxt}>Số người</Text>
              <Text style={styles.info2}>
                {dataRoom?.rooms.number_of_people}
              </Text>
            </View>
          </View>
          {/* Phần dịch vụ */}
          <View style={styles.service}>
            <View style={styles.row}>
              <Icon5 name="customerservice" size={25} color={orange}></Icon5>
              <Text style={{marginLeft: 10, fontWeight: 'bold'}}>
                PHÍ DỊCH VỤ
              </Text>
            </View>
          </View>
          {/* Phần chi tiết */}
          <View style={styles.detail}>
            <View style={styles.row}>
              <Icon name="newspaper-o" size={25} color={orange}></Icon>
              <Text style={{marginLeft: 10, fontWeight: 'bold'}}>CHI TIẾT</Text>
            </View>
            <Text style={{marginLeft: 5}}>{dataRoom?.rooms.note}</Text>
          </View>
          {/* Phần tiện nghi */}
          <Cardaccount
            name={dataRoom?.accounts.customer_name || ''}
            avatar={
              dataRoom?.accounts.avatar ||
              'https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg'
            }></Cardaccount>
          {/* Phần tiện nghi */}
          <View style={styles.service}>
            <View style={styles.row}>
              <Icon2
                name="electrical-services"
                size={25}
                color={orange}></Icon2>
              <Text style={{marginLeft: 10, fontWeight: 'bold'}}>
                TIỆN NGHI
              </Text>
            </View>
          </View>
          {/* Phần nội thất */}
          <View style={styles.service}>
            <View style={styles.row}>
              <Icon2
                name="home-repair-service"
                size={25}
                color={orange}></Icon2>
              <Text style={{marginLeft: 10, fontWeight: 'bold'}}>DỊCH VỤ</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View>
        <BottomDetail />
      </View>
    </View>
  );
}

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#DDDDDD',
  },
  imgmain: {
    height: 0.4 * height,
    width: width,
  },
  imgsuport: {
    width: '100%',
    height: '100%',
  },
  borderscroll: {
    backgroundColor: '#DDDDDD',
    height: 0.15 * height,
    marginBottom: 4,
  },
  borderimg: {
    marginRight: 4,
    backgroundColor: 'white',
    padding: 4,
    height: 0.15 * height,
    width: 0.35 * width,
  },
  infotitle: {
    width: width,
    height: height * 0.15,
    backgroundColor: 'white',
    //Viền
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  row: {
    marginTop: 10,
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoaddress: {
    marginTop: 5,
    width: width,
    height: height * 0.12,
    backgroundColor: 'white',
    //Viền
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  txt: {
    marginLeft: 10,
  },
  inforoom: {
    marginTop: 5,
    width: width,
    height: height * 0.12,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    //Viền
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  column: {
    alignItems: 'center',
    width: 0.25 * width,
    height: 80,
  },
  infotxt: {
    fontSize: 15,
    color: '#777777',
    fontWeight: 'bold',
    marginBottom: 20,
    //Viền
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  info2: {
    color: '#FF7613',
  },
  //Phần dịch vụ
  service: {
    marginTop: 5,
    width: '100%',
    height: height * 0.15,
    backgroundColor: 'white',
    //Viền
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  //Phần chi tiết
  detail: {
    marginTop: 5,
    width: '100%',
    height: height * 0.15,
    backgroundColor: 'white',
    //Viền
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  //Phần thông tin khách hàng
});
