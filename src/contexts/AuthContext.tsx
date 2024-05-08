import {ReactNode, createContext, useEffect, useState} from 'react';
import {Account} from '../assets/types/PropTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AccountContextType = {
  account: Account | undefined;
  setAccount: React.Dispatch<React.SetStateAction<Account | undefined>>;
};

export const AuthContext = createContext<AccountContextType | undefined>(
  undefined,
);

export function AuthProvider({children}: {children: ReactNode}) {
  const [account, setAccount] = useState<Account | undefined>(undefined);
  useEffect(() => {
    const loadAccount = async () => {
      const id = await AsyncStorage.getItem('id');
      const username = await AsyncStorage.getItem('username');
      const password = await AsyncStorage.getItem('password');
      const customer_name = await AsyncStorage.getItem('customer_name');
      const phone_number = await AsyncStorage.getItem('phone_number');
      const address = await AsyncStorage.getItem('address');
      const avatar = await AsyncStorage.getItem('avatar');
      console.log('context', id);
      if (username) {
        const account: Account = {
          id: id ? parseInt(id) : 0,
          username: username || '',
          password: password || '',
          customer_name: customer_name || '',
          phone_number: phone_number || '', // Thêm các thuộc tính còn thiếu
          address: address || '', // Thêm các thuộc tính còn thiếu
          avatar: avatar || '',
        };
        setAccount(account);
      }
    };
    loadAccount();
  }, []);
  return (
    <AuthContext.Provider value={{account, setAccount}}>
      {children}
    </AuthContext.Provider>
  );
}
