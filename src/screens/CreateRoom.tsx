import React, {useEffect, useMemo, useState} from 'react';
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
import axios from 'axios';
import {
  Amenities,
  AmenitiesItem,
  Furniture,
  ImageSelect,
  ServiceItem,
  Types,
} from '../assets/types/PropTypes';
import CardServiceEdit from '../components/CardServiceEdit';
import {RadioButtonProps, RadioGroup} from 'react-native-radio-buttons-group';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

const {width, height} = Dimensions.get('window');

function CreateRoom() {
  const [serviceItem, setserviceItem] = useState<ServiceItem[]>([]);
  const [amenities, setamenities] = useState<Amenities[]>([]);
  const [furniture, setfurniture] = useState<Furniture[]>([]);

  const [types, settypes] = useState<Types[]>([]);
  const [selectedId, setSelectedId] = useState<string | undefined>('0');

  //id button
  const [selectedButtons, setSelectedButtons] = useState<number[]>([]);
  const [selectedButtons2, setSelectedButtons2] = useState<number[]>([]);

  const [urlimage, seturlimage] = useState<ImageSelect[]>([]);
  const [height, setHeight] = useState<number>(100);
  const [width, setWidth] = useState<number>();

  const id_post = 1;

  console.log(selectedButtons2);

  const handleButtonPress = (buttonValue: number) => {
    if (selectedButtons.includes(buttonValue)) {
      // Nếu nút đã được chọn trước đó, loại bỏ khỏi mảng selectedButtons
      setSelectedButtons(selectedButtons.filter(item => item !== buttonValue));
    } else {
      // Nếu nút chưa được chọn trước đó, thêm vào mảng selectedButtons
      setSelectedButtons([...selectedButtons, buttonValue]);
    }
  };

  const handleButtonPress2 = (buttonValue: number) => {
    if (selectedButtons2.includes(buttonValue)) {
      // Nếu nút đã được chọn trước đó, loại bỏ khỏi mảng selectedButtons
      setSelectedButtons2(
        selectedButtons2.filter(item => item !== buttonValue),
      );
    } else {
      // Nếu nút chưa được chọn trước đó, thêm vào mảng selectedButtons
      setSelectedButtons2([...selectedButtons2, buttonValue]);
    }
  };

  const radioButtons: RadioButtonProps[] = useMemo(
    () =>
      types.map((item, index) => ({
        id: `${index}`,
        label: item.type_name,
        value: item.id.toString(),
        size: 16,
        color: Colors.primary,
      })),
    [types],
  );

  const handleImagePicker = () => {
    ImagePicker.openPicker({
      width,
      height,
      cropping: true,
      multiple: true,
    })
      .then(images => {
        const selectedImages = images.map(image => ({
          uri: image.path,
          width: image.width,
          height: image.height,
        }));
        seturlimage(selectedImages);
        console.log(selectedImages);
        uploadImagesToFirebase(selectedImages);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const uploadImagesToFirebase = async (
    images: {uri: string; width: number; height: number}[],
  ) => {
    try {
      const promises = images.map(async (image, index) => {
        const imageName = `image_${index}`;
        console.log(image);

        // Xây dựng đường dẫn đầy đủ đến thư mục bạn muốn lưu trữ hình ảnh
        const imageRef = storage().ref().child(`images/${imageName}`);

        // Tải tệp hình ảnh lên Firebase Storage
        const response = await fetch(image.uri);
        const blob = await response.blob();
        await imageRef.put(blob);

        // Lấy URL của hình ảnh đã tải lên
        const url = await imageRef.getDownloadURL();
        return {url, imageName};
      });
      const uploadedImages = await Promise.all(promises);
      console.log('Uploaded Images:', uploadedImages);
    } catch (error) {
      console.error('Error uploading images to Firebase:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const responses = await Promise.all([
        axios.get(`https://qlphong-tro-production.up.railway.app/services`),
        axios.get(`https://qlphong-tro-production.up.railway.app/furniture`),
        axios.get(`https://qlphong-tro-production.up.railway.app/amenities`),
        axios.get(`https://qlphong-tro-production.up.railway.app/types`),
      ]);

      setserviceItem(responses[0].data);
      setfurniture(responses[1].data);
      setamenities(responses[2].data);
      settypes(responses[3].data);
      console.log(responses[2].data);
    } catch (error) {
      console.log('fetch data error', error);
    }
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
                source={require('../assets/images/icon/tenphong.png')}
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
                source={require('../assets/images/icon/diachi.png')}
                style={styles.icon}
                resizeMode="contain"></Image>
              <TextInput
                style={styles.input}
                placeholder="Nhập địa chỉ"></TextInput>
            </View>
          </View>

          <View style={styles.box}>
            <Text style={styles.label}> Giá phòng</Text>
            <View style={styles.row}>
              <Image
                source={require('../assets/images/icon/giaphong.png')}
                style={styles.icon}
                resizeMode="contain"></Image>
              <TextInput
                style={styles.input}
                placeholder="nhập giá phòng"
                keyboardType="numeric"></TextInput>
            </View>
          </View>

          <View style={styles.box}>
            <Text style={styles.label}> Tiền cọc</Text>
            <View style={styles.row}>
              <Image
                source={require('../assets/images/icon/giaphong.png')}
                style={styles.icon}
                resizeMode="contain"></Image>
              <TextInput
                style={styles.input}
                placeholder="Nhập tiền cọc"
                keyboardType="numeric"></TextInput>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Thông tin dịch vụ</Text>

          <View style={styles.container2}>
            {serviceItem.map((item, index) => (
              <CardServiceEdit key={index} services={item} />
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Thông tin bài đăng</Text>
          <Text
            style={{color: Colors.silver1, marginLeft: 10, marginBottom: 10}}>
            Loại phòng
          </Text>
          <View style={styles.container2}>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={setSelectedId}
              selectedId={selectedId}
              layout="row"
            />
          </View>
          <View style={styles.rowonly}>
            <TouchableOpacity
              style={styles.camera}
              activeOpacity={0.7}
              onPress={handleImagePicker}>
              <Icon5 name="camerao" size={25} color={Colors.primary}></Icon5>
            </TouchableOpacity>
            <View style={{padding: 10, marginTop: height * 0.26}}>
              {urlimage.length > 0 ? (
                <View>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {urlimage.map((item, index) => (
                      <Image
                        key={index}
                        source={{uri: item.uri}}
                        style={{
                          width: 100,
                          height: 100,
                          marginRight: 10,
                          borderRadius: 10,
                        }}
                      />
                    ))}
                  </ScrollView>
                </View>
              ) : (
                <View>
                  <Text>Chọn dưới 10 tấm</Text>
                </View>
              )}
            </View>
          </View>

          <View style={[styles.box, {marginTop: 20}]}>
            <Text style={[styles.label]}> Giới tính </Text>
            <View style={styles.row}>
              <Image
                source={require('../assets/images/icon/gioitinh.png')}
                style={styles.icon}
                resizeMode="contain"></Image>
              <TextInput
                style={styles.input}
                placeholder="Nhập giới tính"
                keyboardType="numeric"></TextInput>
            </View>
          </View>

          <View style={[styles.box, {marginTop: 20}]}>
            <Text style={[styles.label]}> Chiều dài (m) </Text>
            <View style={styles.row}>
              <Image
                source={require('../assets/images/icon/dientich.png')}
                style={styles.icon}
                resizeMode="contain"></Image>
              <TextInput
                style={styles.input}
                placeholder="Nhập chiều dài"
                keyboardType="numeric"></TextInput>
            </View>
          </View>

          <View style={[styles.box, {marginTop: 20}]}>
            <Text style={[styles.label]}> Chiều rộng (m) </Text>
            <View style={styles.row}>
              <Image
                source={require('../assets/images/icon/dientich.png')}
                style={styles.icon}
                resizeMode="contain"></Image>
              <TextInput
                style={styles.input}
                placeholder="Nhập chiều động"></TextInput>
            </View>
          </View>

          <View style={styles.box}>
            <Text style={styles.label}> Số điện thoại</Text>
            <View style={styles.row}>
              <Image
                source={require('../assets/images/icon/sodienthoai.png')}
                style={styles.icon}
                resizeMode="contain"></Image>
              <TextInput
                style={styles.input}
                placeholder="Nhập số điện thử"
                keyboardType="numeric"></TextInput>
            </View>
          </View>

          <View style={styles.box}>
            <Text style={styles.label}> Tầng</Text>
            <View style={styles.row}>
              <Image
                source={require('../assets/images/icon/tang.png')}
                style={styles.icon}
                resizeMode="contain"></Image>
              <TextInput
                style={styles.input}
                placeholder="Nhập tầng"
                keyboardType="numeric"></TextInput>
            </View>
          </View>

          <View style={styles.box}>
            <Text style={styles.label}> Sức chứa </Text>
            <View style={styles.row}>
              <Image
                source={require('../assets/images/icon/suchua.png')}
                style={styles.icon}
                resizeMode="contain"></Image>
              <TextInput
                style={styles.input}
                placeholder="Nhập sức chứa"
                keyboardType="numeric"></TextInput>
            </View>
          </View>

          <View style={styles.box}>
            <Text style={styles.label}> Mô tả</Text>
            <View style={styles.row}>
              <Image
                source={require('../assets/images/icon/mota.png')}
                style={styles.icon}
                resizeMode="contain"></Image>
              <TextInput style={styles.input} placeholder="Mô tả"></TextInput>
            </View>
          </View>

          <View style={styles.box}>
            <Text style={styles.label}> Số chỗ để xe</Text>
            <View style={styles.row}>
              <Image
                source={require('../assets/images/icon/bike.png')}
                style={styles.icon}
                resizeMode="contain"></Image>
              <TextInput
                style={styles.input}
                placeholder="Nhập số chỗ để xe"
                keyboardType="numeric"></TextInput>
            </View>
          </View>

          <View style={[styles.rowonly, {marginTop: 15}]}>
            <Image
              source={require('../assets/images/icon/auction.png')}
              style={[styles.icon, {width: 24, height: 24}]}
              resizeMode="contain"></Image>
            <Text style={{fontWeight: 'bold'}}> Tiện nghi</Text>
          </View>

          <View style={styles.container3}>
            {amenities.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.button,
                  selectedButtons.includes(item.id) && styles.selectedButton,
                ]}
                onPress={() => handleButtonPress(item.id)}>
                <Image
                  source={require('../assets/images/icon/Add.png')}
                  style={{width: 24, height: 24}}></Image>
                <Text>{item.amenity_name}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={[styles.rowonly, {marginTop: 15}]}>
            <Image
              source={require('../assets/images/icon/furniture.png')}
              style={[styles.icon, {width: 24, height: 24}]}
              resizeMode="contain"></Image>
            <Text style={{fontWeight: 'bold'}}> Nội thất</Text>
          </View>

          <View style={styles.container3}>
            {furniture.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.button,
                  selectedButtons2.includes(item.id) && styles.selectedButton,
                ]}
                onPress={() => handleButtonPress2(item.id)}>
                <Image
                  source={require('../assets/images/icon/Add.png')}
                  style={{width: 24, height: 24}}></Image>
                <Text>{item.furniture_name}</Text>
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
    marginBottom: 10,
  },
  icon: {
    width: 24,
    height: 24,
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
    width: '33%',
    padding: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  container2: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container3: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  typeroom: {
    borderWidth: 1,
    width: '30%',
    height: 30,
    margin: 5,
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
  // thiet lap
  button: {
    marginLeft: 10,
    width: width * 0.45,
    height: height * 0.05,
    paddingHorizontal: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.silver,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedButton: {
    // Màu của nút khi được chọn
    borderColor: Colors.primary,
  },
});
