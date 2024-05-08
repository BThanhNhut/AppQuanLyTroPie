import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Colors} from '../assets/Colors';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import {Linking} from 'react-native';

const {width, height} = Dimensions.get('window');

function BottomDetail(): React.JSX.Element {
  const callPhoneNumber = (phoneNumber: string) => {
    const url = `tel:${phoneNumber}`;
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button1} activeOpacity={0.7}>
          <View style={styles.row}>
            <Icon2 name="messenger" size={15} color={Colors.white}></Icon2>
            <Text style={styles.text}>Chat</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          activeOpacity={0.7}
          onPress={() => callPhoneNumber('0948412')}>
          <View style={styles.row}>
            <Icon2 name="local-phone" size={15} color={Colors.primary}></Icon2>
            <Text style={styles.text2}>Gọi</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} activeOpacity={0.7}>
          <View style={styles.row}>
            <Icon2 name="messenger" size={15} color={Colors.primary}></Icon2>
            <Text style={styles.text2}>Giữ chỗ</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} activeOpacity={0.7}>
          <View style={styles.row}>
            <Icon2 name="messenger" size={15} color={Colors.white}></Icon2>
            <Text style={styles.text}>Báo cáo</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default BottomDetail;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    height: height * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    //
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  button1: {
    width: width * 0.2,
    backgroundColor: Colors.primary,
    borderRadius: 5,
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  button2: {
    width: width * 0.22,
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  button3: {
    width: width * 0.25,
    backgroundColor: Colors.red2,
    borderRadius: 5,
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  text: {
    color: Colors.white,
    marginLeft: 10,
  },
  text2: {
    color: Colors.primary,
    marginLeft: 10,
  },
});
