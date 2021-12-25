import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PortfolioScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Portfolio Screen</Text>
      <View>
        <Text>BTC</Text>
        <Text>Bitcoin</Text>
      </View>

      <View></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
});
export default PortfolioScreen;
