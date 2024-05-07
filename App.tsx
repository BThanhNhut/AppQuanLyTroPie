/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import MainNavigation from './src/navigations/MainNavigation';
import {SearchProvider} from './src/contexts/SearchContext';
import {AlertNotificationRoot} from 'react-native-alert-notification';
import {AuthProvider} from './src/contexts/AuthContext';

function App(): React.JSX.Element {
  return (
    <SearchProvider>
      <AuthProvider>
        <AlertNotificationRoot>
          <MainNavigation />
        </AlertNotificationRoot>
      </AuthProvider>
    </SearchProvider>
  );
}
export default App;
