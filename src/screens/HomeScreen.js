import React from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';

const HomeScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.message}>Your are successfully logged in</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    message: {
      fontSize: 25,
      alignSelf: 'center'
    },
})

export default HomeScreen