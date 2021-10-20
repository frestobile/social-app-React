import React from 'react';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Icon, InlineIcon } from '@iconify/react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// npm install --save-dev @iconify/react @iconify-icons/ion
import { BottomTabBar } from '@react-navigation/bottom-tabs'


// import { createSwitchNavigator } from '@react-navigation/switch';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AllPostsScreen, { screenOptions as allPostsScreenOptions } from '../screens/post/AllPostsScreen.js';
import AllProductsScreen, { screenOptions as allProductsScreenOptions } from '../screens/shop/AllProductsScreen.js';
import FeedScreen, { screenOptions as FeedScreenOptions } from '../screens/post/FeedScreen.js';

import BoardScreen, { screenOptions as BoardScreenOptions } from '../screens/post/BoardScreen.js';

import EditPostScreen, { screenOptions as editPostScreenOptions } from '../screens/post/EditPostScreen';
import CommentsScreen, { screenOptions as commentsScreenOptions } from '../screens/post/CommentsScreen';
import AddPostScreen, { screenOptions as addPostScreenOptions } from '../screens/post/AddPostScreen';
import UserProfileScreen, { screenOptions as userProfileScreenOptions } from '../screens/user/UserProfileScreen';
import FindPeopleScreen from '../screens/user/FindPeopleScreen';
import UserStatsScreen, { screenOptions as userStatsScreenOptions } from '../screens/user/UserStatsScreen';
import UserPostsScreen, { screenOptions as userPostsScreenOptions } from '../screens/user/UserPostsScreen';
import EditProfileScreen, { screenOptions as editProfileScreenOptions } from '../screens/user/EditProfileScreen';

import ChatListScreen, { screenOptions as chatListScreenOptions } from '../screens/chat/ChatListScreen';
import ChatScreen, { screenOptions as chatScreenOptions } from '../screens/chat/ChatScreen';

import AuthScreen from '../screens/auth/AuthScreen';
import ForgotPasswordScreen, { screenOptions as forgotPasswordScreenOptions } from '../screens/auth/ForgotPasswordScreen';
import BenefitsScreen from '../screens/pages/BenefitsScreen';
import MinutesScreen from '../screens/pages/MinutesScreen';
import TicketsScreen from '../screens/pages/TicketsScreen';

import { useSelector } from 'react-redux';



const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.brightBlue : ''
    },
    // headerTitle: {
    //     fontFamily: 'open-sans-bold'
    // },
    // headerBackTitleStyle: {
    //     fontFamily: 'open-sans'
    // },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.brightBlue
};



// const HomeBoardStackNavigator = createStackNavigator();
// const HomeBoardNavigator = () => {
//     return (
//         <HomeBoardStackNavigator.Navigator
//             screenOptions={defaultNavOptions}
//         >
//             <HomeBoardStackNavigator.Screen
//                 name="HomeBoardScreen"
//                 component={HomeBoardScreen}
//                 // options={allPostsScreenOptions}
//             />
//         </HomeBoardStackNavigator.Navigator>
//     );
// };




const getTabBarVisibility = (route) => {
    const routeName = route.state
        ? route.state.routes[route.state.index].name
        : '';

    if (routeName === 'Chat' || routeName === 'AddPost' ) {
        return false;
    }

    return true;
}


const PostStackNavigator = createStackNavigator();

const PostNavigator = () => {
    return (
        <PostStackNavigator.Navigator
            screenOptions={defaultNavOptions}
        >
            <PostStackNavigator.Screen
                name="AllPosts"
                component={AllPostsScreen}
                options={allPostsScreenOptions}
            />
            <PostStackNavigator.Screen
                name="UserProfile"
                component={UserProfileScreen}
                options={userProfileScreenOptions}
            />
            <PostStackNavigator.Screen
                name="UserStats"
                component={UserStatsScreen}
                options={userStatsScreenOptions}
            />
            <PostStackNavigator.Screen
                name="UserPosts"
                component={UserPostsScreen}
                options={userPostsScreenOptions}
            />
            <PostStackNavigator.Screen
                name="Comments"
                component={CommentsScreen}
                options={commentsScreenOptions}

            />
            <PostStackNavigator.Screen
                name="EditPost"
                component={EditPostScreen}
                options={editPostScreenOptions}
            />
            <PostStackNavigator.Screen
                name="ChatList"
                component={ChatListScreen}
                options={chatListScreenOptions}
            />
            <PostStackNavigator.Screen
                name="Chat"
                component={ChatScreen}
                options={chatScreenOptions}
            />
        </PostStackNavigator.Navigator>
    );
};

const ShopStackNavigator = createStackNavigator();

const ShopNavigator = () => {
    return (
        <ShopStackNavigator.Navigator
            screenOptions={defaultNavOptions}
        >
            <ShopStackNavigator.Screen
                name="AllProducts"
                component={AllProductsScreen}
                options={allProductsScreenOptions}
            />
        </ShopStackNavigator.Navigator>
    );
};

const FeedStackNavigator = createStackNavigator();

const FeedNavigator = () => {
    return (
        <FeedStackNavigator.Navigator
            screenOptions={defaultNavOptions}
        >
            <FeedStackNavigator.Screen
                name="Feed"
                component={FeedScreen}
                options={FeedScreenOptions}
            />
            <FeedStackNavigator.Screen
                name="Chat"
                component={ChatScreen}
                options={chatScreenOptions}
            />
        </FeedStackNavigator.Navigator>
    );
};


const BoardStackNavigator = createStackNavigator();
const BoardNavigator = () => {
    return (
        <BoardStackNavigator.Navigator
            screenOptions={defaultNavOptions}
        >
            <BoardStackNavigator.Screen
                name="Social"
                component={BoardScreen}
                options={BoardScreenOptions}
            />
            {/* <BoardStackNavigator.Screen
                name="Chat"
                component={ChatScreen}
                options={chatScreenOptions}
            /> */}
        </BoardStackNavigator.Navigator>
    );
};

const FindPeopleStackNavigator = createStackNavigator();

const FindPeopleNavigator = () => {
    return (
        <FindPeopleStackNavigator.Navigator
            screenOptions={defaultNavOptions}
        >
            <FindPeopleStackNavigator.Screen
                name="Find"
                component={FindPeopleScreen}
                options={{ headerShown: false }}
            />
            <FindPeopleStackNavigator.Screen
                name="UserProfile"
                component={UserProfileScreen}
                options={userProfileScreenOptions}
            />
            <FindPeopleStackNavigator.Screen
                name="UserStats"
                component={UserStatsScreen}
                options={userStatsScreenOptions}
            />
            <FindPeopleStackNavigator.Screen
                name="UserPosts"
                component={UserPostsScreen}
                options={userPostsScreenOptions}
            />
            <FindPeopleStackNavigator.Screen
                name="Comments"
                component={CommentsScreen}
                options={commentsScreenOptions}
            />

        </FindPeopleStackNavigator.Navigator>
    );
};


const CreatePostStackNavigator = createStackNavigator();

const CreatePostNavigator = () => {
    return (
        <CreatePostStackNavigator.Navigator
            screenOptions={defaultNavOptions}
        >
            <CreatePostStackNavigator.Screen
                name="CreatePost"
                component={AddPostScreen}
                options={addPostScreenOptions}
            />
        </CreatePostStackNavigator.Navigator>
    );
};



const UserStackNavigator = createStackNavigator();

const UserNavigator = () => {
    return (
        <UserStackNavigator.Navigator
            screenOptions={defaultNavOptions}
        >
            <UserStackNavigator.Screen
                name="UserProfile"
                component={UserProfileScreen}
                options={userProfileScreenOptions}
            />
            <UserStackNavigator.Screen
                name="UserStats"
                component={UserStatsScreen}
                options={userStatsScreenOptions}
            />
            <UserStackNavigator.Screen
                name="UserPosts"
                component={UserPostsScreen}
                options={userPostsScreenOptions}
            />
            <UserStackNavigator.Screen
                name="EditProfile"
                component={EditProfileScreen}
                options={editProfileScreenOptions}
            />
        </UserStackNavigator.Navigator>
    );
};


const BottomTabNavigator = createBottomTabNavigator();

export const BottomNavigator = () => {
    // const isSocial  = useSelector(state => state.auth.isSocial)

    

    return (
        <BottomTabNavigator.Navigator
        screenOptions={({ route }) => ({
            tabBarButton: [
             
              "AddPost"
            ].includes(route.name)
              ? () => {
                  return null;
                }
              : undefined,
          })}
        // tabBar={props => <BottomTabBar {...props} state={{...props.state, routes: props.state.routes.slice(0,8)}}></BottomTabBar>}
            tabBarOptions={{
                activeTintColor: Colors.brightBlue
            }}
        >
            {/* {isSocial ? whenSocial() : whenNotSocial()} */}
            {whenNotSocial()}
        </BottomTabNavigator.Navigator>
    );
};




const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
    return (
        <AuthStackNavigator.Navigator
            screenOptions={defaultNavOptions}
        >
            <AuthStackNavigator.Screen
                name="Auth"
                component={AuthScreen}
                options={{ headerShown: false }}
            />
            <AuthStackNavigator.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
                options={forgotPasswordScreenOptions}
            />
        </AuthStackNavigator.Navigator>
    );
};

const whenSocial = () => {
    return (
        <>
        {/* <BottomTabNavigator.Screen
                name="HomeBoardScreen"
                component={HomeBoardNavigator}
                options={ ({route}) => ({
                    tabBarVisible: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: (props) => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-home' : 'ios-home'}
                            size={30}
                            color={props.color}
                        />
                    )
                })}
            /> */}

        {/* <BottomTabNavigator.Screen
            name="Feed"
            component={HomeBoardNavigator}
            options={{
                tabBarLabel: 'Board',
                tabBarIcon: (props) => (
                    <Ionicons
                        name={Platform.OS === 'android' ? 'md-albums' : 'ios-albums'}
                        size={30}
                        color={props.color}
                    />
                )
            }}
        /> */}


        <BottomTabNavigator.Screen
                name="Board"
                component={FeedNavigator}
                options={{
                    tabBarLabel: 'Board',
                    tabBarIcon: (props) => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-albums' : 'ios-albums'}
                            size={30}
                            color={props.color}
                        />
                    )
                }}
        />


        <BottomTabNavigator.Screen
                name="Home"
                component={PostNavigator}
                options={ ({route}) => ({
                    tabBarVisible: getTabBarVisibility(route),
                    tabBarLabel: 'Home',
                    tabBarIcon: (props) => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-home' : 'ios-home'}
                            size={30}
                            color={props.color}
                        />
                    )
                })}
            />
        <BottomTabNavigator.Screen
                name="Chatbox"
                component={ChatListScreen}
                options={{
                    tabBarLabel: 'Chatbox',
                    tabBarIcon: (props) => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-chatboxes' : 'ios-chatboxes'}
                            size={30}
                            color={props.color}
                        />
                    )
                }}
            />
            
            <BottomTabNavigator.Screen
                name="FindPeople"
                component={FindPeopleNavigator}
                options={{
                    tabBarLabel: 'Officers',
                    tabBarIcon: (props) => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-ribbon' : 'ios-ribbon'}
                            size={30}
                            color={props.color}
                        />
                    )
                }}
            />
            <BottomTabNavigator.Screen
                name="AddPost"
                component={CreatePostNavigator}
                options={{
                    tabBarLabel: 'Add Board',
                    tabBarIcon: (props) => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-add-circle-outline' : 'ios-add-circle-outline'}
                            size={30}
                            color={props.color}
                        />
                    )
                }}
            />
            <BottomTabNavigator.Screen
                name="YourProfile"
                component={UserNavigator}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: (props) => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-person' : 'ios-person'}
                            size={30}
                            color={props.color}
                        />
                    )
                }}
            />
    </>
    )
}

const whenNotSocial = () => {
    return (
        <>
        <BottomTabNavigator.Screen
                name="Home"
                component={PostNavigator}
                options={ ({route}) => ({
                    tabBarVisible: getTabBarVisibility(route),
                    tabBarLabel: 'Home',
                    tabBarIcon: (props) => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-home' : 'ios-home'}
                            size={30}
                            color={props.color}
                        />
                    )
                })}
        />
            <BottomTabNavigator.Screen
                name="Benefits"
                component={BenefitsScreen}
                options={{
                    tabBarLabel: 'Benefits',
                    // tabBarVisible:false,
                    tabBarIcon: (props) => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-moon' : 'ios-moon'}
                            size={30}
                            color={props.color}
                        />
                    )
                }}
            />
            <BottomTabNavigator.Screen
                name="Minutes"
                component={MinutesScreen}
                options={{
                    tabBarLabel: 'Minutes',
                    tabBarIcon: (props) => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-mic' : 'ios-mic'}
                            size={30}
                            color={props.color}
                        />
                    )
                }}
            />
                        <BottomTabNavigator.Screen
                name="Board"
                component={FeedNavigator}
                options={{
                    tabBarLabel: 'Board',
                    tabBarIcon: (props) => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-albums' : 'ios-albums'}
                            size={30}
                            color={props.color}
                        />
                    )
                }}
            />
            <BottomTabNavigator.Screen
                name="Shop"
                component={ShopNavigator}
                options={{
                    tabBarLabel: 'Shop',
                    tabBarIcon: (props) => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-basket' : 'ios-basket'}
                            size={30}
                            color={props.color}
                        />
                    )
                }}
            />
             <BottomTabNavigator.Screen
                name="Chatbox"
                component={ChatListScreen}
                options={{
                    tabBarLabel: 'Chatbox',
                    tabBarIcon: (props) => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-chatboxes' : 'ios-chatboxes'}
                            size={30}
                            color={props.color}
                        />
                    )
                }}
            />
            

            {/* <BottomTabNavigator.Screen
                name="FindPeople"
                component={FindPeopleNavigator}
                options={{
                    tabBarLabel: 'Officer',
                    tabBarIcon: (props) => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-ribbon' : 'ios-ribbon'}
                            size={30}
                            color={props.color}
                        />
                    )
                }}
            /> */}
            {/* <BottomTabNavigator.Screen
                name="Social"
                component={BoardNavigator}
                options={{
                    tabBarLabel: 'Social',
                    tabBarIcon: (props) => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-ribbon' : 'ios-ribbon'}
                            size={30}
                            color={props.color}
                        />
                    )
                }}
            /> */}

            <BottomTabNavigator.Screen
                name="Tickets"
                component={TicketsScreen}
                options={{
                    tabBarLabel: 'Tickets',
                    tabBarIcon: (props) => (
                        <FontAwesome name="ticket" size={30} color={props.color} />
                    )
                }}
            />
            <BottomTabNavigator.Screen
                name="YourProfile"
                component={UserNavigator}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: (props) => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-person' : 'ios-person'}
                            size={30}
                            color={props.color}
                        />
                    )
                }}
            />

           
<BottomTabNavigator.Screen
                name="AddPost"
                component={CreatePostNavigator}
                tabBarOptions={{ showLabel: false, style: { height: 40, width: '166%', }, visible: false, }}
                // tabBarOptions={
                //     {
                //         style: {
                //             backgroundColor: 'white',
                //             alignItems: 'center',
                //           },
                //           labelStyle: {
                //             fontSize: 16,
                //           },
                //           activeTintColor: '#444444',
                //           inactiveTintColor: 'lightgrey',
                //           showIcon: false,
                //     }
                // }
                // options={ ({route}) => ({
                //     // tabBarLabel: 'Add Board',
                //     tabBarOptions: {
                //         style: {
                //           backgroundColor: 'white',
                //           alignItems: 'center',
                //         },
                //         labelStyle: {
                //           fontSize: 16,
                //         },
                //         activeTintColor: '#444444',
                //         inactiveTintColor: 'lightgrey',
                //         showIcon: false,
                //       },
                //     labelStyle: {
                //         position: 'absolute',
                //         top: 0,
                //         bottom: 0,
                //         left: 0,
                //         right: 0,
                //         textAlignVertical: 'center',
                //       },

                    // tabBarIcon: (props) => (
                    //     <Ionicons
                    //         name={Platform.OS === 'android' ? 'md-add-circle-outline' : 'ios-add-circle-outline'}
                    //         size={30}
                    //         color={props.color}
                    //     />
                    // )
                // })}
            /> 
        </>
    )
}
