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

import { useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';

const BenefitsScreen = () => {

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
              <Text style={{ fontSize: 24, fontWeight: 'bold',marginVertical: 10 }} >Pension Plans--</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>California Public Employees Retirement System (CalPERS)</Text>
              <Text>calpers.ca.gov</Text>
              <Text>(888) 225-7377</Text>
              <Text>CalPERS Health Benefit Services Division</Text>
              <Text>P.O. Box 942714</Text>
              <Text>Sacramento, CA 94229-2714</Text>

              <Text style={{ fontSize: 18, fontWeight: 'bold',marginVertical: 10 }}>California Public Employees Retirement System (CalPERS)</Text>
              <Text>calpers.ca.gov</Text>
              <Text>(888) 225-7377</Text>
              <Text>CalPERS Health Benefit Services Division</Text>
              <Text>P.O. Box 942714</Text>
              <Text>Sacramento, CA 94229-2714</Text>

              <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10 }}>Health Plans</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>Anthem Blue Cross</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>PORAC Prudent buyer PPO Plan</Text>
              <Text>(800)288-6929</Text>
              <Text>Group Number 13079G</Text>
              <Text>www.anthem.com/ca</Text>
              <Text>www.porac.org/insurance-and-benefits</Text>
            
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>SMPOA Retiree Medical Plan</Text>
              <Text>www.smpoatrust.org</Text>
              <Text>(562) 463-5050</Text>
              <Text>1200 Wilshire Blvd, 5th Floor</Text>
              <Text>Los Angeles, CA 90017</Text>
              <Text>SMPOAtrust@bpabenefits.com</Text>

              <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>Delta Dental PPO</Text>
              <Text>(888) 335-8227</Text>
              <Text>Group Number 1509-0001</Text>
              <Text>P.O. Box 7736</Text>
              <Text>San Francisco, CA 94120</Text>

              <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>VSP Vision Care</Text>
              <Text style={{ fontSize: 18 }} >vsp.com</Text>
              <Text>(800) 877-7195</Text>

              <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10 }}>Life Insurance</Text>
              <Text style={{ fontSize: 18 }}>Aetna-Life is our life insurance carrier. You have the opportunity to enroll in the City of Santa Monica’s Supplemental Life Insurance Plan. You may purchase a policy in increments of $10,000 to a maximum of $300,000. You may need to provide evidence of good health that is satisfactory to Aetna Life. Rates are age-based. The monthly premium you select is payable through the convenience of payroll deduction from the first paycheck of the month. This benefit is not available to temporary/as-needed employees. Please contact a Benefits Staff Member to make an appointment to discuss this voluntary program.</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>Voluntary Group Term Life Insurance Program</Text>
              <Text style={{ fontSize: 18 }}>Buy additional life insurance to cover you, your spouse and/or your children (Currently Prudential).</Text>

              <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10 }}>Credit Union</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>Southland Credit Union</Text>
              <Text>southlandcu.org</Text>
              <Text>(800) 426-1917</Text>
              <Text>525 Santa Monica Blvd.</Text>
              <Text>Santa Monica, CA 90401</Text>
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


export default BenefitsScreen;