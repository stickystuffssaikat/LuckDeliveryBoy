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

//import {Button} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Trending from './TrendingHomeTemplate';
import Category from './Category';

//const W = Diamentions.get('window').width;

const TrendingRestaurants = () => {
  const [selectedValue, setSelectedValue] = useState('java');
  //const {searchQuery} = this.state;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ScrollView style={{}} scrollEventThrottle={16}>
          <View style={styles.pb_20}>
            <View style={[styles.spaceBetween, styles.ph_20, styles.mt_20]}>
              <View
                style={[
                  styles.spaceBetween,
                  styles.hCenter,
                  {
                    width: '100%',
                  },
                ]}>
                <TouchableOpacity>
                  <Feather
                    style={{}}
                    name="arrow-left"
                    color="#333"
                    size={26}
                  />
                  {/* <Text style={{}}>West United States</Text> */}
                </TouchableOpacity>
                <Text
                  style={[
                    styles.catTitle,
                    {
                      textAlign: 'auto',
                      paddingRight: 20,
                    },
                  ]}>
                  Trending Restaurants
                </Text>
                <Text style={{}} />
              </View>
            </View>

            <Searchbar
              style={[styles.mb_20, styles.mt_10, styles.mh_20]}
              placeholder="Find Restaurants"
              //value={searchQuery}
            />

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
                <Text style={styles.homeItemTitle}>Burbur Pisang</Text>
                <View style={[styles.spaceBetween]}>
                  <Text style={{color: '#acacac'}}>1.4 km from you</Text>
                  <View style={[styles.displayRow, styles.ml_20]}>
                    <Icon name="star" size={17} color="#FFC107" />
                    <Text style={styles.ml_5}>4.1</Text>
                  </View>
                </View>
                <Text>$100 per person</Text>
              </View>
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
                <Text style={styles.homeItemTitle}>Burbur Pisang</Text>
                <View style={[styles.spaceBetween]}>
                  <Text style={{color: '#acacac'}}>1.4 km from you</Text>
                  <View style={[styles.displayRow, styles.ml_20]}>
                    <Icon name="star" size={17} color="#FFC107" />
                    <Text style={styles.ml_5}>4.1</Text>
                  </View>
                </View>
                <Text>$100 per person</Text>
              </View>
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
                <Text style={styles.homeItemTitle}>Burbur Pisang</Text>
                <View style={[styles.spaceBetween]}>
                  <Text style={{color: '#acacac'}}>1.4 km from you</Text>
                  <View style={[styles.displayRow, styles.ml_20]}>
                    <Icon name="star" size={17} color="#FFC107" />
                    <Text style={styles.ml_5}>4.1</Text>
                  </View>
                </View>
                <Text>$100 per person</Text>
              </View>
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
                <Text style={styles.homeItemTitle}>Burbur Pisang</Text>
                <View style={[styles.spaceBetween]}>
                  <Text style={{color: '#acacac'}}>1.4 km from you</Text>
                  <View style={[styles.displayRow, styles.ml_20]}>
                    <Icon name="star" size={17} color="#FFC107" />
                    <Text style={styles.ml_5}>4.1</Text>
                  </View>
                </View>
                <Text>$100 per person</Text>
              </View>
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
                <Text style={styles.homeItemTitle}>Burbur Pisang</Text>
                <View style={[styles.spaceBetween]}>
                  <Text style={{color: '#acacac'}}>1.4 km from you</Text>
                  <View style={[styles.displayRow, styles.ml_20]}>
                    <Icon name="star" size={17} color="#FFC107" />
                    <Text style={styles.ml_5}>4.1</Text>
                  </View>
                </View>
                <Text>$100 per person</Text>
              </View>
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
                <Text style={styles.homeItemTitle}>Burbur Pisang</Text>
                <View style={[styles.spaceBetween]}>
                  <Text style={{color: '#acacac'}}>1.4 km from you</Text>
                  <View style={[styles.displayRow, styles.ml_20]}>
                    <Icon name="star" size={17} color="#FFC107" />
                    <Text style={styles.ml_5}>4.1</Text>
                  </View>
                </View>
                <Text>$100 per person</Text>
              </View>
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
                <Text style={styles.homeItemTitle}>Burbur Pisang</Text>
                <View style={[styles.spaceBetween]}>
                  <Text style={{color: '#acacac'}}>1.4 km from you</Text>
                  <View style={[styles.displayRow, styles.ml_20]}>
                    <Icon name="star" size={17} color="#FFC107" />
                    <Text style={styles.ml_5}>4.1</Text>
                  </View>
                </View>
                <Text>$100 per person</Text>
              </View>
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
                <Text style={styles.homeItemTitle}>Burbur Pisang</Text>
                <View style={[styles.spaceBetween]}>
                  <Text style={{color: '#acacac'}}>1.4 km from you</Text>
                  <View style={[styles.displayRow, styles.ml_20]}>
                    <Icon name="star" size={17} color="#FFC107" />
                    <Text style={styles.ml_5}>4.1</Text>
                  </View>
                </View>
                <Text>$100 per person</Text>
              </View>
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
  ph_20: {
    paddingHorizontal: 20,
  },
  pv_20: {
    paddingVertical: 20,
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

export default TrendingRestaurants;
