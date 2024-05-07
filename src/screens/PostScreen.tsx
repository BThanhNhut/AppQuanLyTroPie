import React from 'react';
import {Dimensions, Image, StyleSheet, TextInput, View} from 'react-native';
import {Colors} from '../assets/Colors';
const {width, height} = Dimensions.get('window');

export default function PostScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Image
          source={require('../assets/images/icon/search.png')}
          style={styles.img}
          resizeMode="contain"
        />
        <TextInput style={styles.txt} placeholder="Tìm kiếm" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  search: {
    marginTop: 10,
    width: width * 0.9,
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
    marginTop: 2,
    height: '100%',
  },
});
