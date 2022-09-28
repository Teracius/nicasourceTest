import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ListQR } from '../screens/ListQR';
import { ReadQR } from '../screens/ReadQR';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: "white"
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#00b33c",
        tabBarStyle: {
          position: "absolute",
          marginBottom: (Platform.OS === "ios") ? 0 : 0,
          backgroundColor: "rgba(255,255,255,0.92)",
          elevation: 0,
          borderWidth: 0,
          height: (Platform.OS === "ios") ? 80 : 60,
        },

      }}
    >
      <Tab.Screen name="ReadQR" component={ReadQR} options={{
        tabBarLabel: "Read QR",
        tabBarIcon: ({ color, }) => (
          <Icon
            color={color}
            size={25}
            name="qr-code-outline"
          />
        )
      }} />
      <Tab.Screen name="ListQR" component={ListQR} options={{
        tabBarLabel: "List QR",
        tabBarIcon: ({ color, }) => (
          <Icon
            color={color}
            size={25}
            name="list-outline"
          />
        )
      }} />
    </Tab.Navigator>
  );
}