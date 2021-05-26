import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const ContinueAsGuest = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.text} >Continue as guest</Text>
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
        marginTop: '10%'
    }, 
    text: {
        color: '#223fd4',
        fontSize: 15,
    }
})

export default ContinueAsGuest;