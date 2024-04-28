import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../screens/styles/LoginStyle';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function LoginScreen({navigation}: any): React.JSX.Element {
  const [username, setusername] = useState<string>('');
  const [password, setpassword] = useState<string>('');
  const [randomImageUrl, setRandomImageUrl] = useState(null);

  const goToRegister = () => {
    navigation.navigate('RegisterScreen');
  };

  const goToHome = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/images/login.png')}
        style={styles.background}
        resizeMode="cover">
        <View style={styles.background1}>
          <TextInput
            style={styles.txtusername}
            placeholder="Tài khoản"
            onChangeText={text => setusername(text)}></TextInput>
          <TextInput
            style={styles.txtpassword}
            placeholder="Mật khẩu"
            secureTextEntry={true}
            onChangeText={text => setpassword(text)}></TextInput>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={goToHome}>
            <Text style={styles.text3}>Đăng Nhập</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text1}>Bạn muốn đăng ký tài khoản ?</Text>
            <Text style={styles.text2} onPress={goToRegister}>
              Đăng ký
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              style={styles.button2}
              activeOpacity={0.8}
              onPress={goToHome}>
              <Image
                source={require('../assets/images/facebook.png')}
                resizeMode="contain"
                style={{width: '60%', height: '60%'}}></Image>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button2}
              activeOpacity={0.8}
              onPress={goToHome}>
              <Image
                source={require('../assets/images/google.png')}
                resizeMode="contain"
                style={{width: '60%', height: '60%'}}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
