import React, {useContext, useEffect, useRef} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../assets/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon5 from 'react-native-vector-icons/AntDesign';
import {listItem} from '../assets/Datas/AcountData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../contexts/AuthContext';

const {height, width} = Dimensions.get('window');

function AccountScreen({navigation}: any): React.JSX.Element {
  const authContext = useContext(AuthContext);

  const goToCreateRoom = () => {
    navigation.navigate('CreateRoom');
  };
  const goToCreatePost = () => {
    navigation.navigate('CreatePost');
  };
  const goTo = (name: string) => {
    navigation.navigate(name);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <ImageBackground
          source={require('../assets/images/icon/backgroundaccount.png')}
          style={styles.background}
          resizeMode="cover">
          {/* Card thông tin */}
          <TouchableOpacity
            style={[styles.row, styles.custom1]}
            activeOpacity={0.8}>
            <Text style={styles.txt}> Chuyển đổi tài khoản</Text>
            <Icon2
              name="swap-calls"
              style={styles.icon}
              size={20}
              color={Colors.primary}></Icon2>
          </TouchableOpacity>

          <View style={[styles.rowavatar]}>
            <Image
              source={{uri: authContext?.account?.avatar}}
              resizeMode="cover"
              style={styles.img}></Image>
            <View>
              <Text style={styles.txttitleava}>Xin chào</Text>
              <Text style={styles.txtname}>
                {authContext?.account?.customer_name}
              </Text>
            </View>
            <View style={styles.border2}>
              <Icon name="headphones" size={32} color={Colors.white}></Icon>
              <Text style={{color: Colors.white}}>Trợ giúp</Text>
            </View>
          </View>

          {/* Card thông số */}
          <View style={styles.borderinfo}>
            <View>
              <View style={styles.colborderinfo}>
                <Text style={styles.title}>Số phòng</Text>
                <Text style={styles.num}>0</Text>
              </View>
              <View style={styles.colborderinfo}>
                <Text style={styles.title}>Số phòng đang cho thuê</Text>
                <Text style={styles.num}>0</Text>
              </View>
            </View>

            <View>
              <View style={styles.colborderinfo}>
                <Text style={styles.title}>Số người thuê</Text>
                <Text style={styles.num}>0</Text>
              </View>
              <View style={styles.colborderinfo}>
                <Text style={styles.title}>Số phòng trống</Text>
                <Text style={styles.num}>0</Text>
              </View>
            </View>
          </View>

          {/* Card chức năng */}
          <View style={styles.borderinfo2}>
            <View style={styles.rowcreate}>
              <TouchableOpacity
                style={styles.colborderinfo}
                activeOpacity={0.8}
                onPress={goToCreateRoom}>
                <Image
                  source={require('../assets/images/icon/taophong.png')}
                  resizeMode="contain"
                  style={styles.iconfunction}></Image>
                <Text>Tạo phòng</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.colborderinfo}
                activeOpacity={0.8}
                onPress={goToCreatePost}>
                <Image
                  source={require('../assets/images/icon/addpost.png')}
                  resizeMode="contain"
                  style={styles.iconfunction}></Image>
                <Text>Tạo bài đăng</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.colborderinfo}
                activeOpacity={0.8}>
                <Image
                  source={require('../assets/images/icon/contract.png')}
                  resizeMode="contain"
                  style={styles.iconfunction}></Image>
                <Text>Tạo hợp đồng</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.colborderinfo}
                activeOpacity={0.8}>
                <Image
                  source={require('../assets/images/icon/bill.png')}
                  resizeMode="contain"
                  style={styles.iconfunction}></Image>
                <Text>Tạo hóa đơn</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/*  */}
          <View style={styles.borderinfo3}>
            {listItem.map((item, index) => (
              <TouchableOpacity
                style={styles.row2}
                key={index}
                activeOpacity={0.8}
                onPress={() => goTo(item.screen)}>
                <Image
                  source={item.nameIcon}
                  resizeMode="contain"
                  style={styles.iconmenu}></Image>
                <Text style={styles.txtmenu}> {item.text}</Text>
                <Icon5 name="right" size={22}></Icon5>
              </TouchableOpacity>
            ))}
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}
export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  background: {
    flex: 1,
  },

  rowavatar: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  rowcreate: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  custom1: {
    marginLeft: -20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: height * 0.06,
    width: width * 0.6,
    height: height * 0.04,
    backgroundColor: Colors.white,
  },
  txt: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 10,
  },
  img: {
    width: 60,
    height: 60,
    marginLeft: width * 0.05,
    backgroundColor: 'yellow',
    borderRadius: 30,
  },
  txttitleava: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  txtname: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  border2: {
    alignItems: 'center',
  },

  borderinfo: {
    backgroundColor: Colors.white,
    width: width * 0.9,
    height: height * 0.2,
    borderRadius: 10,
    marginTop: height * 0.05,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
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
  borderinfo2: {
    backgroundColor: Colors.white,
    width: width * 0.9,
    height: height * 0.2,
    borderRadius: 10,
    marginTop: height * 0.05,

    paddingLeft: 10,

    alignSelf: 'center',
    justifyContent: 'center',
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
  borderinfo3: {
    backgroundColor: Colors.white,
    width: width * 0.8,
    height: height * 0.8,
    borderRadius: 10,
    marginTop: height * 0.05,
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 200,
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
  colborderinfo: {
    margin: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    marginBottom: 10,
    fontWeight: 'bold',
    color: Colors.back,
  },
  num: {
    fontWeight: 'bold',
    color: Colors.primary,
  },
  colborderfunction: {
    backgroundColor: 'red',
  },
  iconfunction: {
    width: 32,
    height: 32,
  },
  iconmenu: {
    width: 32,
    height: 32,
  },
  txtmenu: {
    width: width * 0.5,
    fontSize: 16,
  },
  row2: {
    height: height * 0.08,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: Colors.silver,
  },
});
