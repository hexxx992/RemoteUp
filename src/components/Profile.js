import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const Profile = () => {
    return (
        <View style={styles.detailSection}>
            <Image source='https://images.macrumors.com/t/CynyMmV320sxD-tHY9kdnlFNnBc=/400x0/filters:quality(90)/article-new/2019/04/guest-user-250x250.jpg?lossy' style={styles.detailImage}></Image>
            <Text style={styles.detailName}>Guest</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    detailImage: {
        width: 250,
        height: 250,
        margin: 50
    },
    detailName: {
        fontSize: 25
    },
    detailSection: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Profile;

