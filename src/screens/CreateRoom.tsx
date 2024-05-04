import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../assets/Colors';
// import CardServiceItem from '../components/cardserviceitem';
import Icon5 from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

function CreateRoom() {
  const data = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',

    // Thêm nhiều mục khác nếu cần
  ];

  const itemcard = {
    name: 'Điện',
    price: 10000,
    measure: 'kwh',
    icon: 'abcxbz',
    note: 'đây là note',
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {/* Thông tin phòng */}
        <View style={styles.card}>
          <Text style={styles.title}>Thông tin phòng</Text>
          <View style={styles.box}>
            <Text style={styles.label}> Số/Tên phòng</Text>
            <View style={styles.row}>
              <Image
                source={require('../assets/images/Add.png')}
                style={styles.icon}
                resizeMode="contain"></Image>
              <TextInput
                style={styles.input}
                placeholder="Nhập số/ tên phòng"></TextInput>
            </View>
          </View>

          <View style={styles.box}>
            <Text style={styles.label}> Địa chỉ</Text>
            <View style={styles.row}>
              <Image
                source={require('../assets/images/Add.png')}
                style={styles.icon}
                resizeMode="contain"></Image>
              <TextInput
                style={styles.input}
                placeholder="Nhập số/ tên phòng"></TextInput>
            </View>
          </View>

          <View style={styles.box}>
            <Text style={styles.label}> Giá phòng</Text>
            <View style={styles.row}>
              <Image
                source={require('../assets/images/Add.png')}
                style={styles.icon}
                resizeMode="contain"></Image>
              <TextInput
                style={styles.input}
                placeholder="Nhập số/ tên phòng"></TextInput>
            </View>
          </View>

          <View style={styles.box}>
            <Text style={styles.label}> Tiền cọc</Text>
            <View style={styles.row}>
              <Image
                source={require('../assets/images/Add.png')}
                style={styles.icon}
                resizeMode="contain"></Image>
              <TextInput
                style={styles.input}
                placeholder="Nhập số/ tên phòng"></TextInput>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Thông tin dịch vụ</Text>

          <View style={styles.container2}>
            {data.map((item, index) => (
              //   <CardServiceItem key={index} service={itemcard}></CardServiceItem>
              <View></View>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Thông tin bài đăng</Text>
          <View style={styles.container2}>
            {data.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.typeroom}
                activeOpacity={0.8}>
                <Text>xin chào</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.rowonly}>
            <TouchableOpacity style={styles.camera} activeOpacity={0.7}>
              <Icon5 name="camerao" size={25} color={Colors.primary}></Icon5>
            </TouchableOpacity>
            <View style={{padding: 10, marginTop: height * 0.05}}>
              <Text>Ảnh phòng</Text>
              <Text>Tối đa 10 ảnh</Text>
            </View>
          </View>

          <View style={[styles.box, {marginTop: 20}]}>
            <Text style={[styles.label]}> Giới tính </Text>
            <View style={styles.row}>
              <Image
                source={require('../assets/images/Add.png')}
                style={styles.icon}
                resizeMode="contain"></Image>
              <TextInput
                style={styles.input}
                placeholder="Nhập số/ tên phòng"></TextInput>
            </View>
          </View>

          <View style={[styles.box, {marginTop: 20}]}>
            <Text style={[styles.label]}> Diện tích </Text>
            <View style={styles.row}>
              <Image
                source={require('../assets/images/Add.png')}
                style={styles.icon}
                resizeMode="contain"></Image>
              <TextInput
                style={styles.input}
                placeholder="Nhập số/ tên phòng"></TextInput>
            </View>
          </View>

          <View style={styles.box}>
            <Text style={styles.label}> Số điện thoại</Text>
            <View style={styles.row}>
              <Image
                source={require('../assets/images/Add.png')}
                style={styles.icon}
                resizeMode="contain"></Image>
              <TextInput
                style={styles.input}
                placeholder="Nhập số/ tên phòng"></TextInput>
            </View>
          </View>

          <View style={styles.box}>
            <Text style={styles.label}> Tầng</Text>
            <View style={styles.row}>
              <Image
                source={require('../assets/images/Add.png')}
                style={styles.icon}
                resizeMode="contain"></Image>
              <TextInput
                style={styles.input}
                placeholder="Nhập số/ tên phòng"></TextInput>
            </View>
          </View>

          <View style={styles.box}>
            <Text style={styles.label}> Sức chứa </Text>
            <View style={styles.row}>
              <Image
                source={require('../assets/images/Add.png')}
                style={styles.icon}
                resizeMode="contain"></Image>
              <TextInput
                style={styles.input}
                placeholder="Nhập số/ tên phòng"></TextInput>
            </View>
          </View>

          <View style={styles.box}>
            <Text style={styles.label}> Mô tả</Text>
            <View style={styles.row}>
              <Image
                source={require('../assets/images/Add.png')}
                style={styles.icon}
                resizeMode="contain"></Image>
              <TextInput
                style={styles.input}
                placeholder="Nhập số/ tên phòng"></TextInput>
            </View>
          </View>

          <View style={styles.box}>
            <Text style={styles.label}> Số chỗ để xe</Text>
            <View style={styles.row}>
              <Image
                source={require('../assets/images/Add.png')}
                style={styles.icon}
                resizeMode="contain"></Image>
              <TextInput
                style={styles.input}
                placeholder="Nhập số/ tên phòng"></TextInput>
            </View>
          </View>

          <View style={[styles.rowonly, {marginTop: 15}]}>
            {/* <Image
              source={require('../assets/thumbs-up.png')}
              style={[styles.icon, {width: 24, height: 24}]}
              resizeMode="contain"></Image> */}
            <Text style={{fontWeight: 'bold'}}> Tiện nghi</Text>
          </View>

          <View style={styles.container3}>
            {data.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.convenientcard}
                activeOpacity={0.8}>
                {/* <Image
                  source={require('../assets/icons8-room-24.png')}
                  style={styles.icon}
                  resizeMode="contain"></Image> */}
                <Text>xin chào</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={[styles.rowonly, {marginTop: 15}]}>
            {/* <Image
              source={require('../assets/thumbs-up.png')}
              style={[styles.icon, {width: 24, height: 24}]}
              resizeMode="contain"></Image>
            <Text style={{fontWeight: 'bold'}}> Nội thất</Text> */}
          </View>

          <View style={styles.container3}>
            {data.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.convenientcard}
                activeOpacity={0.8}>
                {/* <Image
                  source={require('../assets/icons8-room-24.png')}
                  style={styles.icon}
                  resizeMode="contain"></Image> */}
                <Text>xin chào</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default CreateRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.silver2,
  },
  box: {
    width: '100%',
    marginBottom: 15,
  },
  title: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 17,
    color: Colors.primary,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowonly: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
    marginRight: 10,
  },
  input: {
    height: height * 0.06,
    borderBottomWidth: 0.2,
    width: '80%',
  },
  scroll: {},
  card: {
    width: width,
    marginBottom: 5,
    backgroundColor: Colors.white,
  },
  item: {
    width: '33%', // Each item takes 25% of the container width (4 items in a row)
    padding: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  container2: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container3: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  typeroom: {
    borderWidth: 1,
    width: '30%',
    height: 30,
    margin: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    marginTop: height * 0.05,
    width: width * 0.3,
    height: height * 0.15,
    borderWidth: 1,
    marginLeft: 15,
    borderRadius: 10,
    borderStyle: 'dashed',
    borderColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  convenientcard: {
    width: '40%',
    height: height * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
    borderColor: Colors.silver2,
  },
});
