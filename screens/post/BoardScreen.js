import React, {useState, useCallback, useEffect, useRef} from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Button, Platform, AsyncStorage } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'

import CardSocial from '../../components/UI/CardSocial';
import Colors from '../../constants/Colors';

import * as postsActions from '../../store/actions/posts';
import * as usersActions from '../../store/actions/users';
import * as chatActions from '../../store/actions/chat';
import { useFocusEffect } from '@react-navigation/core';



const testData =  [{
    "id": 81,
    "date": "2016-12-10T07:09:30",
    "date_gmt": "2016-12-10T07:09:30",
    "guid": {
        "rendered": "http://themes.themegoods.com/grandtour/demo/?p=81"
    },
    "modified": "2016-12-10T07:09:30",
    "modified_gmt": "2016-12-10T07:09:30",
    "slug": "my-memorial-day-tribute-to-someone-who-told-me-to-travel",
    "status": "publish",
    "type": "post",
    "link": "http://go.bestfaretravelo.com/2016/12/10/my-memorial-day-tribute-to-someone-who-told-me-to-travel/",
    "title": {
        "rendered": "Memorial Day to Someone Told Me to Travel"
    },
    "content": {
        "rendered": "<p class=\"p1\"><span class=\"s1\">Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie consequat flexitarian four loko tempor duis single-origin coffee. Banksy, elit small batch freegan sed.</span></p>\n<div id=\"attachment_48\" style=\"width: 1034px\" class=\"wp-caption alignnone\"><img aria-describedby=\"caption-attachment-48\" loading=\"lazy\" class=\"wp-image-48 size-large\" src=\"http://themes.themegoods.com/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-1024x683.jpg\" width=\"1024\" height=\"683\" /><p id=\"caption-attachment-48\" class=\"wp-caption-text\">The road to success and the road to failure are almost exactly the same</p></div>\n<p class=\"p1\"><span class=\"s1\">Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean vinegar stumptown yr pop-up artisan sunt. Craft beer elit seitan exercitation, photo booth,</span></p>\n<div id=\"attachment_64\" style=\"width: 1034px\" class=\"wp-caption alignnone\"><img aria-describedby=\"caption-attachment-64\" loading=\"lazy\" class=\"wp-image-64 size-large\" src=\"http://themes.themegoods.com/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24377-1024x683.jpg\" width=\"1024\" height=\"683\" /><p id=\"caption-attachment-64\" class=\"wp-caption-text\">Emotional discomfort, when accepted, rises, crests and falls in a series of waves.</p></div>\n<blockquote><p>Design is a funny word. Some people think design means how it looks. But of course, if you dig deeper, it&#8217;s really how it works.</p></blockquote>\n<p class=\"p1\"><span class=\"s1\">Foam padding in the insoles leather finest quality staple flat slip-on design pointed toe off-duty shoe. Black knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design.</span></p>\n<p class=\"p1\"><span class=\"s1\">See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing. Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket. Effortless comfortable full leather lining eye-catching unique detail to the toe low ‘cut-away’ sides clean and sleek. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design.</span></p>\n",
        "protected": false
    },
    "excerpt": {
        "rendered": "<p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life [&hellip;]</p>\n",
        "protected": false
    },
    "author": 1,
    "featured_media": 83,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "template": "",
    "format": "standard",
    "meta": [],
    "categories": [
        16
    ],
    "tags": [
        18,
        21,
        22
    ],
    "_links": {
        "self": [
            {
                "href": "http://go.bestfaretravelo.com/wp-json/wp/v2/posts/81"
            }
        ],
        "collection": [
            {
                "href": "http://go.bestfaretravelo.com/wp-json/wp/v2/posts"
            }
        ],
        "about": [
            {
                "href": "http://go.bestfaretravelo.com/wp-json/wp/v2/types/post"
            }
        ],
        "author": [
            {
                "embeddable": true,
                "href": "http://go.bestfaretravelo.com/wp-json/wp/v2/users/1"
            }
        ],
        "replies": [
            {
                "embeddable": true,
                "href": "http://go.bestfaretravelo.com/wp-json/wp/v2/comments?post=81"
            }
        ],
        "version-history": [
            {
                "count": 0,
                "href": "http://go.bestfaretravelo.com/wp-json/wp/v2/posts/81/revisions"
            }
        ],
        "wp:featuredmedia": [
            {
                "embeddable": true,
                "href": "http://go.bestfaretravelo.com/wp-json/wp/v2/media/83"
            }
        ],
        "wp:attachment": [
            {
                "href": "http://go.bestfaretravelo.com/wp-json/wp/v2/media?parent=81"
            }
        ],
        "wp:term": [
            {
                "taxonomy": "category",
                "embeddable": true,
                "href": "http://go.bestfaretravelo.com/wp-json/wp/v2/categories?post=81"
            },
            {
                "taxonomy": "post_tag",
                "embeddable": true,
                "href": "http://go.bestfaretravelo.com/wp-json/wp/v2/tags?post=81"
            }
        ],
        "curies": [
            {
                "name": "wp",
                "href": "https://api.w.org/{rel}",
                "templated": true
            }
        ]
    }
}]



const BoardScreen = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState();

    const refPosts = useRef(null);

    const posts = useSelector(state => state.posts.allPosts);
    // const boardPosts = useSelector(state => state.posts.allPosts);
    // console.log('boardPosts:: ', boardPosts)
    // const boardPosts = useSelector(state => state.boardPosts.allBoardPosts);
    const loggedUser = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    
    const [boardPosts, setData] = useState([])
    // const getArticlesFromApi =  () => {
    //     let response = fetch(
    //       'http://go.bestfaretravelo.com/wp-json/wp/v2/posts'
    //     );
    //     // let json =  response.json();

    //     console.log('json:: ', response)
    //     setData(response)
    //     return response;
    // }
    const getArticlesFromApi = async () => {
        let response = await fetch(
          'http://go.bestfaretravelo.com/wp-json/wp/v2/posts'
        );
        let json = await response.json();

        // console.log('json:: ', json)
        setData(json)
        return json;
    }


    useEffect(() => {
        // fetchData()
        getArticlesFromApi()
     
        // console.log('response:: ', response)
    }, [])
    // }, [input])


    const loadPosts = useCallback(async () => {
        setError(null);
        setIsRefreshing(true);
        try {
            await dispatch(postsActions.fetchPosts());
            // await dispatch(postsActions.fetchBoardPosts());
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
                data={boardPosts}
                // data={posts}
                // data={posts}
                keyExtractor={(item) => item.id }
                ItemSeparatorComponent={() => {
                    return (
                        <View style={styles.separator} />
                    )
                }}
                renderItem={(item) => {
                    // console.log("posts - ",post.index);
                    return (
                        <CardSocial post={item.item}  />
                    )
                }} 
            />

        </View>
    );
};



export const screenOptions = (navData) => {
    return{
        headerTitle: 'Social',
        headerRight: () => (
            <Ionicons
                name={Platform.OS === 'android' ? 'md-chatboxes' : 'ios-chatboxes'}
                size = {24}
                color={Platform.OS === 'android' ? '#fff' : Colors.brightBlue}
                style={{  padding: 15, marginRight: 5 }}
                onPress={() => navData.navigation.navigate('ChatList')}
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

export default BoardScreen;