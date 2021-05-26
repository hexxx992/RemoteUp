import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
        <Stack.Navigator style={styles.container1}>
            <Stack.Screen name="SignInScreen" component={SignInScreen} options={{title: 'RemoteUp - Sign in', headerShown: false}} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{title: ''}} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: '', headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
