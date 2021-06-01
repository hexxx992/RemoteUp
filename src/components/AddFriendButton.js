import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const AddfriendButton = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>+ Friend</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button: {
        borderRadius: 15,
        width: 90,
        height: 20,
        backgroundColor: '#9e77e0',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        margin: 15
    },
    text: {
        color: 'white'
    }
})

export default AddfriendButton;