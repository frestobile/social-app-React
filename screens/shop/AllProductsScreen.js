import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import GridImageView from 'react-native-grid-image-viewer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'

const AllProductsScreen = (props) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
  return (
    <View style={styles.background}>
      {/* <Text style={styles.headline_text}>Headwear</Text> */}
      {/* <Text style={styles.explore_text}>Click on an image to view in full screen mode</Text> */}

      {/* Basic Usage */}
       <GridImageView data={[ 'http://santamunic.com/wp-content/uploads/2018/12/Cardinal.jpg', 
       'http://santamunic.com/wp-content/uploads/2018/09/Black.jpg', 
       'http://santamunic.com/wp-content/uploads/2019/06/Heather-blue.jpg',
       'http://santamunic.com/wp-content/uploads/2019/06/SWAT.jpg',
       'http://santamunic.com/wp-content/uploads/2019/06/Camo.jpg',
       'http://santamunic.com/wp-content/uploads/2019/06/HeatherALLBlack.jpg',
       'http://santamunic.com/wp-content/uploads/2018/05/PoloShirt.jpg',
       'http://santamunic.com/wp-content/uploads/2016/01/DriFitShirt.jpg',
       'http://santamunic.com/wp-content/uploads/2015/12/HawaiianShirt.jpg',
       'http://santamunic.com/wp-content/uploads/2015/12/FlightJacket.jpg',
       'http://santamunic.com/wp-content/uploads/2015/12/DickiesJacket.jpg',
       'http://santamunic.com/wp-content/uploads/2018/12/TravelMug.jpg',
       'http://santamunic.com/wp-content/uploads/2015/12/CoffeeMug.jpg',
       'http://santamunic.com/wp-content/uploads/2015/12/HitchCover.jpg',
       'http://santamunic.com/wp-content/uploads/2015/12/Sticker.jpg',
       'http://santamunic.com/wp-content/uploads/2015/12/WaterBottle.jpg',
       'http://santamunic.com/wp-content/uploads/2019/06/STMCanLid.jpg',
       'http://santamunic.com/wp-content/uploads/2015/12/ChallengeCoin.jpg',
       'http://santamunic.com/wp-content/uploads/2015/12/Patch.jpg',
       'http://santamunic.com/wp-content/uploads/2016/01/Lithograph.jpg' ]} />
    </View>
  );
};

export const screenOptions = (navData) => {
    return{
        headerTitle: 'Shop',
        // headerRight: () => (
        //     // <Ionicons
        //     //     name={Platform.OS === 'android' ? 'md-albums' : 'ios-albums'}
        //     //     size = {24}
        //     //     color={Platform.OS === 'android' ? '#fff' : Colors.brightBlue}
        //     //     style={{  padding: 15, marginRight: 5 }}
        //     //     onPress={() => navData.navigation.navigate('FeedScreen')}
        //     // />
        // )
    };
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'black',
    flex: 1
  },
  headline_text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10
  },
  explore_text: {
    marginTop: 5,
    marginBottom: 10,
    color: 'white',
    marginLeft: 20,
    fontSize: 12,
    fontWeight: '600'
  },
});

export default AllProductsScreen;