import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const SettingButton = () => {
    return (
        <TouchableOpacity>
            <Ionicons name="settings-outline" size={36} color="black"/>
        </TouchableOpacity>
    );
}

// const styles = StyleSheet.create({
//     settingButton: {
//         position: 'absolute',
//         right: 20,
//         bottom: 20
//     }
// })

export default SettingButton;