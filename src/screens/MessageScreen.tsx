import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function MessageScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Tin nhắn</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
