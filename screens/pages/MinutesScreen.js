import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    View,
    StatusBar,
    Image,
} from 'react-native';

import { showMessage } from "react-native-flash-message";
import { Linking } from 'react-native';
import { useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';

const MinutesScreen = () => {

    const [email, setEmail] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const validateAuthForm = () => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!emailRegex.test(email.toLowerCase())){
            showMessage({
                message: "Please enter a valid email.",
                type: "danger",
                icon: { icon: "danger", position: 'left' },
                duration: 3000
            });
            return false;
        }
        
        return true;
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <Text style={{ fontSize: 27, fontWeight: 'bold', marginVertical: 10 }} >Board Meeting Agendas and Minutes</Text>

              <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10 }} >2021</Text>

              <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10 }} >2020</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold',marginVertical: 10 }}>SMPOA Board Minutes 2020</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2020/01/POA-Board-Meeting-Minutes-01.09.2020.pdf')}>January 22, 2020</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2020/02/02.13.2020-POA-Board-Meeting-Minutes.pdf')}>February 24, 2020</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2020/04/03.12.2020-POA-Board-Meeting-Minutes.pdf')}>March 30, 2020</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2020/07/04.09.2020-POA-Board-Meeting-Minutes.pdf')}>April 30, 2020</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2020/07/06.18.2020-POA-Board-Meeting-Minutes.pdf')}>June 30, 2020</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2020/07/07.09.2020-POA-Board-Meeting-Minutes.pdf')}>July 15, 2020</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2020/09/08.13.2020-BOD-Meeting-Minutes.pdf')}>August 30, 2020</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2020/09/08.25.2020-BOD-Special-Meeting-Minutes.pdf')}>August 30, 2020</Text>
              
              <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10 }} >2019</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold',marginVertical: 10 }}>SMPOA Board Meeting Minutes 2019</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2019/01/01.10.2019-POA-Board-Meeting-Minutes.pdf')}>January 29, 2019</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2019/02/02.07.2019-POA-Board-Meeting-Minutes.pdf')}>February 22, 2019</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2019/03/03.07.2019-BOD-Meeting-Minutes.pdf')}>March 26, 2019</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2019/04/04.04.2019-POA-Board-Meeting-Minutes.pdf')}>April 27, 2019</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2019/05/05.02.2019-POA-Board-Meeting-Minutes.pdf')}>May 25, 2019</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2019/06/06.06.2019-POA-Board-Meeting-Minutes.pdf')}>June 29, 2019</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2019/07/07.11.2019-BOD-Meeting-Minutes.pdf')}>July 31, 2019</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2019/08/08.08.2019-POA-Board-Meeting-Minutes.pdf')}>August 18, 2019</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2019/10/09.18.2019-POA-Board-Meeting-Minutes.pdf')}>September 30, 2019</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2019/10/10.03.2019-BOD-Meeting-Minutes.pdf')}>October 26, 2019</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2019/12/11.14.2019-General-Membership-Meeting-Minutes-1.pdf')}>November 20, 2019</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2019/12/11.07.2019-POA-Board-Meeting-Minutes.pdf')}>November 30, 2019</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2020/01/12.05.2019-POA-Board-Meeting-Minutes.pdf')}>December 25, 2019</Text>
              
              <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10 }} >2018</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold',marginVertical: 10 }}>SMPOA Board Meeting Minutes 2018</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2018/01/POA-Board-Meeting-Minutes-01.11.2018.pdf')}>January 16, 2018</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2018/03/02.08.2018-POA-Board-Meeting-minutes.pdf')}>February 20, 2018</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2018/03/03.08.2018-POA-Board-Meeting-minutes.pdf')}>March 13, 2018</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2018/06/04.12.2018-POA-Board-Meeting-Minutes-AMENDED.pdf')}>April 13, 2018</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2018/06/05.10.2018-POA-Board-Meeting-minutes-1.pdf')}>May 20, 2018</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2018/06/06.07.2018-POA-Board-Meeting-Minutes.pdf')}>June 26, 2018</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2018/08/07.12.2018-POA-Board-Meeting-Minutes.pdf')}>July 30, 2018</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2018/08/08.02.2018-POA-Board-Meeting-minutes.pdf')}>August 22, 2018</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2018/09/09.06.2018-POA-Board-Meeting-minutes.pdf')}>September 18, 2018</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2018/10/10.04.2018-POA-Board-Meeting-minutes.pdf')}>October 31, 2018</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2018/12/11.01.2018-POA-Board-Meeting-minutes.pdf')}>November 30, 2018</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2019/01/12.13.2018-POA-Board-Meeting-minutes.pdf')}>December 20, 2018</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2018/12/11.13.2018-General-Membership-Meeting-Minutes.pdf')}>December 26, 2018</Text>

              <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10 }} >2017</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold',marginVertical: 10 }}>SMPOA Board Meeting Minutes 2017</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2017/01/POA-Board-Meeting-Minutes-01.12.2017.pdf')}>January 24, 2017</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2017/02/POA-Board-Meeting-Minutes-02.02.2017.pdf')}>February 21, 2017</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2017/03/POA-Board-Meeting-Minutes-03.09.2017.pdf')}>March 29, 2017</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2017/04/POA-Board-Meeting-Minutes-04.13.2017.pdf')}>April 21, 2017</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2017/05/POA-Board-Meeting-Minutes-05.11.2017.pdf')}>May 24, 2017</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2017/06/POA-Board-Meeting-Minutes-06.08.2017.pdf')}>June 9, 2017</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2017/07/POA-Ratification-Meeting-Minutes-06.20.2017.pdf')}>June 30, 2017</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2017/07/POA-Board-Meeting-Minutes-07.06.2017.pdf')}>July 8, 2017</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2017/09/POA-Board-Meeting-Minutes-08.17.2017.pdf')}>August 20, 2017</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2017/10/POA-Board-Meeting-Minutes-09.07.2017.pdf')}>September 22, 2017</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2017/10/POA-Board-Meeting-Minutes-10.12.2017.pdf')}>October 19, 2017</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2017/12/POA-Board-Meeting-Minutes-11.09.2017.pdf')}>November 10, 2017</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2017/12/General-Membership-Meeting-Minutes-11.13.2017.pdf')}>November 14, 2017</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2018/01/POA-Board-Meeting-Minutes-12.14.2017.pdf')}>December 23, 2017</Text>
              
              <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10 }} >2016</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold',marginVertical: 10 }}>SMPOA Board Meeting Minutes 2016</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2016/01/01.14.2016-POA-Board-Meeting-Minutes.pdf')}>January 14, 2016</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2016/03/02.17.2016-POA-Board-Meeting-Minutes.pdf')}>February 17, 2016</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2016/03/03.16.2016-POA-Board-Meeting-Minutes.pdf')}>March 16, 2016</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2016/04/04.14.2016-BOD-Meeting-Minutes.pdf')}>April 25, 2016</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2016/05/05.19.2016-POA-Board-Meeting-Minutes.pdf')}>May 19, 2016</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2016/07/07.07.2016-POA-Board-Meeting-Minutes.pdf')}>July 14, 2016</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2016/08/08.11.2016-POA-Board-Meeting-Minutes.pdf')}>August 11, 2016</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2016/10/09.08.2016-BOD-Meeting-Minutes-1.pdf')}>September 12, 2016</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2016/11/10.06.2016-POA-Board-Meeting-Minutes-1-1.pdf')}>October 6, 2016</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2016/12/11.10.2016-POA-Board-Meeting-Minutes.pdf')}>November 10, 2016</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2017/01/General-Membership-Meeting-Minutes-11.10.2016.pdf')}>November 24, 2016</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2017/01/12.08.2016-POA-Board-Meeting-Minutes.pdf')}>December 10, 2016</Text>

              <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10 }} >2015</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold',marginVertical: 10 }}>SMPOA General Meeting Minutes 2015</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/General_Membership_Meeting_Minutes_11102015.pdf')}>November 10, 2015</Text>

              <Text style={{ fontSize: 18, fontWeight: 'bold',marginVertical: 10 }}>SMPOA Board Meeting Minutes 2015</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/BOD_Meeting_Minutes_01222015.pdf')}>January 22, 2015</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/BOD_Meeting_Minutes_02262015.pdf')}>February 26, 2015</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/BOD_Meeting_Minutes_03262015.pdf')}>March 26, 2015</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/BOD_Meeting_Minutes_04092015.pdf')}>April 9, 2015</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/BOD_Meeting_Minutes_05142015.pdf')}>May 14, 2015</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/BOD_Meeting_Minutes_06182015.pdf')}>June 18, 2015</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/BOD_Meeting_Minutes_07092015.pdf')}>July 9, 2015</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/BOD_Meeting_Minutes_08132015.pdf')}>August 13, 2015</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/BOD_Meeting_Minutes_09102015.pdf')}>September 10, 2015</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/BOD_Meeting_Minutes_10082015.pdf')}>October 8, 2015</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/BOD_Meeting_Minutes_11052015.pdf')}>November 5, 2015</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2016/01/BOD_Meeting_Minutes_12102015.pdf')}>December 10, 2015</Text>

              <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10 }} >2014</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold',marginVertical: 10 }}>SMPOA General Meeting Minutes 2014</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/Ratification_Meeting_Minutes_07232014.pdf')}>July 23, 2014</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/General_Membership_Meeting_Minutes_11052014.pdf')}>November 5, 2014</Text>

              <Text style={{ fontSize: 18, fontWeight: 'bold',marginVertical: 10 }}>SMPOA Board Meeting Minutes 2014</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/BOD_Meeting_Minutes_01152014.pdf')}>January 15, 2014</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/BOD_Meeting_Minutes_02062014.pdf')}>February 6, 2014</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/BOD_Meeting_Minutes_03132014.pdf')}>March 13, 2014</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/BOD_Meeting_Minutes_04102014.pdf')}>April 10, 2014</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/BOD_Meeting_Minutes_05152014.pdf')}>May 15, 2014</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/BOD_Meeting_Minutes_06122014.pdf')}>June 12, 2014</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/BOD_Meeting_Minutes_07102014.pdf')}>July 10, 2014</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/BOD_Meeting_Minutes_08142014.pdf')}>August 14, 2014</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/BOD_Meeting_Minutes_09112014.pdf')}>September 11, 2014</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/BOD_Meeting_Minutes_10092014.pdf')}>October 9, 2014</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/BOD_Meeting_Minutes_11132014.pdf')}>November 13, 2014</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/BOD_Meeting_Minutes_12112014.pdf')}>December 11, 2014</Text>
              <Text style={{ fontSize: 18, marginVertical: 10 }} onPress={() => Linking.openURL('http://santamunic.com/wp-content/uploads/2015/12/BOD_Meeting_Minutes_12182014.pdf')}>December 18, 2014</Text>
            </ScrollView>
         </SafeAreaView>
    );
}

const resizeMode = 'center';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#FFF',
        marginLeft: 10,
        paddingTop: StatusBar.currentHeight,
    },
    text: {
        fontSize: 15,
    },
    errorMsgContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginBottom: 15,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: '#D8000C',
        backgroundColor: "#FFBABA" ,
        color: "#D8000C",
        borderRadius: 25,
    },
    successMsgContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginBottom: 15,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: '#4F8A10',
        backgroundColor: "#DFF2BF" ,
        color: "#4F8A10",
        borderRadius: 25,
        
    },
    msgText: {
        fontSize: 15,
    },
    msgIcon: {
        width: 30,
        height: 30,
        // marginLeft: 15,
        justifyContent: 'center'
    },
    scrollView: {
        backgroundColor: '#F5FCFF',
        marginHorizontal: 10,
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 300,
        height: 45,
        marginBottom: 20,
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
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginRight: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 300,
        borderRadius: 30,
        backgroundColor: 'transparent'
    },
    btnForgotPassword: {
        height: 15,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: 10,
        width: 300,
        backgroundColor: 'transparent'
    },
    loginButton: {
        backgroundColor: "#00b5ec",

        shadowColor: "#808080",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
    },
    registerButton: {
        backgroundColor: Colors.lightPrimary,

        shadowColor: "#808080",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
    },
    loginText: {
        color: 'white',
    },
    bgImage: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    btnText: {
        color: "white",
        fontWeight: 'bold'
    }
}); 


export default MinutesScreen;