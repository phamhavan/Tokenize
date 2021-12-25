import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {Input} from 'react-native-elements';
import Size from '../sizes/Size.json';
import CoinDetailComponent from '../components/CoinDetailComponent';
import _ from 'lodash';
const MAX_LENGTH_LIST = 20;
const fakeData = [
  {
    name: 'BTC',
  },
  {
    name: 'ETH',
  },
  {
    name: 'LTC',
  },
  {
    name: 'DDB',
  },
];
const axios = require('axios').default;
const MarketsScreen = () => {
  const [data, setData] = useState<Array<Object>>([]);
  const [dataSearch, setDataSearch] = useState<Array<Object>>([]);
  const [lenghData, setLenghData] = useState<Number>(MAX_LENGTH_LIST);
  const [isDataNull, setIsDataNull] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<String>('');
  const getData = () => {
    axios
      .get('https://api.tokenize-dev.com/public/v1/market/get-summaries')
      .then((res: any) => {
        setLoading(false);
        let maxData: Array<Object> = [];
        _.map(res?.data?.data, (item: Object, index: number) => {
          if (index < lenghData) {
            const indexnameCoin: number = item?.market.search('-');
            const nameCoin: string = item?.market.slice(indexnameCoin + 1);
            let newCoin = {...item, name: nameCoin};
            maxData.push(newCoin);
          }
        });
        setData(maxData);
        if (maxData.length == 0) {
          setIsDataNull(true);
        } else {
          setIsDataNull(false);
        }
      })
      .catch((error: any) => {
        Alert.alert('Alert', 'Network Error!');
      });
  };
  useEffect(() => {
    if (!searchText) {
      setLoading(true);
      getData();
    }
  }, [lenghData]);

  useEffect(() => {
    if (!searchText) {
      setIsDataNull(false);
    }
  }, [searchText]);

  const listEmptyView = () => {
    return (
      <View style={[styles.listEmptyViewStyle]}>
        {isDataNull && <Text>No Data</Text>}
      </View>
    );
  };

  const onSearchNameCoin = () => {
    if (searchText == '') {
      return;
    } else {
      let searchResult: Array<Object> = [];
      _.filter(data, (item: Object) => {
        if (item?.name.search(searchText.toLocaleUpperCase()) >= 0) {
          searchResult.push(item);
        }
      });
      setDataSearch(searchResult);
      if (searchResult.length == 0 && searchText !== '') {
        setIsDataNull(true);
      } else {
        setIsDataNull(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text
          style={{
            color: 'rgba(61, 67, 108, 1)',
            fontWeight: 'bold',
            fontSize: Size.fontBase,
          }}>
          MARKETS
        </Text>
        <View style={styles.leftViewStyle}>
          <Input
            placeholder="Search"
            containerStyle={styles.inputContainerStyle}
            inputContainerStyle={styles.searchBox}
            autoCompleteType={undefined}
            onChangeText={(text: string) => setSearchText(text)}
          />
          <TouchableOpacity
            style={styles.buttonSearch}
            onPress={() => onSearchNameCoin()}>
            <Image source={require('../images/icons/ic_search.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        {_.map(fakeData, (item: Object, index: number) => {
          return (
            <View style={styles.viewItem} key={index}>
              <Text style={styles.nameCoin}>{item?.name}</Text>
            </View>
          );
        })}
      </View>

      <FlatList
        contentContainerStyle={[
          styles.contentListCoinDetail,
          {height: isDataNull ? '100%' : null},
        ]}
        style={styles.listCoinDetail}
        showsVerticalScrollIndicator={false}
        data={!searchText ? data : dataSearch}
        keyExtractor={(item: any, index: number) => index.toString()}
        renderItem={({item, index}) => {
          return <CoinDetailComponent item={item} />;
        }}
        onRefresh={() => {
          getData();
        }}
        refreshing={false}
        onEndReachedThreshold={1}
        onEndReached={() => {
          setLenghData(lenghData + MAX_LENGTH_LIST);
        }}
        ListEmptyComponent={() => listEmptyView()}
      />
      {isLoading && (
        <ActivityIndicator
          size="large"
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: Size.padding,
    paddingTop: '12%',
  },
  searchBox: {
    borderBottomWidth: 0,
    margin: 0,
    padding: 0,
    paddingLeft: 5,
  },
  inputContainerStyle: {
    paddingHorizontal: 0,
    marginVertical: 0,
    marginHorizontal: 0,
    height: 40,
    width: '80%',
  },
  leftViewStyle: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'flex-end',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: '100%',
    justifyContent: 'space-between',
  },
  nameCoin: {
    color: 'white',
  },
  viewItem: {
    height: 40,
    width: 78,
    backgroundColor: 'rgba(105, 146, 255, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  buttonSearch: {
    height: 40,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listCoinDetail: {
    marginTop: Size.margin,
    flex: 1,
    width: '100%',
  },
  contentListCoinDetail: {
    width: '100%',
  },
  listEmptyViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});
export default MarketsScreen;
