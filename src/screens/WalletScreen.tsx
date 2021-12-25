import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WalletScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Wallet Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default WalletScreen;
