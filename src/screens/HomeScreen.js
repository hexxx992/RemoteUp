import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import RoadmapScreen from './RoadmapScreen';
import ChatScreen from './ChatScreen';
import FriendsScreen from './FriendsScreen';
import MeScreen from './MeScreen';
import SettingButton from '../components/SettingButton'

const Tab = createBottomTabNavigator();

const HomeScreen = () => {

    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#e91e63',
            inactiveTintColor: '#fff',
            style: {
              backgroundColor: '#5e5d5d',
              height: '7%',
              width: '100%'
            },
            labelStyle: {
                fontSize: 16,
              },
          }}>
            <Tab.Screen name="Chat" component={ChatScreen}
                options={() => ({
                    tabBarIcon: () => (<Ionicons name="chatbubbles-outline" size={26} color="white" />),
                    tarBarOnpress: () => setCurScreen(ChatScreen)
                })}/>
            <Tab.Screen name="Roadmap" component={RoadmapScreen}
                options={() => ({
                    tabBarIcon: () => (<Foundation name="map" size={26} color="white" />),
                    tarBarOnpress: () => setCurScreen(RoadmapScreen)
                })}/>
            <Tab.Screen name="Friends" component={FriendsScreen}
                options={() => ({
                    tabBarIcon: () => (<FontAwesome5 name="user-friends" size={26} color="white" />),
                    tarBarOnpress: () => setCurScreen(FriendsScreen)
                })}/>
            <Tab.Screen name="Me" component={MeScreen}
                options={() => ({
                    tabBarIcon: () => (<Ionicons name="happy" size={26} color="white" />),
                })}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
})

export default HomeScreen