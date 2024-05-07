import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../screens/styles/LoginStyle';
import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import {AccountLogin} from '../assets/types/PropTypes';
import {AuthContext} from '../contexts/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({navigation}: any): React.JSX.Element {
  const authContext = useContext(AuthContext);
  const [username, setusername] = useState<string>(
    authContext?.account?.username || '',
  );
  const [password, setpassword] = useState<string>(
    authContext?.account?.password || '',
  );
  const [account, setAccount] = useState<AccountLogin | undefined>(undefined);

  const fetchAccount = async () => {
    try {
      const responses = await Promise.all([
        axios.post(
          `https://qlphong-tro-production.up.railway.app/accounts/login`,
          {
            username: username.toLocaleLowerCase(),
            password: password.toLocaleLowerCase(),
          },
        ),
      ]);
      setAccount(responses[0].data);
    } catch (error) {
      console.log('fetch api error', error);
    }
  };

  const handleLogin = async () => {
    try {
      await fetchAccount();
      console.log(username);
      if (
        account &&
        username?.toLocaleLowerCase() ===
          account.account.username.toLocaleLowerCase()
      ) {
        console.log('Đăng nhập thành công');
        await AsyncStorage.setItem('id', account.account.id.toString());
        await AsyncStorage.setItem(
          'customer_name',
          account.account.customer_name,
        );
        await AsyncStorage.setItem('username', account.account.username);
        await AsyncStorage.setItem('access_token', account.access_token);
        authContext?.setAccount(account.account);
        navigation.replace('TabsNavigator');
      } else {
        console.log('Đăng nhập thất bại');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const goToRegister = () => {
    navigation.navigate('RegisterScreen');
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
            onChangeText={text => setusername(text)}>
            {authContext?.account?.username}
          </TextInput>
          <TextInput
            style={styles.txtpassword}
            placeholder="Mật khẩu"
            secureTextEntry={true}
            onChangeText={text => setpassword(text)}>
            {authContext?.account?.password}
          </TextInput>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={handleLogin}>
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
              onPress={goToRegister}>
              <Image
                source={require('../assets/images/facebook.png')}
                resizeMode="contain"
                style={{width: '60%', height: '60%'}}></Image>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button2}
              activeOpacity={0.8}
              onPress={goToRegister}>
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
