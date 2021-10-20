
# SocialApp-React-Native

Social Networking mobile app similar to Instagram in React Native.

## Features

* Authentication using JWT.
* Forgot password.
* Edit your profile.
* Follow / Unfollow users.
* create / edit / delete posts.
* create / delete comments.
* Like / Unlike posts.
* Personal chat with users.
* Notifications on new messages.

## Run project locally

* clone this Repository by `git clone https://github.com/high-tech93/social-app-React.git`.
* Change directory `cd social-app-React`
* Make sure you have expo-cli installed. If not run `npm install -g expo-cli`
* Install the dependencies using `npm install`
* create new file env.js in root directory and add
    ```javascript
    const vars = {
        apiUrl: "https://socialapp-serverr.herokuapp.com",
        defaultImageUri: "https://socialapp-serverr.herokuapp.com/static/images/defaultprofile.jpg"
    };

    export default vars;
    ```
* Run `npm start`
* Then type in terminal `a` to run on android emulator, `i` to run on ios simulator.

For more info read `https://reactnative.dev/docs/getting-started`