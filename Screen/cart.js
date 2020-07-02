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
import NumericInput from 'react-native-numeric-input';

//import {Button} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Trending from './TrendingHomeTemplate';
import Category from './Category';

//const W = Diamentions.get('window').width;

const cart = () => {
  //const [selectedValue, setSelectedValue] = useState('java');
  //const {searchQuery} = this.state;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ScrollView
          style={{backgroundColor: '#ffffff'}}
          scrollEventThrottle={16}>
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
                <Feather style={{}} name="arrow-left" color="#333" size={26} />
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
                Cart
              </Text>
              <Text style={{}} />
            </View>
          </View>
          <View style={[styles.pb_20, {flex: 1}]}>
            <View
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
              <View style={styles.btnActionRight}>
                <NumericInput
                  style={styles.pr_5}
                  minValue={0}
                  maxValue={50}
                  totalHeight={40}
                  totalWidth={90}
                  rounded={true}
                  textColor="#707070"
                  iconStyle={{color: '#707070'}}
                  onChange={value => console.log(value)}
                />
                <TouchableOpacity>
                  <Text style={[styles.pt_10, {color: '#DC1E1E'}]}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
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
                <Text style={styles.homeItemTitle}>Pizza</Text>
                <Text>$70</Text>
              </View>
              <View style={styles.btnActionRight}>
                <NumericInput
                  style={styles.pr_5}
                  minValue={0}
                  maxValue={50}
                  totalHeight={40}
                  totalWidth={90}
                  rounded={true}
                  textColor="#707070"
                  iconStyle={{color: '#707070'}}
                  onChange={value => console.log(value)}
                />
                <TouchableOpacity>
                  <Text style={[styles.pt_10, {color: '#DC1E1E'}]}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
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
                <Text style={styles.homeItemTitle}>Chicken Snacks</Text>
                <Text>$70</Text>
              </View>
              <View style={styles.btnActionRight}>
                <NumericInput
                  style={styles.pr_5}
                  minValue={0}
                  maxValue={50}
                  totalHeight={40}
                  totalWidth={90}
                  rounded={true}
                  textColor="#707070"
                  iconStyle={{color: '#707070'}}
                  onChange={value => console.log(value)}
                />
                <TouchableOpacity>
                  <Text style={[styles.pt_10, {color: '#DC1E1E'}]}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={[styles.pb_20, {flex: 1, backgroundColor: '#F0F0F0'}]}>
            <View
              style={[
                styles.spaceBetween,
                styles.hCenter,
                styles.ph_20,
                styles.mt_20,
              ]}>
              <Text>Bill Details</Text>
              <Text>Apply Promocode</Text>
            </View>
          </View>
          <View style={[styles.pb_20, {flex: 1}]}>
            <TouchableOpacity style={styles.mh_20}>
              <Text style={styles.btnDefault}>Proceed to checkout</Text>
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
  pt_10: {
    paddingTop: 10,
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
  btnActionRight: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginLeft: 'auto',
  },
  btnAdd: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderColor: '#CCCCCC',
    borderWidth: 1,
  },
  btnDefault: {
    fontFamily: 'SFUIDisplay-Light',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#fd3400',
    color: '#fff',
    marginTop: 10,
    paddingVertical: 15,
    borderRadius: 10,
  },
});

export default cart;
