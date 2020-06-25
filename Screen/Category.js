import 'react-native-gesture-handler';
import * as React from 'react';
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
  Text,
  Image,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import LineargGradient from 'react-native-linear-gradient';

/* const Category = () => { */
class Category extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {yellow: ['#FF5673a5', '#FF8C48a5']};
    this.state = {violet: ['#FF4665a5', '#832BF6a5']};
    //this.state = {blue: ['#3B40FEa5', '#2DCEF8a5']};
    console.log(this.props);
  }

  render() {
    return (
      <View
        style={{
          height: 120,
          width: 120,
          marginLeft: 20,
          borderWidth: 0.5,
          borderColor: '#dddddd',
          borderRadius: 7,
          overflow: 'hidden',
        }}>
        <View style={{flex: 2}}>
          <ImageBackground
            source={this.props.imageUri}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'cover',
            }}>
            <LineargGradient style={{flex: 1}} colors={this.state.violet}>
              <View
                style={{
                  marginTop: 'auto',
                  marginBottom: 'auto',
                  paddingVertical: 15,
                  paddingHorizontal: 20,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontFamily: 'SFUIDisplay-Semibold',
                    fontSize: 20,
                  }}>
                  {this.props.name}
                </Text>
              </View>
            </LineargGradient>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
export default Category;
