import 'react-native-gesture-handler';
import * as React from 'react';
//import React, {Component, PropTypes} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  TextInput,
  Provider as PaperProvider,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {
  StyleSheet,
  TouchableOpacity,
  //Button,
  Text,
  //TextInput,
  Image,
  View,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';

const RecoveryPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.container}
        source={require('./assets/img/bg-1.jpg')}>
        <View>
          <TouchableOpacity
            style={styles.iconBack}
            onPress={() => navigation.navigate('SignIn')}>
            <Feather name="arrow-left" color="#05375a" size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.contentBottom}>
          <Text style={styles.SplashTitle}>Password Recovery</Text>
          <Text style={styles.SplashPara}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt{' '}
          </Text>
          <View style={styles.action}>
            <TextInput
              style={styles.inputStyle}
              label="Email"
              icon="camera"
              underlineColor="#fd3400"
              placeholder="dummy@email.com"
            />
            <Feather
              style={styles.inputIcon}
              name="mail"
              color="#ACACAC"
              size={20}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.btnLogin}>Send</Text>
          </TouchableOpacity>
          <Image
            style={styles.LogoCenter}
            source={require('./assets/img/food-plate-1.png')}
            //imageStyle={{borderRadius: 40}}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#e4e4e4',
  },
  contentBottom: {
    marginTop: 'auto',
    marginBottom: 'auto',
    textAlign: 'center',
    //alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  SplashTitle: {
    fontFamily: 'SFUIDisplay-Bold',
    fontSize: 30,
    paddingTop: 10,
    textAlign: 'center',
  },
  SplashPara: {
    fontFamily: 'SFUIDisplay-Light',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'center',
    color: '#7e7e7e',
    paddingTop: 10,
  },
  LogoCenter: {
    alignSelf: 'center',
    marginTop: 25,
  },
  btnLogin: {
    fontFamily: 'SFUIDisplay-Light',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#fd3400',
    color: '#fff',
    marginTop: 30,
    paddingVertical: 15,
    borderRadius: 50,
  },
  iconBack: {
    marginTop: 20,
    marginLeft: 20,
  },
  inputStyle: {
    flex: 1,
    //marginTop: Platform.OS === 'ios' ? 0 : -12,
    //marginTop: 20,
    //marginTop: 20,
    backgroundColor: 'transparent',
  },
  action: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  inputIcon: {
    position: 'absolute',
    right: 10,
    bottom: 20,
  },
  SplashBtnCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e4e4e4',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  btnSkip: {
    fontSize: 18,
    color: '#fd3400',
  },
  btnNext: {
    fontSize: 18,
    color: '#fd3400',
  },
});
export default RecoveryPassword;