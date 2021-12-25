import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Size from '../sizes/Size.json';
type conatnerProps = {
  item: Object;
};
const CoinDetailComponent: React.FC<conatnerProps> = ({item}) => {
  const value =
    item?.lastPrice != null ? item?.prevPrice / item?.lastPrice : 0.0;
  const roundValue = value.toFixed(2);
  const subPrice: string = `${value > 0 ? '+' : ''}${roundValue}%`;
  const arrow =
    value > 0
      ? require('../images/icons/ic_arrow_up.png')
      : require('../images/icons/ic_arrow_down.png');
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://tokenize.exchange/assets/images/currency-logos/${item?.name.toLowerCase()}.png`,
        }}
        style={{marginRight: Size.margin, height: 40, width: 40}}
      />
      <View style={styles.rightStyle}>
        <View style={styles.nameCoin}>
          <Text style={{color: 'rgba(61, 67, 108, 1)', fontWeight: 'bold'}}>
            {item?.name}
          </Text>
          <Text style={{color: 'rgba(142, 146, 178, 1)'}}>{item?.market}</Text>
        </View>

        <View style={styles.nameCoin}>
          <Text style={{color: 'rgba(61, 67, 108, 1)', textAlign: 'right'}}>
            ${item?.askPrice}
          </Text>

          <View style={styles.viewPercent}>
            <Text
              style={{
                color:
                  value > 0 ? 'rgba(59, 186, 125, 1)' : 'rgba(249, 75, 92, 1)',
              }}>
              {subPrice}
            </Text>
            {value != 0 && <Image source={arrow} />}
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: Size.paddingMedium,
    marginVertical: Size.margin,
    alignItems: 'center',
    borderRadius: 8,
  },
  rightStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    height: 40,
  },
  nameCoin: {
    height: 40,
    justifyContent: 'space-between',
  },
  viewPercent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
export default CoinDetailComponent;
