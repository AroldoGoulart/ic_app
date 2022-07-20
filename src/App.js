/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Routes from './routes';
import { AuthProvider } from './contexts/auth';
function App() {
  return (
    <AuthProvider>
        <Routes />
    </AuthProvider>
  ) ;
}
export default App;
