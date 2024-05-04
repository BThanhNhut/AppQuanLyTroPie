import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {Colors} from '../assets/Colors';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import React, {useRef} from 'react';

const {width, height} = Dimensions.get('window');

const FirstRoute = () => (
  <View style={{flex: 1}}>
    <Text>adjwsj</Text>
    <Text>adjwsj</Text>
  </View>
);
const SecondRoute = () => <View style={{flex: 1}} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function RentalPost({navigation}: any): React.JSX.Element {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const active = useRef(0);
  const hide = useRef(0);

  const [routes] = React.useState([
    {key: 'first', title: `Đang hoạt động (${active.current})`},
    {key: 'second', title: `Đã bị ẩn (${hide.current})`},
  ]);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: Colors.white}} // Đặt màu cho dấu hiệu chỉ ra tab đang được chọn
      style={{backgroundColor: Colors.primary}} // Đặt màu nền cho thanh tab
      activeColor={Colors.white} // Màu chữ cho tab được chọn
      inactiveColor={Colors.silver} // Màu chữ cho tab không được chọn
    />
  );

  const gotoCreateRoom = () => {
    navigation.navigate('CreateRoom');
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={styles.search}>
          <Image
            source={require('../assets/images/icon/search.png')}
            style={styles.img}
            resizeMode="contain"
          />
          <TextInput style={styles.txt} placeholder="Tìm kiếm" />
        </View>

        <TouchableOpacity
          style={{width: 32, height: 32, marginRight: 10}}
          activeOpacity={0.8}
          onPress={gotoCreateRoom}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../assets/images/icon/Add.png')}></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          renderTabBar={renderTabBar} // Sử dụng renderTabBar để tô màu cho thanh tab
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  search: {
    margin: 20,
    width: width * 0.8,
    height: height * 0.05,
    backgroundColor: Colors.silver2,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  img: {
    marginLeft: 10,
    marginRight: 10,
    width: 24,
    height: 24,
  },
  txt: {
    height: '100%',
  },
  content: {
    flex: 1,
    width: width,
  },
});
