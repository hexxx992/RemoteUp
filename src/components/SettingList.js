import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Setting from './Setting';

const SettingList = () => {
    const [settings, setSettings] = useState([
        {
            title: "Profile",
            icon: "body"
        },
        {
            title: "Dark Mode",
            icon: "moon"
        }
    ])

    return (
        <FlatList
            contentContainerStyle={styles.settingList}
            data={settings}
            keyExtractor={ item => item.title}
            renderItem={({item}) => (
                <Setting item={item}></Setting>
            )}
        />
    );
}

const styles = StyleSheet.create({
    settingList: {
        height: '100%',
        width: '100%',
    }
})

export default SettingList;
