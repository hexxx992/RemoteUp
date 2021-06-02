import React from 'react';
import {TouchableOpacity, StyleSheet, Image, Text} from 'react-native';

const Friend = ({item, setShowing, setTalkingTo}) => {
    const handleLongPress = () => {
        setShowing(true);
        setTalkingTo(item);
    };
    
    return (
        <TouchableOpacity style={styles.container} onLongPress={handleLongPress}>
            <Image source={item.avatar} style={styles.avatar}></Image>
            <Text style={styles.name}>{item.name}</Text>
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
        backgroundColor: '#61c27b'
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 100/2,
        margin: 10,
    },
    name: {
        fontSize: 20
    }
})
export default Friend;