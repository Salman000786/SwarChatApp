import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import TabRoutes from './TabRoutes';
import navigationStrings from '../constants/navigationStrings';
import ChatMessageScreen from '../Screens/ChatMessageScreen/ChatMessageScreen';
const Stack=createStackNavigator();
export default function MainStack() {
    return (
        <>
    <Stack.Screen
      name={navigationStrings.TAB_ROUTES}
      options={{ headerShown: false }}
      component={TabRoutes}
    />   
    <Stack.Screen
     name={navigationStrings.CHAT_MESSAGE_SCREEN}
     options={{ headerShown: false }}
     component={ChatMessageScreen}>
      </Stack.Screen>   
      </>
    )
}
