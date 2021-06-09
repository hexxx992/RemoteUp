import React from 'react';
import {ScrollView, StyleSheet, SafeAreaView, View} from 'react-native';
import SettingList from '../components/SettingList'

const MeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.setting}>

            </View>
            <View style={styles.settingList}>
                <SettingList></SettingList>
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
    },
    settingList: {
        backgroundColor: '#dbab84',
        width: '25%',
    }
})

export default MeScreen;