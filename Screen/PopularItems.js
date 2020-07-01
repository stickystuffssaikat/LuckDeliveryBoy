/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {
  StyleSheet,
  TouchableOpacity,
  //Text,
  Image,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import LineargGradient from 'react-native-linear-gradient';

//import {Button} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Trending from './TrendingHomeTemplate';
import Category from './Category';

//const W = Diamentions.get('window').width;

const PopularItems = () => {
  const [selectedValue, setSelectedValue] = useState('java');
  //const {searchQuery} = this.state;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ScrollView
          style={{backgroundColor: '#ffffff'}}
          scrollEventThrottle={16}>
          <View style={{flex: 1, height: 300}}>
            <ImageBackground
              source={require('./assets/img/popularItem-bnr.jpg')}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: 'cover',
              }}>
              <LineargGradient
                style={{flex: 1}}
                colors={['#FFFFFF00', '#FFFFFF5E', '#FFFFFF']}
              />
            </ImageBackground>
          </View>
          <View style={[styles.pb_20, {flex: 1}]}>
            <View style={[styles.spaceBetween, styles.hCenter, styles.ph_20]}>
              <View
                style={[
                  styles.mr_20,
                  styles.radius_50,
                  {borderWidth: 2, borderColor: '#E8E8E8'},
                ]}>
                <Image
                  style={{height: 50, width: 50}}
                  source={require('./assets/img/iconDominos.png')}
                />
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.homeItemTitle}>Dominos</Text>
                <Text style={styles.textCenter}>
                  <Text style={{color: '#FE5632'}}>Open</Text>
                  &nbsp; 11am - 11pm
                </Text>
                <Text style={{}}>$100 per person</Text>
              </View>
              <View style={[styles.displayRow, styles.ml_20]}>
                <Icon name="star" size={17} color="#FFC107" />
                <Text style={styles.ml_5}>4.1</Text>
              </View>
            </View>

            <View
              style={[
                styles.spaceBetween,
                styles.hCenter,
                styles.ph_20,
                styles.mt_20,
                styles.pt_20,
              ]}>
              <Text style={styles.catTitle}>Popular Menu</Text>
              <Text>10 Menu</Text>
            </View>

            <TouchableOpacity
              style={[
                styles.displayRow,
                styles.hCenter,
                styles.ph_20,
                styles.mt_20,
              ]}>
              <View style={{height: 100, width: 100, marginRight: 20}}>
                <Image
                  style={{
                    flex: 1,
                    width: null,
                    height: null,
                    borderRadius: 7,
                    resizeMode: 'cover',
                  }}
                  source={require('./assets/img/newMenu/img-1.jpg')}
                />
              </View>
              <View style={styles.displayColumn}>
                <Text style={styles.homeItemTitle}>Chicken Taco</Text>
                <Text>$70</Text>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 'auto',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 5,
                  borderColor: '#CCCCCC',
                  borderWidth: 1,
                }}>
                <Text style={styles.pr_5}>Add</Text>
                <Feather name="plus" size={12} />
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.displayRow,
                styles.hCenter,
                styles.ph_20,
                styles.mt_10,
              ]}>
              <View style={{height: 100, width: 100, marginRight: 20}}>
                <Image
                  style={{
                    flex: 1,
                    width: null,
                    height: null,
                    borderRadius: 7,
                    resizeMode: 'cover',
                  }}
                  source={require('./assets/img/newMenu/img-2.jpg')}
                />
              </View>
              <View style={styles.displayColumn}>
                <Text style={styles.homeItemTitle}>Chicken Taco</Text>
                <Text>$70</Text>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 'auto',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 5,
                  borderColor: '#CCCCCC',
                  borderWidth: 1,
                }}>
                <Text style={styles.pr_5}>Add</Text>
                <Feather name="plus" size={12} />
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.displayRow,
                styles.hCenter,
                styles.ph_20,
                styles.mt_10,
              ]}>
              <View style={{height: 100, width: 100, marginRight: 20}}>
                <Image
                  style={{
                    flex: 1,
                    width: null,
                    height: null,
                    borderRadius: 7,
                    resizeMode: 'cover',
                  }}
                  source={require('./assets/img/trending/img-3.jpg')}
                />
              </View>
              <View style={styles.displayColumn}>
                <Text style={styles.homeItemTitle}>Chicken Taco</Text>
                <Text>$70</Text>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 'auto',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 5,
                  borderColor: '#CCCCCC',
                  borderWidth: 1,
                }}>
                <Text style={styles.pr_5}>Add</Text>
                <Feather name="plus" size={12} />
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.displayRow,
                styles.hCenter,
                styles.ph_20,
                styles.mt_10,
              ]}>
              <View style={{height: 100, width: 100, marginRight: 20}}>
                <Image
                  style={{
                    flex: 1,
                    width: null,
                    height: null,
                    borderRadius: 7,
                    resizeMode: 'cover',
                  }}
                  source={require('./assets/img/trending/img-4.jpg')}
                />
              </View>
              <View style={styles.displayColumn}>
                <Text style={styles.homeItemTitle}>Chicken Taco</Text>
                <Text>$70</Text>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 'auto',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 5,
                  borderColor: '#CCCCCC',
                  borderWidth: 1,
                }}>
                <Text style={styles.pr_5}>Add</Text>
                <Feather name="plus" size={12} />
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.displayRow,
                styles.hCenter,
                styles.ph_20,
                styles.mt_10,
              ]}>
              <View style={{height: 100, width: 100, marginRight: 20}}>
                <Image
                  style={{
                    flex: 1,
                    width: null,
                    height: null,
                    borderRadius: 7,
                    resizeMode: 'cover',
                  }}
                  source={require('./assets/img/trending/img-5.jpg')}
                />
              </View>
              <View style={styles.displayColumn}>
                <Text style={styles.homeItemTitle}>Chicken Taco</Text>
                <Text>$70</Text>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 'auto',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 5,
                  borderColor: '#CCCCCC',
                  borderWidth: 1,
                }}>
                <Text style={styles.pr_5}>Add</Text>
                <Feather name="plus" size={12} />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  colorLight: {
    color: '#fff',
  },
  spaceBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  displayRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  displayColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  hCenter: {
    display: 'flex',
    alignItems: 'center',
    //flexDirection: 'row',
  },
  colorWhite: {
    color: '#fff',
  },
  mt_10: {
    marginTop: 10,
  },
  mt_20: {
    marginTop: 20,
  },
  mb_10: {
    marginBottom: 10,
  },
  mb_20: {
    marginBottom: 20,
  },
  mr_20: {
    marginRight: 20,
  },
  ml_5: {
    marginLeft: 5,
  },
  ml_10: {
    marginLeft: 10,
  },
  ml_20: {
    marginLeft: 20,
  },
  mh_20: {
    marginHorizontal: 20,
  },
  mv_20: {
    marginVertical: 20,
  },
  pt_20: {
    paddingTop: 20,
  },
  pb_20: {
    paddingBottom: 20,
  },
  pr_5: {
    paddingRight: 5,
  },
  ph_20: {
    paddingHorizontal: 20,
  },
  pv_20: {
    paddingVertical: 20,
  },
  radius_50: {
    borderRadius: 50,
  },
  Location: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'SFUIDisplay-Medium',
    marginLeft: 10,
  },
  catTitle: {
    fontFamily: 'SFUIDisplay-Semibold',
    fontSize: 22,
  },
  homeItemTitle: {
    fontFamily: 'SFUIDisplay-Semibold',
    fontSize: 18,
  },
});

export default PopularItems;
