import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {favoriteItem} from '../assets/types/PropTypes';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../assets/Colors';

const {width, height} = Dimensions.get('window');

export default function FavoriteScreen(): React.JSX.Element {
  const [favorite, setfavorite] = useState<favoriteItem[]>();

  const id_account = 1;
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const responese = await Promise.all([
        axios.get(
          `https://qlphong-tro-production.up.railway.app/posts/whishlist/${id_account}`,
        ),
      ]);
      setfavorite(responese[0].data);
      console.log('ket qua', favorite);
    } catch (error) {
      console.log('Fetch api error', error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {favorite?.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card} activeOpacity={0.8}>
            <Image
              style={styles.img}
              source={{uri: item.posts.rooms.image}}></Image>
            <View style={{marginLeft: 10}}>
              <Text>{item.posts.title}</Text>
              <View style={styles.row}>
                <Icon
                  name="transgender"
                  size={15}
                  color={Colors.primary}
                  style={{marginRight: 5}}></Icon>
                <Text>{item.posts.rooms.note_gender}</Text>
                <Icon
                  name="users"
                  size={15}
                  color={Colors.primary}
                  style={styles.icon}></Icon>
                <Text>{item.posts.rooms.number_of_people}</Text>
                <Icon
                  name="square-o"
                  size={15}
                  color={Colors.primary}
                  style={styles.icon}></Icon>
                <Text>
                  {item.posts.rooms.area_width}x{item.posts.rooms.area_height}
                </Text>
              </View>
              <View style={styles.row}>
                <Icon2
                  name="place"
                  size={15}
                  color={Colors.primary}
                  style={{marginRight: 5}}></Icon2>
                <Text numberOfLines={1} style={{width: width * 0.5}}>
                  {item.posts.rooms.address}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  img: {
    height: height * 0.15,
    width: width * 0.3,
    borderRadius: 10,
  },
  card: {
    width: width * 0.9,
    height: height * 0.15,
    borderRadius: 10,
    flexDirection: 'row',
    margin: 5,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
  },
  icon: {
    marginLeft: 15,
    marginRight: 5,
  },
});
