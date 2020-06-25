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

/* const Trending = () => { */
class Trending extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <View
        style={{
          height: 130,
          width: 210,
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
            <LineargGradient
              style={{flex: 1}}
              colors={['#00000000', '#000000']}>
              <View
                style={{
                  marginTop: 'auto',
                  paddingVertical: 15,
                  paddingHorizontal: 20,
                }}>
                <Text
                  style={{
                    color: '#f3f3f3',
                    fontFamily: 'SFUIDisplay-Medium',
                    fontSize: 17,
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
export default Trending;
