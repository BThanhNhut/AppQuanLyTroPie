import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../assets/Colors';
const {width, height} = Dimensions.get('window');

function CardPost2() {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5}>
      <Image
        style={styles.image}
        source={require('../assets/images/hinhtro.jpg')}
        resizeMode="cover"></Image>
      <View style={styles.information}>
        <Text style={styles.title}>Căng nhà số 1 vũ trụ dài</Text>
        <View style={styles.row}>
          <Icon
            name="transgender"
            size={15}
            color={Colors.primary}
            style={{marginRight: 5}}></Icon>
          <Text>nam</Text>
          <Icon
            name="users"
            size={15}
            color={Colors.primary}
            style={styles.icon}></Icon>
          <Text>5</Text>
          <Icon
            name="square-o"
            size={15}
            color={Colors.primary}
            style={styles.icon}></Icon>
          <Text>40m x2</Text>
        </View>
        <View style={styles.row}>
          <Icon
            name="money"
            size={15}
            color={Colors.primary}
            style={{marginRight: 5}}></Icon>
          <Text>5.000.000 VNĐ / Tháng</Text>
        </View>
        <View style={styles.row}>
          <Icon2
            name="place"
            size={15}
            color={Colors.primary}
            style={{marginRight: 5}}></Icon2>
          <Text numberOfLines={1}>910/26/10 Tân kỳ Tân quýasdasd adsad</Text>
        </View>
        <View style={styles.row}>
          <Text style={{color: '#ff7911'}}> Ghi chú: </Text>
          <Text style={styles.txtnote} numberOfLines={1}>
            910/26/10 Tân kỳ Tân quý thành phố Hồ Chí Minh
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default CardPost2;

const styles = StyleSheet.create({
  container: {
    height: 0.4 * height,
    width: 0.48 * width,
    borderRadius: 10,
    margin: 3,
    marginTop: 10,
    alignItems: 'center',
  },
  image: {
    height: 0.2 * height,
    width: width * 0.46,
    borderRadius: 10,
  },
  information: {
    marginLeft: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
  },
  icon: {
    marginLeft: 15,
    marginRight: 5,
  },
  txtnote: {
    marginLeft: 2,
    flexWrap: 'wrap',
    width: width * 0.3,
  },
});
