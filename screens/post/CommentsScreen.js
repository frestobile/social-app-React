import React, { useState, useCallback } from 'react';
import {ScrollView,  StyleSheet, Text, View,FlatList, TextInput, KeyboardAvoidingView, Alert, ActivityIndicator, TouchableOpacity, Image, Dimensions, Platform  } from 'react-native';

import Comment from '../../components/UI/Comment';
import { useSelector, useDispatch } from 'react-redux';

import * as postsActions from '../../store/actions/posts';
import Colors from '../../constants/Colors';
import { showMessage } from "react-native-flash-message";

import ENV from '../../env';

const { width, height } = Dimensions.get('window')

const CommentsScreen = (props) => {

    const [text, setText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const { route } = props;
    const postId = route.params.postId;
    const userId = route.params.userId;
    
    const dispatch = useDispatch();

    const posts = useSelector(state => state.posts.allPosts);
    const postIndex = posts.findIndex(post => post._id === postId);
    const comments = posts[postIndex].comments;

    const title = posts[postIndex].title 
    const body = posts[postIndex].body 

    console.log('posts[postIndex].title; :: ', posts[postIndex].title)
    console.log('posts[postIndex].body; :: ', posts[postIndex].body)
    // console.log('posts[postIndex].body; :: ', posts[postIndex].body)
    // <Image 
    //     style={{...styles.cardImage, minHeight: 100 }}
    //     // style={{...styles.cardImage, height: 100, width:100 }}
    //     // resizeMode='fill'
    //     source={{ uri: `${ENV.apiUrl}/post/photo/${post._id}?${new Date(post.updated)}` }}
    //     onLoad={() => setIsImageLoading(false)}
    // />


    const loadPosts = useCallback(async () => {
        setIsRefreshing(true);
        try {
            await dispatch(postsActions.fetchPosts());

        } catch (err) {
            Alert.alert(
                'Error',
                error.message,
                [{ text: 'Okay' }]
            );
        }
        setIsRefreshing(false);
    }, [dispatch])

    const createCommentHandler = async () => {
        if(text.length === 0){
            Alert.alert(
                'Please enter some text',
                'Cannot create empty comment',
                [{ text: 'Okay' }]
            );
        } else {
            setIsLoading(true);
            try {
                await dispatch(postsActions.commentPost(postId, text))
            } catch (error) {
                Alert.alert(
                    'Error, cannot comment',
                    error.message,
                    [{ text: 'Okay' }]
                );
            }
            setText('');
            setIsLoading(false);
        }
    }


    const deleteCommentHandler = async (comment) => {
        Alert.alert(
            'Are you sure?', 
            'Do you really want to delete this comment?',
            [
                {text: 'No', style: 'default'},
                {
                    text: 'Yes', 
                    style: 'destructive', 
                    onPress: async () => {
                        try {
                            showMessage({
                                message: `Your comment was deleted.`,
                                type: "warning",
                                duration: 3000,
                                icon: { icon: "warning", position: 'left' }
                            });
                            await dispatch(postsActions.uncommentPost(postId,comment))
                        } catch (error) {
                            Alert.alert(
                                'Error, cannot delete this comment',
                                error.message,
                                [{ text: 'Okay' }]
                            );
                        }
                    }
                }
            ]
        );
    };


    return Platform.OS === 'ios' ? (<KeyboardAvoidingView style={{flex:1}} behavior='position' enabled={true} >
        {/* <View style={{flex:1}}> */}
        <ScrollView>

        <View style={{flex: 1}}>
           
           <View style={{flexDirection:'column'}}>
            <Text style={{textAlign:'center', fontSize: 18, fontWeight:'700', color: Colors.brightBlue }}>
                    {title}
            </Text>
            <Text style={{textAlign:'center', flexDirection:'column' }}>
                    {body}
            </Text>
           </View>
            
            
            <View>
                <Image 
                    style={{ 
                        // height: 275,
                        // width: null,
                        minHeight: width,
                        
                        //  overflow: 'hidden',
                        //  height: 247,
                        //  position: 'absolute',
                        //  top: 0,       
                        }}
                    // style={{...styles.cardImage, height: 100, width:100 }}
                    resizeMode='contain'
                    source={{ uri: `${ENV.apiUrl}/post/photo/${posts[postIndex]._id}?${new Date(posts[postIndex].created)}` }}
                    // onLoad={() => setIsImageLoading(false)}
                />
            </View>

            {/* <View style={{flex:1, minHeight:200, }}> */}
                {/* <Text style={{}}>
                    {body}
                </Text>     */}
            {/* </View> */}
            
        </View>
    
        {/* <View style={{}}> */}
                  
        {/* </View> */}

        
 
        
           
                
        <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Leave a comment..."
                value={text}
                onChangeText={(value) => setText(value)}
            />
            <View 
                style={styles.postButtonContainer}
            >
                <TouchableOpacity
                    onPress={createCommentHandler}
                >
                    { isLoading ? (
                        <ActivityIndicator size="small" color="white" />
                    ) : (
                        <Text style={{ color: '#fff', textAlign: 'center'  }} >Submit</Text>
                    ) }
                </TouchableOpacity>
            </View>
        </View>
        <FlatList
        style={styles.root}
        onRefresh={loadPosts}
        refreshing={isRefreshing}
        data={comments.reverse()}
        ItemSeparatorComponent={() => {
            return (
                <View style={styles.separator} />
            )
        }}
        keyExtractor={(item) => {
            return item._id;
        }}
        renderItem={(item) => {
            const comment = item.item;
            return(
                <Comment comment={comment} deleteCommentHandler={deleteCommentHandler} userId={userId} />
            );
        }}
        />
        </ScrollView>
        
        </KeyboardAvoidingView>) : (<View style={{flex:1}}>
            <ScrollView>
    
            <View style={{flex: 1}}>
               
               <View style={{flexDirection:'column'}}>
                <Text style={{textAlign:'center', fontSize: 18, fontWeight:'700', color: Colors.brightBlue }}>
                        {title}
                </Text>
                <Text style={{textAlign:'center', flexDirection:'column' }}>
                        {body}
                </Text>
               </View>
                
                
                <View>
                    <Image 
                        style={{ 
                            // height: 275,
                            // width: null,
                            minHeight: width,
                            
                            //  overflow: 'hidden',
                            //  height: 247,
                            //  position: 'absolute',
                            //  top: 0,       
                            }}
                        // style={{...styles.cardImage, height: 100, width:100 }}
                        resizeMode='contain'
                        source={{ uri: `${ENV.apiUrl}/post/photo/${posts[postIndex]._id}?${new Date(posts[postIndex].created)}` }}
                        // onLoad={() => setIsImageLoading(false)}
                    />
                </View>
    
                {/* <View style={{flex:1, minHeight:200, }}> */}
                    {/* <Text style={{}}>
                        {body}
                    </Text>     */}
                {/* </View> */}
                
            </View>
    
            <FlatList
            style={styles.root}
            onRefresh={loadPosts}
            refreshing={isRefreshing}
            data={comments.reverse()}
            ItemSeparatorComponent={() => {
                return (
                    <View style={styles.separator} />
                )
            }}
            keyExtractor={(item) => {
                return item._id;
            }}
            renderItem={(item) => {
                const comment = item.item;
                return(
                    <Comment comment={comment} deleteCommentHandler={deleteCommentHandler} userId={userId} />
                );
            }}
            />
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Leave a comment..."
                    value={text}
                    onChangeText={(value) => setText(value)}
                />
                <View 
                    style={styles.postButtonContainer}
                >
                    <TouchableOpacity
                        onPress={createCommentHandler}
                    >
                        { isLoading ? (
                            <ActivityIndicator size="small" color="white" />
                        ) : (
                            <Text style={{ color: '#fff', textAlign: 'center'  }} >Submit</Text>
                        ) }
                    </TouchableOpacity>
                </View>
            </View>
            </View>)

        {/* {Platform.OS === 'íos' ? (<KeyboardAvoidingView behavior='position' enabled={true} >
        <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Leave a comment..."
                value={text}
                onChangeText={(value) => setText(value)}
            />
            <View 
                style={styles.postButtonContainer}
            >
                <TouchableOpacity
                    onPress={createCommentHandler}
                >
                    { isLoading ? (
                        <ActivityIndicator size="small" color="white" />
                    ) : (
                        <Text style={{ color: '#fff', textAlign: 'center'  }} >Submit</Text>
                    ) }
                </TouchableOpacity>
            </View>
        </View>
        </KeyboardAvoidingView>) : 
        (<View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Leave a comment..."
                value={text}
                onChangeText={(value) => setText(value)}
            />
            <View 
                style={styles.postButtonContainer}
            >
                <TouchableOpacity
                    onPress={createCommentHandler}
                >
                    { isLoading ? (
                        <ActivityIndicator size="small" color="white" />
                    ) : (
                        <Text style={{ color: '#fff', textAlign: 'center'  }} >Submit</Text>
                    ) }
                </TouchableOpacity>
            </View>
        </View>)} */}
        {/* </View> */}

};


export const screenOptions = {
    headerTitle: 'Topic'
}

const styles = StyleSheet.create({
    root: {
        flex:1,
        backgroundColor: "#ffffff",
        // marginBottom: 45
    },
    inputs: {
        // height: 45,
        width: '85%',
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 4,
        // position: 'absolute',
        bottom: 0,
        paddingRight: 20
    },
    inputContainer: {
        // flex: 1,
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        width: '100%',
        // height: 45,
        flexDirection: 'row',
        alignItems: 'center',

        shadowColor: "#808080",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    postButtonContainer: {
        // position: 'absolute', 
        right: 0, 
        height: 45,
        width: '15%' , 
        backgroundColor: Colors.brightBlue, 
        padding: 5, 
        display: 'flex', 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CommentsScreen;