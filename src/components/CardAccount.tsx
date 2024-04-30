import React from 'react';
import {View, StyleSheet, Dimensions, Image, Text} from 'react-native';
import Icon5 from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

type PropName = {
  name: string;
  avatar: string;
};

function CardAccount({name, avatar}: PropName) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.column} source={{uri: avatar}}></Image>
        <View style={styles.row}>
          <View>
            <Text style={styles.txt}>{name}</Text>
            <Text style={styles.txt1}> 5 bài đăng</Text>
          </View>
          <Icon5
            name="right"
            size={22}
            style={{marginLeft: width * 0.3}}></Icon5>
        </View>
      </View>
    </View>
  );
}

export default CardAccount;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    height: 0.15 * height,
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
  column: {
    backgroundColor: 'white',
    width: width * 0.2,
    borderRadius: 40,
    alignItems: 'center',
    height: 80,
    margin: 5,
  },
  column2: {
    width: width * 0.8,
  },
  txt: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: 'bold',
  },
  txt1: {
    marginLeft: 5,
    color: '#FF6600',
  },
});
