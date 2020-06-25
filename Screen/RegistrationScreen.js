import 'react-native-gesture-handler';
import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {
  Avatar,
  Button,
  Text,
  Card,
  Title,
  Paragraph,
  Searchbar,
  TextInput,
  Provider as PaperProvider,
} from 'react-native-paper';
//import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import Feather from 'react-native-vector-icons/Feather';
import {Input} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AuthContext} from '../App';
import axios from 'axios';

export default function RegistrationScreen({navigation}) {
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  // GoogleSignin.configure({
  //   scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  //   webClientId: '770482334222-it2m5p0lrafa25gu8h5tmr4t1m5ch48a.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  // });

  const {signUp} = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        //style={styles.container}
        style={styles.container}
        source={require('./assets/img/bg-3.jpg')}>
        <ScrollView>
          <View>
            <TouchableOpacity
              style={styles.iconBack}
              onPress={() => navigation.navigate('SignIn')}>
              <Feather name="arrow-left" color="#05375a" size={25} />
            </TouchableOpacity>
          </View>
          <View style={styles.contentBottom}>
            <Text style={styles.SplashTitle1}>Create</Text>
            <Text style={styles.SplashTitle2}>an account</Text>
            <View style={styles.action}>
              <TextInput
                style={styles.inputStyle}
                label="Name"
                underlineColor="#fd3400"
                placeholder="John doe"
                onChangeText={setName}
              />
              <Feather
                style={styles.inputIcon}
                name="user"
                color="#ACACAC"
                size={20}
              />
            </View>
            <View style={styles.action}>
              <TextInput
                style={styles.inputStyle}
                label="Email"
                underlineColor="#fd3400"
                placeholder="dummy@email.com"
                onChangeText={setUsername}
              />
              <Feather
                style={styles.inputIcon}
                name="mail"
                color="#ACACAC"
                size={20}
              />
            </View>
            <View style={styles.action}>
              <TextInput
                style={styles.inputStyle}
                label="Password"
                underlineColor="#fd3400"
                placeholder="•••••••••"
                onChangeText={setPassword}
              />
              <Feather
                style={styles.inputIcon}
                name="lock"
                color="#ACACAC"
                size={20}
              />
            </View>
            <View style={styles.action}>
              <TextInput
                style={styles.inputStyle}
                label="Confirm Password"
                underlineColor="#fd3400"
                placeholder="•••••••••"
              />
              <Feather
                style={styles.inputIcon}
                name="lock"
                color="#ACACAC"
                size={20}
              />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.btnRegister}>Register</Text>
            </TouchableOpacity>
            <View style={styles.footerBottom}>
              <Text style={{}}>Already have an account? </Text>
              <TouchableOpacity
                //onPress={() => signUp({name, username, password})}
                onPress={() => navigation.navigate('SignIn')}
              >
                <Text style={{color: '#fd3400'}}> Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#e4e4e4',
  },
  contentBottom: {
    //marginTop: 'auto',
    //textAlign: 'center',
    //alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  SplashTitle1: {
    fontFamily: 'SFUIDisplay-Bold',
    fontSize: 30,
    paddingTop: 50,
  },
  SplashTitle2: {
    fontFamily: 'SFUIDisplay-Bold',
    fontSize: 30,
    //paddingTop: 10,
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
  btnRegister: {
    fontFamily: 'SFUIDisplay-Light',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#fd3400',
    color: '#fff',
    marginTop: 60,
    paddingVertical: 15,
    borderRadius: 50,
  },
  footerBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 40,
  },
});
