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

export default function LoginScreen({navigation}) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const {signIn} = React.useContext(AuthContext);

  // GoogleSignin.configure({
  //   scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  //   webClientId: '770482334222-it2m5p0lrafa25gu8h5tmr4t1m5ch48a.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  // });

  signIn1 = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      this.setState({userInfo});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.container}
        source={require('./assets/img/bg-2.jpg')}>
        <ScrollView>
          <View style={styles.contentBottom}>
            <Image
              style={styles.LogoCenter}
              source={require('./assets/img/food-plate-1.png')}
              //imageStyle={{borderRadius: 40}}
            />
            <Text style={styles.SplashTitle1}>Welcome to</Text>
            <Text style={styles.SplashTitle2}>Lucky Deliveries</Text>
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
                placeholder="Pass@12345#"
                onChangeText={setPassword}
              />
              <Feather
                style={styles.inputIcon}
                name="lock"
                color="#ACACAC"
                size={20}
              />
            </View>
            {/* <Icon name="comments" size={30} color="#333" /> */}
            <TouchableOpacity>
              <Text
                style={styles.forgetPass}
                onPress={() => navigation.navigate('RecoveryPassword')}>
                Forgot Password ?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => signIn({username, password})}>
              <Text style={styles.btnLogin}>Login</Text>
            </TouchableOpacity>
            <View style={styles.SocialBtnCont}>
              <TouchableOpacity onPress={() => alert('Login with Facebook')}>
                <Image
                  style={styles.mr_2}
                  source={require('./assets/img/facebook-color.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{}}
                  source={require('./assets/img/google-color.png')}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text
                style={{textAlign: 'center', fontSize: 15, marginTop: 30}}
                onPress={() => navigation.navigate('Registration')}>
                Create an account?
              </Text>
            </TouchableOpacity>
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
    //textAlign: 'left',
    //alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  LogoCenter: {
    alignSelf: 'center',
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
  SplashPara: {
    fontFamily: 'SFUIDisplay-Light',
    fontSize: 18,
    lineHeight: 25,
    //textAlign: 'center',
    color: '#7e7e7e',
    paddingTop: 10,
  },
  btnLogin: {
    fontFamily: 'SFUIDisplay-Light',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#fd3400',
    color: '#fff',
    marginTop: 10,
    paddingVertical: 15,
    borderRadius: 50,
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
  forgetPass: {
    marginVertical: 20,
    alignSelf: 'flex-end',
  },
  SocialBtnCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    //backgroundColor: '#e4e4e4',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  p_5: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  mr_2: {
    marginRight: 20,
  },
  /* btnSkip: {
    fontSize: 18,
    color: '#fd3400',
  },
  btnNext: {
    fontSize: 18,
    color: '#fd3400',
  }, */
});
