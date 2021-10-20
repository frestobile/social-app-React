import React, {useState, useCallback, useEffect, useRef} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Button, Platform, AsyncStorage, Col, Row, Grid, ScrollView, Dimensions  } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'
import { FlatGrid } from 'react-native-super-grid';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';

import * as postsActions from '../../store/actions/posts';
import * as usersActions from '../../store/actions/users';
import * as chatActions from '../../store/actions/chat';

import VerifiedUser from "../../constants/VerifiedUser";

console.disableYellowBox = true;

const AllPostsScreen = (props) => {

    const { width, height } = Dimensions.get('window')

    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState();

    const refPosts = useRef(null);
    

    const posts = useSelector(state => state.posts.allPosts);


    useEffect(() => {
        // setIsLoading(true);
        // loadPosts()
        dispatch(usersActions.fetchUsers());
        // .then(() => {
        //     setIsLoading(false);
        // });
    }, [])

    // const users = useSelector(state => state.users.allUsers);

    // const currUser = users.filter(u => u._id === userId)[0];

    // console.log('users:: ', VerifiedUser.verifiedUsersId.includes(currUser._id))


    
    const loggedUser = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const loadPosts = useCallback(async () => {
        setError(null);
        setIsRefreshing(true);
        try {
            await dispatch(postsActions.fetchPosts());
            await dispatch(usersActions.fetchUsers());
            await dispatch(chatActions.fetchChatList());

        } catch (err) {
            setError(err.message);
        }
        setIsRefreshing(false);
    }, [dispatch, setIsLoading, setError])


    const changeTabRoute = async (status) => {
        await dispatch(authActions.changeSocialState(status))
    }

    const toggleLikeHandler = async (postId, isLiked) => {
        
        try {
            if(isLiked){
                await dispatch(postsActions.unlikePost(postId))
            } else {
                await dispatch(postsActions.likePost(postId))
            }
        } catch (error) {
            console.log("ERROR ", error)
        }
    }
   
    return (
    <ScrollView style={{flex: 1}}>

        <View style={{height: 'auto', margin: 10, padding: 20, backgroundColor: '#5fe5b3', borderRadius: 10 }}>
          <Text style={{fontSize: 20, paddingBottom: 10, color: '#fff', fontWeight: '700'}}>Post a SMPOA Notice</Text>
          <Text style={{fontSize: 16, paddingBottom: 10, color: '#fff', fontWeight: '700'}}>Have extra tickets or overtime?  Click on the boards to view what other officers have to share.</Text>
          
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            {/* <View style={{width: width/2-30, marginRight:6}}> */}
            <View style={{width:width-50}}>
                <TouchableOpacity
                    style={{borderRadius:5, padding:10, backgroundColor:'black', height: 50, alignItems:'center', justifyContent:'center'}}
                    onPress={() => navigation.navigate('Board')}
                >
                    <Text style={{fontSize: 15, color: '#fff', fontWeight: '700',}}>
                    View the board
                    </Text>
                </TouchableOpacity>
                {/* <Button  
                    // Some properties given to Button
                    title="View The Board"
                    onPress={() => Alert.alert(
                        'Its GeeksforGeeks !')}
                    /> */}
            </View>

            {/* <View style={{width: width/2-30, marginLeft:6}}> */}
            {/* <TouchableOpacity
                    style={{borderRadius:5, padding:10, backgroundColor:'black', height: 50, alignItems:'center', justifyContent:'center'}}
                    onPress={() => props.navigation.navigate('AddPost')}
                >
                    <Text style={{fontSize: 15, color: '#fff', fontWeight: '700',}}>
                    Click To Add Topic
                    </Text>
                </TouchableOpacity>
               
            </View> */}
        </View>
          {/* <Text style={{fontSize: 15, color: '#fff', fontWeight: '700', marginBottom: 20}}></Text> */}
        </View>

        <View style={{height: 'auto', margin: 10, padding: 20, backgroundColor: '#8e97fd', borderRadius: 10 }}>
          <Text style={{fontSize: 20, paddingBottom: 10, color: '#fff', fontWeight: '700'}}>Chat with Other Officers</Text>
          <Text style={{fontSize: 15, color: '#fff', fontWeight: '700', marginBottom: 20}}>Want to send messages to fellow officers?</Text>
          <View>
                <TouchableOpacity
                    style={{borderRadius:5, padding:10, backgroundColor:'black', height: 50, alignItems:'center', justifyContent:'center'}}
                    onPress={() => props.navigation.navigate('Chatbox')}
                >
                    <Text style={{fontSize: 15, color: '#fff', fontWeight: '700',}}>
                    Start Chatting
                    </Text>
                </TouchableOpacity>
              {/* <Button  
                // Some properties given to Button
                title="Read More"
                onPress={() => props.navigation.navigate('FindPeople')}/> */}

          </View>
        </View>

        <View style={{height: 'auto', margin: 10, padding: 20, backgroundColor: '#ffc97e', borderRadius: 10 }}>
          <Text style={{fontSize: 20, paddingBottom: 10, color: '#fff', fontWeight: '700'}}>Explore Benefits</Text>
          <Text style={{fontSize: 15, color: '#fff', fontWeight: '700', marginBottom: 20}}>Discounts on tickets, legal aid, peer support, resources and libraries of documents you may need for yourself. Let’s get exploring.</Text>
          <View>
            <TouchableOpacity
                style={{borderRadius:5, padding:10, backgroundColor:'black', height: 50, alignItems:'center', justifyContent:'center'}}
                onPress={() => props.navigation.navigate('Benefits')}
            >
                <Text style={{fontSize: 15, color: '#fff', fontWeight: '700',}}>
                Explore Benefits
                </Text>
            </TouchableOpacity>
              {/* <Button  
                // Some properties given to Button
                title="Read More"
                onPress={() => props.navigation.navigate('Benefits')}/> */}
          </View>
        </View>

        <View style={{height: 'auto', margin: 10, padding: 20, backgroundColor: '#3498db', borderRadius: 10 }}>
          <Text style={{fontSize: 20, paddingBottom: 10, color: '#fff', fontWeight: '700'}}>Meeting Minutes</Text>
          <Text style={{fontSize: 15, color: '#fff', fontWeight: '700', marginBottom: 20}}>Getting the info about the Meeting minutes.</Text>
          <View>
            <TouchableOpacity
                    style={{borderRadius:5, padding:10, backgroundColor:'black', height: 50, alignItems:'center', justifyContent:'center'}}
                    onPress={() => props.navigation.navigate('Minutes')}
                >
                    <Text style={{fontSize: 15, color: '#fff', fontWeight: '700',}}>
                    View Minutes
                    </Text>
            </TouchableOpacity>
              {/* <Button  
                // Some properties given to Button
                title="Read More"
                onPress={() => props.navigation.navigate('Minutes')}/> */}
          </View>
        </View>

    </ScrollView>
    );
};



export const screenOptions = (navData) => {
    return{
        headerTitle: 'Smpoa',
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
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    list: {
        width: '100%',
    },
    separator: {
        marginTop: 10,
    },
    gridView: {
        marginTop: 10,
        flex: 1,
      },
      itemContainer: {
        justifyContent: 'flex-start',
        borderRadius: 10,
        padding: 30,
        height: 190,
      },
      itemName: {
        fontSize: 20,
        paddingBottom: 10,
        color: '#fff',
        fontWeight: '700',
      },
      itemDescription: {
        fontWeight: '600',
        fontSize: 14,
        color: '#fff',
      },
      appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },

})

export default AllPostsScreen;