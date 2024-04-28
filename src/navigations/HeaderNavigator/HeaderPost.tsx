import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get("window");

function HeaderPost () {
    return(
        <View style={styles.container}>
            
        </View>
    )
}
export default HeaderPost;

const styles = StyleSheet.create({
  container:{
    width: width,
    height: height* 0.1,
    backgroundColor: "red"
  }
});