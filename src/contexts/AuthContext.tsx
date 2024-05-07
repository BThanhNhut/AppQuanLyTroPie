import {ReactNode, createContext, useState} from 'react';
import {Account} from '../assets/types/PropTypes';

type AccountContextType = {
  account: Account | undefined;
  setAccount: React.Dispatch<React.SetStateAction<Account | undefined>>;
};

export const AuthContext = createContext<AccountContextType | undefined>(
  undefined,
);

export function AuthProvider({children}: {children: ReactNode}) {
  const [account, setAccount] = useState<Account | undefined>(undefined);
  return (
    <AuthContext.Provider value={{account, setAccount}}>
      {children}
    </AuthContext.Provider>
  );
}
