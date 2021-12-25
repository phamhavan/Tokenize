/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View, StatusBar} from 'react-native';
import RootApp from './src/RootApp';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <RootApp />
    </View>
  );
};

export default App;
