import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, Platform, Alert, TouchableNativeFeedback, Dimensions } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { timeDifference } from '../../helpers/timeDifference';

import Colors from '../../constants/Colors';
import ENV from '../../env';
import { useDispatch } from 'react-redux';
import * as postActions from '../../store/actions/posts';
import { showMessage } from "react-native-flash-message";
import VerifiedUser from '../../constants/VerifiedUser';

const Card = (props) => {
    const { post, userId, fromUserProfile, toggleLikeHandler } = props;
    const navigation = useNavigation();
    const dispatch = useDispatch();

    // const liked = post.likes.indexOf(userId) !== -1;

    const [isImageLoading, setIsImageLoading] = useState(true);
    const [imageUri, setImageUri] = useState('')
    const [showFullBody, setShowFullBody] = useState(false);
    const [imgWidth, setImgWidth] = useState();
    const [imgHeight, setImgHeight] = useState();

    const onImageErrorHandler = () => {
        setImageUri(ENV.defaultImageUri)
    }


    let TouchableComp = TouchableOpacity;
    if( Platform.OS === 'android' && Platform.Version >= 21 ){
        TouchableComp = TouchableNativeFeedback
    }
 
    const deleteHandler = (id) => {
        Alert.alert(
            'Are you sure?', 
            'Do you really want to delete this post?',
            [
                {text: 'No', style: 'default'},
                {
                    text: 'Yes', 
                    style: 'destructive', 
                    onPress: async () => {
                        await dispatch(postActions.deletePost(id))
                        showMessage({
                            message: "Your post was successfully deleted.",
                            type: "success",
                            icon: { icon: "success", position: 'left' },
                            duration: 3000
                        });
                    }
                }
            ]
        )
    };

    const checkLike = () => {
        let match = post.likes.indexOf(userId) !== -1;
        return match;
    }

    const toggleLike = async () => {
        props.toggleLikeHandler(post._id, checkLike());
    }

    useEffect(() => {
        let imageUrl = `${ENV.apiUrl}/post/photo/${post._id}?${new Date(post.updated)}`;
        Image.getSize(imageUrl, (width, height) => {
            // calculate image width and height 
            const screenWidth = Dimensions.get('window').width
            const scaleFactor = width / screenWidth
            const imageHeight = height / scaleFactor
            setImgWidth(screenWidth);
            setImgHeight(imageHeight);
        })
    }, [])


    return (
        
        <TouchableComp 
            background={ Platform.OS === 'ios' ? undefined : TouchableNativeFeedback.Ripple('#b3b3b3') }
            onPress={() =>  
                fromUserProfile ? 
                {} 
                : 
                navigation.navigate('Comments',{ postId: post._id, userId: userId })}
                // navigation.navigate('UserProfile', { userId: post.postedBy._id, name: post.postedBy.name }) }
        >
            {/* {post.title === 'Post 1' ? */}
            {/* {post.title === 'Board One' || post.title === 'Board Two' || post.title === 'Board Three' || post.title === 'Board Four' || post.title === 'Board Five' ? */}
            <View style={styles.card}>
          
                <View style={{flex:1}}>
          
                    <View style={styles.cardTitleHeader}>
                        {/* <View style={{ display: 'flex', flex: 1, flexDirection: 'row' }} >
                            <View style={styles.timeContainer}>
                                <Text 
                                    style={{ fontSize: 15, alignSelf: 'center', paddingHorizontal: 10, paddingVertical: 5 }} 
                                    onPress={() => navigation.navigate('UserProfile', { userId: post.postedBy._id, name: post.postedBy.name })} 
                                > 
                                    {post.postedBy.name + " "}
                                    {
                                        VerifiedUser.verifiedUsersId.includes(post.postedBy._id) && <Octicons name="verified" size={18} color={Colors.brightBlue} />
                                    }
                                </Text>
                            </View>
                            <View style={{ position: 'absolute', right: 0, display: 'flex', flexDirection: 'row'}}>
                                <Ionicons 
                                    name={ Platform.OS === 'android' ? 'md-time' : 'ios-time' }
                                    size= {14}
                                    style={{ marginTop: 3 }}
                                />
                                <Text> {timeDifference(new Date(), new Date(post.created))} </Text>
                            </View>
                        </View> */}
                    </View>


                    <View style={styles.cardHeader}>
                        <View style={{flex:0.75, }}>
                            <View style={{ borderBottomWidth: 1, borderColor: '#cecece', bottom:5}}>
                                <Text style={styles.title}>{post.title ? post.title : ""}</Text>
                            </View>
                            
                            { post.body && post.body.length > 30 ? (
                                <View>
                                    { showFullBody ? (
                                        <Text style={styles.description}> 
                                            {post.body} 
                                            <Text
                                                style={{ color: Colors.brightBlue }}
                                                onPress={() => setShowFullBody((prevState) => !prevState)} 
                                            >
                                                Read Less
                                            </Text>
                                        </Text>
                                    ) : (
                                        <Text style={styles.description}> 
                                            {post.body.substring(0, 30)}
                                            <Text
                                                style={{ color: Colors.brightBlue }}
                                                onPress={() => setShowFullBody((prevState) => !prevState)} 
                                            >
                                                ...Read More
                                            </Text>
                                        </Text>
                                    ) }

                                </View>
                            ) : (
                                <Text style={styles.description}> {post.body} </Text>
                            ) }
                            
                        </View>
                    </View>
                

                    <View style={styles.cardFooter}>
                        <View style={styles.socialBarContainer}>
                            <View style={styles.socialBarSection}>
                                <TouchableOpacity 
                                    style={styles.socialBarButton}
                                    onPress={toggleLike}
                                >
                                    <Ionicons 
                                        name="md-thumbs-up"
                                        size={24}
                                        style={{ marginRight: 5 }}
                                        color={checkLike() ? 'blue' : "black"}
                                    />
                                    <Text style={styles.socialBarLabel}> {post.likes.length} </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.socialBarSection}>
                                <TouchableOpacity 
                                    style={styles.socialBarButton}
                                    onPress={() => navigation.navigate('Comments',{ postId: post._id, userId: userId })}
                                >
                                    <Ionicons 
                                        name="md-chatboxes"
                                        size={24}
                                        style={{ marginRight: 5 }}
                                    />
                                    <Text style={styles.socialBarLabel}> {post.comments.length} </Text>
                                </TouchableOpacity>
                            </View>  
                        </View>

                      
                    </View>
                
                </View>
                
                
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <View style={styles.cardImageContainer} >
                            <Image 
                                style={{...styles.cardImage, resizeMode: 'contain', minHeight: 100, minWidth:100, top:10 }}
                                // style={{...styles.cardImage, height: 100, width:100 }}
                                // resizeMode='contain'
                                source={{ uri: `${ENV.apiUrl}/post/photo/${post._id}?${new Date(post.updated)}` }}
                                onLoad={() => setIsImageLoading(false)}
                            />
                            <ActivityIndicator 
                                style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }} 
                                animating={isImageLoading} 
                                size='large' 
                                color={Colors.brightBlue} 
                            />
                            <Text 
                                style={{ fontSize: 15, alignSelf: 'center', paddingHorizontal: 10,  color:'#ebebeb' }} 
                                onPress={() => navigation.navigate('UserProfile', { userId: post.postedBy._id, name: post.postedBy.name })} 
                            > 
                                {post.postedBy.name + " "}
                                {
                                    VerifiedUser.verifiedUsersId.includes(post.postedBy._id) && <Octicons name="verified" size={18} color={Colors.brightBlue} />
                                }
                            </Text>
                        </View>
                </View>
              
                {/* <TouchableOpacity 
                    onPress={() => navigation.navigate('Comments', { postId: post._id, userId: userId })}
                >
                    { post.comments.length > 0 ? (
                        <Text style={{ paddingHorizontal: 16, paddingBottom: 15, paddingTop: 5 }} >View all {post.comments.length} comments </Text>
                    ) : (
                        <Text style={{ paddingHorizontal: 16, paddingBottom: 15, paddingTop: 5 }} >Comment here </Text>
                    ) }
                </TouchableOpacity>
                { post.postedBy._id === userId && (
                    <View style={styles.postActions} >
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity 
                                style={styles.socialBarButton}
                                onPress={deleteHandler.bind(this, post._id)}
                            >
                                <MaterialCommunityIcons 
                                    name="delete"
                                    size={20}
                                    style={{ marginRight: 5 }}
                                    color="red"
                                />
                                <Text style={styles.socialBarLabel}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity 
                                style={styles.socialBarButton}
                                onPress={() => navigation.navigate('EditPost', { postId: post._id })}
                            >
                                <MaterialCommunityIcons 
                                    name="square-edit-outline"
                                    size={20}
                                    style={{ marginRight: 5 }}
                                    color={Colors.lightAccent}
                                />
                                <Text style={styles.socialBarLabel}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )} */}

            </View>
            {/* :null} */}
        </TouchableComp>
    );
};

const styles = StyleSheet.create({
    userIcon: {
        height: 30,
        width: 30,
        borderRadius: 30
    },
    card: {
        width: '100%',
        elevation: 3,
        shadowColor: 'black',

        shadowOffset: {
            width: 2,
            height: 5
        },
        shadowRadius: 4,
        marginVertical: 8,
        backgroundColor: "white",
        // minHeight: 280,
        backgroundColor:'#eaeaea',
        flexDirection:'row'
    },
    cardTitleHeader: {
        paddingVertical: 15,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    cardHeader: {
        // paddingTop: 16,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex:0.6
        
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImageContainer: { 
        backgroundColor: '#c2c2c2', 
        flex: 0.25, 
        display: 'flex',
        backgroundColor:'transparent'
        // height: 275 
    },
    cardImage: {
        flex: 0.4,
        // height: 275,
        width: null,
        borderRadius: 10,
    },
    /******** card components **************/
    title: {
        fontSize: 18,
        flex: 1,
        fontWeight:'700',
        color: Colors.brightBlue,
    },
    description: {
        fontSize: 15,
        color: "#888",
        flex: 1,
        // marginTop: 5,
        marginBottom: 5,
    },
    time: {
        fontSize: 13,
        color: "#808080",
        marginTop: 5
    },
    icon: {
        width: 25,
        height: 25,
    },
    iconData: {
        width: 15,
        height: 15,
        marginTop: 5,
        marginRight: 5
    },
    timeContainer: {
        flexDirection: 'row'
    },
    /******** social bar ******************/
    socialBarContainer: {
        flexDirection: 'row',
        alignItems:'flex-start'
    },
    socialBarSection: {
        marginRight: 20
    },
    socialBarlabel: {
        marginLeft: 20
    },
    socialBarButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    postActions: {
        borderTopColor: '#c2c2c2',
        borderTopWidth: 1,
        flexDirection: 'row',
        padding: 15,
    }
})

export default Card;