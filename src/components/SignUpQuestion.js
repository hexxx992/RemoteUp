import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const SignUpQuestion = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Don't have an account?  </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                <Text style={styles.signUpText} >Sign up</Text>
            </TouchableOpacity>
            
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: '5%'
    }, 
    text: {
        fontSize : 16,
    },
    signUpText: {
        color: '#223fd4',
        fontSize: 16,
    }
})

export default SignUpQuestion;