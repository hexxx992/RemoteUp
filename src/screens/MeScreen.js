import React, {useState} from 'react';
import {ScrollView, StyleSheet, SafeAreaView, View} from 'react-native';
import DarkMode from '../components/DarkMode';
import Profile from '../components/Profile';
import SettingList from '../components/SettingList'

const MeScreen = () => {
    const [curSetting, setCurSetting] = useState('Profile');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.setting}>
                {curSetting=='Profile'?<Profile style={styles.profile}></Profile>:<DarkMode></DarkMode>}
            </View>
            <View style={styles.settingList}>
                <SettingList setCurSetting={setCurSetting}></SettingList>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    setting: {
        backgroundColor: '#e0e0e0',
        flexDirection: 'row',
        height: '100%',
        backgroundColor: '#83a8d6',
        width: '74.5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    settingList: {
        backgroundColor: '#dbab84',
        width: '25%',
    },
    profile: {
        width: '100%',
        height: '100%'
    }
})

export default MeScreen;