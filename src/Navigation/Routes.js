import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainStack from "./MainStack"
const Stack = createStackNavigator();
export default function Routes(props) {
    return (
    
            <NavigationContainer>
          <Stack.Navigator>
          {MainStack()}
            {/* {!!userData.accessToken?<>{MainStack()}</>:<>{AuthStack()}</>} */}
          </Stack.Navigator>
          </NavigationContainer>
     
    )
}
