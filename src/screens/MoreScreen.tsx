import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MoreScreeen = () => {
  return (
    <View style={styles.container}>
      <Text>More Screeen</Text>
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
export default MoreScreeen;
