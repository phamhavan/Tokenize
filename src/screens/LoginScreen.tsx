import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Size from '../sizes/Size.json';
import {Input, CheckBox} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.container}
      source={require('../images/background/bg.png')}>
      <View style={styles.safeView}>
        <KeyboardAwareScrollView
          contentContainerStyle={{alignItems: 'center'}}
          showsVerticalScrollIndicator={false}>
          <Image
            source={require('../images/icons/ic_logo.png')}
            style={{marginVertical: '10%'}}
          />

          <Text style={styles.signInStyle}>Sign in</Text>
          <Text style={[styles.signInStyle, styles.pleaseText]}>
            Please sign in to continue
          </Text>
          <Input
            placeholder="Email"
            placeholderTextColor={'rgba(214, 225, 255, 1)'}
            leftIcon={
              <Image
                source={require('../images/icons/ic_person.png')}
                style={{marginHorizontal: Size.margin}}
              />
            }
            inputContainerStyle={styles.inputStyle}
            autoCompleteType={undefined}
            containerStyle={{paddingHorizontal: 0}}
          />
          <Input
            placeholder="Password"
            placeholderTextColor={'rgba(214, 225, 255, 1)'}
            leftIcon={
              <Image
                source={require('../images/icons/ic_lock.png')}
                style={{marginHorizontal: Size.margin}}
              />
            }
            rightIcon={
              <Image
                source={require('../images/icons/ic_eye.png')}
                style={{marginHorizontal: Size.margin}}
              />
            }
            inputContainerStyle={styles.inputStyle}
            autoCompleteType={undefined}
            containerStyle={{paddingHorizontal: 0}}
          />

          <View style={styles.viewCheckBox}>
            <CheckBox
              title="Remember me"
              checked={false}
              uncheckedIcon={
                <Image source={require('../images/icons/ic_square.png')} />
              }
              containerStyle={styles.checkBoxStyle}
              textStyle={styles.textRememberStyle}
            />
            <Text style={styles.textRememberStyle}>Forgot your password?</Text>
          </View>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text style={styles.buttonTextStyle}>SIGN IN</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 30,
            }}>
            <Text style={{...styles.textRememberStyle, fontWeight: 'normal'}}>
              Don’t have an account yet?
            </Text>
            <TouchableOpacity>
              <Text style={styles.textRememberStyle}> SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Size.padding,
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  safeView: {
    flex: 1,
    width: '100%',
    paddingTop: '20%',
  },
  signInStyle: {
    fontSize: Size.fontLarge,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: Size.marginSmall,
  },
  pleaseText: {
    color: '#D6DFFF',
    fontSize: Size.fontMedium,
    marginBottom: 60,
  },
  inputStyle: {
    borderWidth: 1.5,
    height: 50,
    borderRadius: 6,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  textRememberStyle: {
    fontWeight: 'bold',
    fontSize: Size.fontBase,
    color: 'white',
  },
  viewCheckBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkBoxStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    paddingHorizontal: 0,
    marginLeft: 0,
    margin: 0,
  },
  buttonStyle: {
    height: 50,
    backgroundColor: '#BDCFFF',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginTop: '25%',
  },
  buttonTextStyle: {
    color: 'rgba(80, 115, 242, 1)',
    fontWeight: 'bold',
  },
});
export default LoginScreen;
