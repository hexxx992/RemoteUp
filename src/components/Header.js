import React from 'react';
import { useEffect, useState } from 'react';
import {Animated, Dimensions, Text, StyleSheet } from 'react-native';

const Header = () => {
    const [windowHeight, setWindowHeight] = useState(new Animated.Value(Dimensions.get('window').height));
    
    const animatedStyle = {
        height : windowHeight
    }

    useEffect(() => {
        Animated.spring(windowHeight, {
        toValue : 250,
        duration: 10000000,
        useNativeDriver: false,
        }).start();
    }, []);

    return (
        <Animated.View style={[styles.header, animatedStyle]}>
            <Text style={styles.text}>RemoteUp</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#21518C',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    text: {
        fontSize: 40,
        color: 'white',
    }
})

export default Header;