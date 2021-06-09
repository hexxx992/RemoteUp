import React, {useState} from 'react';
import {Switch, View, StyleSheet} from 'react-native';

const DarkMode = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        
    };

    return (
        <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.switch}
        />
    );
}

const styles = StyleSheet.create({
    switch: {
        width: 300,
        height: 100
    }
})

export default DarkMode;