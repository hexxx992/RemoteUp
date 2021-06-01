import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const LeaveChatButton = ({setChatting, setLeaving}) => {
    const handlePress = () => {
        setLeaving(true);
        setTimeout(()=> {
            setChatting(false);
            setLeaving(false);
        }, 500);

    }
    return (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.text}>Leave Chat</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 15,
        width: 150,
        height: 20,
        backgroundColor: '#9e77e0',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        margin: 15,
    },
    text: {
        color: 'white',
        fontSize: 18,
        alignSelf: 'center'
    }
})

export default LeaveChatButton;