import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {styles} from './styles/HomeStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import CardSearch from '../components/CardSearch';
import Slider from '../components/Slider';
import {SearchContext} from '../contexts/SearchContext';
import {District, DataItem1} from '../assets/types/PropTypes';
import CustomModalProvine from '../components/CustomModalProvine';
import {
  districtsOfHCMC,
  districtsOfDaNang,
  districtsOfHaNoi,
  scrollData,
} from '../assets/Datas/HomeData';
import {checkProvince, renderCards} from '../assets/Services/HomeService';
import CardAddress from '../components/CardAddress';
import CardPost from '../components/CardPost';

const {width, height} = Dimensions.get('window');
export default function HomeScreen({navigation}: any): React.JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const searchContext = useContext(SearchContext);

  const [data, setData] = useState<DataItem1[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://qlphong-tro-production.up.railway.app/posts',
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onPressSearch = () => {
    console.log('xin chao');
    console.log(data);
  };
  const onpressDetail = () => {
    navigation.navigate('Detail');
  };

  const districtsToShow: District[] = checkProvince({
    provinceroot: searchContext?.Province ?? ' ',
    districtHCM: districtsOfHCMC,
    districtDN: districtsOfDaNang,
    districtHN: districtsOfHaNoi,
  });

  useEffect(() => {
    const animateHeader = () => {
      Animated.timing(animatedValue, {
        toValue: showHeader ? 1 : 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    };
    animateHeader();
    fetchData();
  }, [showHeader, animatedValue]);

  const handleScroll = (event: any) => {
    const position = event.nativeEvent.contentOffset.y;
    console.log(position);
    const show = position > 350;
    setShowHeader(show);
  };

  const animatedStyleOpen = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [-100, 0],
        }),
      },
    ],
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Animated.View style={[styles.animatedContainer, animatedStyleOpen]}>
        <CardSearch navigation={navigation}></CardSearch>
      </Animated.View>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        <View>
          <Slider></Slider>
        </View>
        {/* Card search */}
        <View style={styles.cardsearch}>
          <View style={[styles.row, {height: '25%'}]}>
            <TouchableOpacity
              style={styles.layout1}
              activeOpacity={0.8}
              onPress={() => {
                setModalVisible(true);
              }}>
              <Icon2 name="place" size={25} color="#ff7911"></Icon2>
              <Text style={{color: '#ff7911'}}>{searchContext?.Province}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.txtplace} activeOpacity={0.9}>
              <Text onPress={onPressSearch}>Tìm kiếm tin đăng </Text>
            </TouchableOpacity>
          </View>

          <CustomModalProvine
            visible={modalVisible}
            onClose={() => {
              setModalVisible(false);
              console.log('xin chao');
            }}
          />

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={[
                styles.row,
                {
                  height: height * 0.1,
                  width: width,
                  marginTop: 10,
                },
              ]}>
              {scrollData.map((item, index) => (
                <View
                  key={index}
                  style={{
                    height: '100%',
                    width: '20%',
                    marginLeft: 10,
                  }}>
                  <Image
                    source={item.nameIcon}
                    resizeMode="contain"
                    style={{
                      height: '60%',
                      width: '100%',
                    }}></Image>
                  <Text
                    style={{
                      textAlign: 'center',
                      height: '40%',
                      fontSize: 11,
                      marginTop: 5,
                    }}>
                    {item.text}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        {/*  */}
        <View style={styles.layout2}>
          <View style={styles.row}>
            <Icon3
              name="place-of-worship"
              size={20}
              color="#ff7911"
              style={styles.icon}></Icon3>
            <Text style={styles.txticon}>Khám phá</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {districtsToShow.map((item, index) => (
              <CardAddress
                key={index}
                id={item.id}
                name={item.name}
                link={item.link}></CardAddress>
            ))}
          </ScrollView>
        </View>
        <View>
          <View style={styles.row}>
            <Icon
              name="newspaper-o"
              size={20}
              color="#ff7911"
              style={styles.icon}></Icon>
            <Text style={styles.txticon}>Bài viết nổi bật</Text>
          </View>
        </View>
        <View style={{marginBottom: height * 0.02}}>
          {/* <CardPost onPress={onpressDetail}  /> */}
          {data.map(item => (
            <CardPost key={item.id} item={item} onPress={onpressDetail} />
          ))}
        </View>

        <View>
          <View style={styles.row}>
            <Icon
              name="newspaper-o"
              size={20}
              color="#ff7911"
              style={styles.icon}></Icon>
            <Text style={styles.txticon}>Bài viết nổi bật</Text>
          </View>
        </View>
        <View
          style={{
            width: width,
          }}>
          {renderCards()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
