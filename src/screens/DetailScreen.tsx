import React, {useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ColorValue,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/Ionicons';
import Icon5 from 'react-native-vector-icons/AntDesign';
// Component
import Cardaccount from '../components/CardAccount';
import BottomDetail from '../components/BottomDetail';
import {
  AmenitiesItem,
  CardServiceItemProps,
  FurnitureItem,
  Posts,
} from '../assets/types/PropTypes';
import CardServiceItem from '../components/CardServiceItem';
import axios from 'axios';
import {
  addFavorite,
  removeFavorite,
  showToastaddfavorites,
  showToastremovefavorites,
} from './Services/DetailService';
import {AlertNotificationRoot} from 'react-native-alert-notification';
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
  const [mainImage, setmainImage] = useState<string>();
  const [serviceItem, setserviceItem] = useState<CardServiceItemProps[]>([]);
  const [amenitiesItem, setamenitiesItem] = useState<AmenitiesItem[]>([]);
  const [furnituresItem, setfurnituresItem] = useState<FurnitureItem[]>([]);
  const [listImage, setlistImage] = useState<string[]>([]);

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const {id_post} = route.params;
  let id_account = 1;

  const handleIconPress = () => {
    const newColor = iconColor === '#888888' ? '#FF0000' : '#888888';
    if (iconColor === '#888888') {
      addFavorite(1, id_post);
      showToastaddfavorites();
      setIconColor(newColor);
    } else {
      showToastremovefavorites();
      removeFavorite(1, id_post);
      setIconColor(newColor);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Gọi tất cả các API
        const responses = await Promise.all([
          axios.get(
            `https://qlphong-tro-production.up.railway.app/posts/${id_post}`,
          ),
          axios.get(
            `https://qlphong-tro-production.up.railway.app/rooms/${id_post}/images`,
          ),
          axios.get(
            `https://qlphong-tro-production.up.railway.app/rooms/${id_post}/services`,
          ),
          axios.get(
            `https://qlphong-tro-production.up.railway.app/rooms/${id_post}/amenities`,
          ),
          axios.get(
            `https://qlphong-tro-production.up.railway.app/rooms/${id_post}/furniture`,
          ),
          axios.get(
            `https://qlphong-tro-production.up.railway.app/rooms/${id_account}/${id_post}/favorites`,
          ),
        ]);
        // Lưu trữ dữ liệu từ các API vào state
        setdataRoom(responses[0].data);
        setlistImage(responses[1].data);
        setserviceItem(responses[2].data);
        setamenitiesItem(responses[3].data);
        setfurnituresItem(responses[4].data);
        const apiResponse = responses[5].data;
        const newIconColor = apiResponse ? '#FF0000' : '#888888';
        setIconColor(newIconColor);
        // Đánh dấu đã kết thúc load dữ liệu
        setmainImage(dataRoom?.rooms.image);
        setIsDataLoaded(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // const fetchData = async (parameter: number) => {
  //   // setLoading(true);
  //   try {
  //     const response = await fetch(
  //       `https://qlphong-tro-production.up.railway.app/posts/${parameter}`,
  //     );
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch data');
  //     }
  //     const result = await response.json();
  //     setdataRoom(result);
  //     setmainImage(result?.rooms.image);
  //     setIsDataLoaded(true);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // const fetchImage = async (id: number) => {
  //   try {
  //     const response = await fetch(
  //       `https://qlphong-tro-production.up.railway.app/rooms/${id}/images`,
  //     );
  //     const result = await response.json();
  //     setlistImage(result);
  //   } catch (error) {
  //     console.error('error fetching data:', error);
  //   }
  // };

  // const fetchServiceItem = async (id: number) => {
  //   try {
  //     const response = await fetch(
  //       `https://qlphong-tro-production.up.railway.app/rooms/${id}/services`,
  //     );
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch data');
  //     }
  //     const result = await response.json();
  //     setserviceItem(result);
  //   } catch (error) {
  //     console.log('Error fetching data:', error);
  //   }
  // };

  // const fetchAmenitiesItem = async (id: number) => {
  //   try {
  //     const response = await fetch(
  //       `https://qlphong-tro-production.up.railway.app/rooms/${id}/amenities`,
  //     );
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch data');
  //     }
  //     const result = await response.json();
  //     setamenitiesItem(result);
  //     console.log(result);
  //   } catch (error) {
  //     console.log('Error fetching data:', error);
  //   }
  // };

  // const fetchFurnituresItem = async (id: number) => {
  //   try {
  //     const response = await fetch(
  //       `https://qlphong-tro-production.up.railway.app/rooms/${id}/furniture`,
  //     );
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch data');
  //     }
  //     const result = await response.json();
  //     setamenitiesItem(result);
  //   } catch (error) {
  //     console.log('Error fetching data:', error);
  //   }
  // };

  const handleChangeImage = (image: string) => {
    console.log('Vap change image');
    setmainImage(image);
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <Image
            source={{
              uri: isDataLoaded
                ? mainImage
                : 'https://static.thenounproject.com/png/4653780-200.png',
            }}
            style={styles.imgmain}
            resizeMode="cover"></Image>
          <View style={styles.borderscroll}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                style={styles.borderimg}
                onPress={() => handleChangeImage(dataRoom?.rooms.image || '')}>
                <Image
                  source={{
                    uri:
                      dataRoom?.rooms.image ||
                      'https://static.thenounproject.com/png/4653780-200.png',
                  }}
                  style={styles.imgsuport}></Image>
              </TouchableOpacity>
              {listImage.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.borderimg}
                  onPress={() => handleChangeImage(item)}>
                  <Image
                    source={{
                      uri:
                        item ||
                        'https://static.thenounproject.com/png/4653780-200.png',
                    }}
                    style={styles.imgsuport}
                    resizeMode="cover"></Image>
                </TouchableOpacity>
              ))}
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
                style={{marginLeft: width * 0.45}}
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
            <View style={styles.servicedetail}>
              {serviceItem.map(item => (
                <CardServiceItem
                  key={item.id}
                  id={item.id}
                  services={item.services}
                />
              ))}
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
          <View style={styles.amenitie}>
            <View style={styles.row}>
              <Icon2
                name="electrical-services"
                size={25}
                color={orange}></Icon2>
              <Text style={{marginLeft: 10, fontWeight: 'bold'}}>
                TIỆN NGHI
              </Text>
            </View>
            <View style={styles.servicedetail}>
              {amenitiesItem.map((item, index) => (
                <View style={styles.cardamenities} key={index}>
                  <View style={{alignItems: 'center'}}>
                    <Image
                      style={{width: 24, height: 24}}
                      resizeMode="contain"
                      source={{uri: item.amenities.icon}}
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: 'bold',
                      }}>
                      {item.amenities.amenity_name}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
          {/* Phần nội thất */}
          <View style={styles.furniture}>
            <View style={styles.row}>
              <Icon2
                name="home-repair-service"
                size={25}
                color={orange}></Icon2>
              <Text style={{marginLeft: 10, fontWeight: 'bold'}}>NỘI THÁT</Text>
            </View>
            <View style={styles.servicedetail}>
              {furnituresItem.map((item, index) => (
                <View style={styles.cardamenities} key={index}>
                  <View style={{alignItems: 'center'}}>
                    <Image
                      style={{width: 24, height: 24}}
                      resizeMode="contain"
                      source={{uri: item.furniture.icon}}
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: 'bold',
                      }}>
                      {item.furniture.furniture_name}
                    </Text>
                  </View>
                </View>
              ))}
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
    flex: 1,
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
  amenitie: {
    marginTop: 5,
    width: '100%',
    flex: 1,
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
  furniture: {
    marginTop: 5,
    width: '100%',
    flex: 1,
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
  servicedetail: {
    width: width,
    height: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginBottom: 20,
    marginTop: 10,
  },
  cardamenities: {
    width: width * 0.2,
    height: height * 0.1,
    margin: 2,
  },
});
