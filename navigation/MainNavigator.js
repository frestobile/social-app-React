import React from 'react';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// npm install --save-dev @iconify/react @iconify-icons/ion


import { createStackNavigator } from '@react-navigation/stack';
import { createMainTabNavigator } from '@react-navigation/bottom-tabs';

import AllPostsScreen, { screenOptions as allPostsScreenOptions } from '../screens/post/AllPostsScreen';
import FeedScreen, { screenOptions as FeedScreenOptions } from '../screens/post/FeedScreen';
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
import SmpoaScreen from '../screens/pages/SmpoaScreen';



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


const getTabBarVisibility = (route) => {
    const routeName = route.state
        ? route.state.routes[route.state.index].name
        : '';

    if (routeName === 'Chat' ) {
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
                name="Feed"
                component={feedScreen}
                options={FeedScreenOptions}
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
                name="Social"
                component={SmpoaScreen}
            />
            <PostStackNavigator.Screen
                name="Chat"
                component={ChatScreen}
                options={chatScreenOptions}
            />
        </PostStackNavigator.Navigator>
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


const MainTabNavigator = createMainTabNavigator();

export const MainNavigator = () => {
    return (
        <MainTabNavigator.Navigator
            tabBarOptions={{
                activeTintColor: Colors.brightBlue
            }}
        >
            <MainTabNavigator.Screen
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

            <MainTabNavigator.Screen
                name="Benefits"
                component={BenefitsScreen}
                options={{
                    tabBarLabel: 'Benefits',
                    tabBarIcon: (props) => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-moon' : 'ios-people'}
                            size={30}
                            color={props.color}
                        />
                    )
                }}
            />

            <MainTabNavigator.Screen
                name="Minutes"
                component={MinutesScreen}
                options={{
                    tabBarLabel: 'Minutes',
                    tabBarIcon: (props) => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-mic' : 'ios-people'}
                            size={30}
                            color={props.color}
                        />
                    )
                }}
            />

            <MainTabNavigator.Screen
                name="Tickets"
                component={TicketsScreen}
                options={{
                    tabBarLabel: 'Tickets',
                    tabBarIcon: (props) => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-wallet' : 'ios-people'}
                            size={30}
                            color={props.color}
                        />
                    )
                }}
            />

            <MainTabNavigator.Screen
                name="FindPeople"
                component={FindPeopleNavigator}
                options={{
                    tabBarLabel: 'Social',
                    tabBarIcon: (props) => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-people' : 'ios-people'}
                            size={30}
                            color={props.color}
                        />
                    )
                }}
            />

            <MainTabNavigator.Screen
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

        </MainTabNavigator.Navigator>
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
