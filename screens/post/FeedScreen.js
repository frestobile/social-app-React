import React, {useState, useCallback, useEffect, useRef} from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Button, Platform, AsyncStorage } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'

import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';

import * as postsActions from '../../store/actions/posts';
import * as usersActions from '../../store/actions/users';
import * as chatActions from '../../store/actions/chat';
import { useFocusEffect } from '@react-navigation/core';

const FeedScreen = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState();

    const refPosts = useRef(null);

    const posts = useSelector(state => state.posts.allPosts);
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
    useFocusEffect(
        React.useCallback(()=> {
            changeTabRoute(true)
            return () => {
                changeTabRoute(false)
            }
        })
    )

    const changeTabRoute = async (status) => {
        await dispatch(authActions.changeSocialState(status))
    }


    // useEffect(() => {
    //     const unsubscribe = props.navigation.addListener('focus', loadPosts);

    //     return () => {
    //         unsubscribe();
    //     };
    // }, [loadPosts])
    // useEffect(() => {
    //     const unsubscribe = navigation.dangerouslyGetParent().addListener('tabPress', e => {
    //         console.log("TAB PRESSED");
    //         if(refPosts.current){
    //             refPosts.current.scrollToIndex({ animated: true, index: 0 });
    //         }
    //     });

    //     return () => {
    //         unsubscribe();
    //     };
    // }, [])

    useEffect(() => {
        setIsLoading(true);
        loadPosts()
        .then(() => {
            setIsLoading(false);
        });
    }, [dispatch, loadPosts])

    if(error){
        return (
            <View style={styles.centered} >
                <Text>An error occured.</Text>
                <Button title="Try again" onPress={loadPosts} color={Colors.primary} />
            </View>
        );
    }


    if(isLoading){
        return (
            <View style={styles.centered} >
                <ActivityIndicator size='large' color={Colors.primary} />
            </View>
        );
    }


    if(!isLoading && posts.length === 0){
        return(
            <View style={styles.centered} >
                <Text>No posts found. Maybe start adding some!</Text>
            </View>
        );
    }

    return (
        <View style={styles.screen} >
            <FlatList
                ref={refPosts}
                style={styles.list}
                onRefresh={loadPosts}
                refreshing={isRefreshing}
                // data={posts}
                data={posts.slice(0, 10)}
                keyExtractor={(item) => item._id }
                ItemSeparatorComponent={() => {
                    return (
                        <View style={styles.separator} />
                    )
                }}
                renderItem={(post) => {
                    console.log("posts - ",post);

                    return <Card post={post.item} userId={loggedUser._id} toggleLikeHandler={toggleLikeHandler} /> 

                    // return post.item.title === 'Board One' || post.item.title === 'Board Two' || post.item.title === 'Board Three' || post.item.title === 'Board Four' || post.item.title === 'Board Five' ? 
                    // <Card post={post.item} userId={loggedUser._id} toggleLikeHandler={toggleLikeHandler} /> : null

                    // if (post.title === 'Board One' || post.title === 'Board Two' || post.title === 'Board Three' || post.title === 'Board Four' || post.title === 'Board Five' ){
                        // post.title === 'Board One' || post.title === 'Board Two' || post.title === 'Board Three' || post.title === 'Board Four' || post.title === 'Board Five' ?
                //    return(
                //         <Card post={post.item} userId={loggedUser._id} toggleLikeHandler={toggleLikeHandler} /> 
                //         // : null
                //         )
                    // }
                }} 
            />

        </View>
    );
};



export const screenOptions = (navData) => {
    return{
        headerTitle: 'Recent Boards',
        headerRight: () => (
            <Ionicons
                name={Platform.OS === 'android' ? 'md-add-circle-outline' : 'ios-add-circle-outline'}
                size = {30}
                color={Platform.OS === 'android' ? '#fff' : Colors.brightBlue}
                style={{   marginRight: 15 }}
                onPress={() => navData.navigation.navigate('AddPost')}
            />
        )
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

})

export default FeedScreen;