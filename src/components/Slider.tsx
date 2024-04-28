import React from 'react';
import {View, ScrollView, Image, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const images = ['../assets/images/sl1.png', '../assets/images/sl1.png'];

const Slider = () => {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}>
      {images.map((image, index) => (
        <View key={index} style={styles.slide}>
          <Image
            source={require('../assets/images/sl1.png')}
            style={styles.image}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width,
    height: height * 0.3,
  },
  slide: {
    width,
    height: height * 0.3,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
});

export default Slider;
