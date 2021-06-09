import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  // const [auth, setAuth] = useState();

  // useEffect(() => {
  //     firebase.auth().onAuthStateChanged((auth) => {
  //       setAuth(auth);
  //     });
  //   }, []);
  
  return (
    <NavigationContainer style={styles.container}>
        <Stack.Navigator>
            <Stack.Screen name="SignInScreen" component={SignInScreen} options={{title: 'Sign in - RemoteUp', headerShown: false}} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{title: ''}} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: 'Home - RemoteUp', headerShown: false}} />
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
