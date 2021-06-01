import React from 'react';
import {StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import RoadmapScreen from './RoadmapScreen';
import ChatScreen from './ChatScreen';
import SettingsScreen from './SettingsScreen';
import FriendsScreen from './FriendsScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#e91e63',
            inactiveTintColor: '#fff',
            style: {
              backgroundColor: '#5e5d5d',
              height: '7%'
            },
            labelStyle: {
                fontSize: 16,
              },
          }}>
            <Tab.Screen name="Chat" component={ChatScreen} options={() => ({tabBarIcon: () => (
                <Ionicons name="chatbubbles-outline" size={26} color="white" />)})}/>
            <Tab.Screen name="Roadmap" component={RoadmapScreen} options={() => ({tabBarIcon: () => (
                <Foundation name="map" size={26} color="white" />)})}/>
            <Tab.Screen name="Friends" component={FriendsScreen} options={() => ({tabBarIcon: () => (
                <FontAwesome5 name="user-friends" size={26} color="white" />)})}/>
            <Tab.Screen name="Settings" component={SettingsScreen} options={() => ({tabBarIcon: () => (
                <Ionicons name="settings-outline" size={26} color="white" />)})}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
})

export default HomeScreen