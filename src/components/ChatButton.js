import React, {useState} from 'react';
import {Animated, Dimensions, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ChatButton = ({setChatting, setMatching}) => {
    const [windowHeight, setWindowHeight] = useState(new Animated.Value(Dimensions.get('window').height/2));

    const animatedStyle = {
        height : windowHeight
    }

    const handlePress = ()=> {
        Animated.spring(windowHeight, {
            toValue : 0,
            duration: 10000,
            useNativeDriver: false,
            }).start();
        setMatching(true);
        setTimeout(()=> {
            setChatting(true);
            setMatching(false);
        }, 1500);
    }

    return (
        <Animated.View style={animatedStyle}>
            <TouchableOpacity style={styles.chatButton} onPress={handlePress}>
                <Text style={styles.chatButtonText}>Chat</Text>
            </TouchableOpacity>
        </Animated.View>
        
    );
}

const styles = StyleSheet.create({
    chatButton: {
        backgroundColor: '#3d88e3',
        width: 200,
        height: 200,
        borderRadius: 200/2,
        padding: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    chatButtonText: {
        fontSize: 50,
        alignSelf: 'center',
        color: 'white'
    },
})

export default ChatButton;