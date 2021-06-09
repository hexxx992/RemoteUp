import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const Setting = ({item, setCurSetting}) => { 
    return (
        <TouchableOpacity style={styles.container} onPress={() => setCurSetting(item.title)}>
            <Ionicons name={item.icon} size={26} color="black"/>
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: '90%',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        margin: 5,
        padding: 20,
        backgroundColor: 'white',
        shadowRadius: 8,
    },
    icon: {
        width: 70,
        height: 70,
        borderRadius: 100/2,
        margin: 10,
    },
    title: {
        fontSize: 20,
        marginLeft: 20
    }
})
export default Setting;