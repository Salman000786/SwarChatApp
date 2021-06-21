import React from 'react';
import {View, Text,Image,StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CallScreen, CameraScreen, ChatScreen, SettingScreen, StatusScreen} from '../Screens/index';
import navigationStrings from '../constants/navigationStrings';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
const Tab = createBottomTabNavigator();
export default function TabRoutes(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: colors.themeColor,
        // labelStyle: {fontSize:12,color:colors.greyTextColor },
      }}>
      <Tab.Screen
        name={navigationStrings.STATUS_SCREEN}
        component={StatusScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={imagePath.status}
              style={[
                styles.tabStyle,
                {
                  tintColor: focused
                    ? colors.themeColor
                      
                    : colors.tabColor,
                },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name={navigationStrings.CALL_SCREEN}
        component={CallScreen}
        options={{
            tabBarIcon: ({focused}) => (
                <Image
                  source={imagePath.call}
                  style={[
                    styles.tabStyle,
                    {
                      tintColor: focused
                        ? colors.themeColor
                          
                        : colors.tabColor,
                    },
                  ]}
                />
              ),
        }}
      />
       <Tab.Screen
        name={navigationStrings.CAMERA_SCREEN}
        component={CameraScreen}
        options={{
            tabBarIcon: ({focused}) => (
                <Image
                  source={imagePath.camera}
                  style={[
                    styles.tabStyle,
                    {
                      tintColor: focused
                        ? colors.themeColor
                          
                        : colors.tabColor,
                    },
                  ]}
                />
              ),
        }}
      />
       
       <Tab.Screen
        name={navigationStrings.CHAT_SCREEN}
        component={ChatScreen}
        options={{
            tabBarIcon: ({focused}) => (
                <Image
                  source={imagePath.chat}
                  style={[
                    styles.tabStyle,
                    {
                      tintColor: focused
                        ? colors.themeColor
                          
                        : colors.tabColor,
                    },
                  ]}
                />
              ),
        }}
      />
       <Tab.Screen
        name={navigationStrings.SETTING_SCREEN}
        component={SettingScreen}
        options={{
            tabBarIcon: ({focused}) => (
                <Image
                  source={imagePath.setting}
                  style={[
                    styles.tabStyle,
                    {
                      tintColor: focused
                        ? colors.themeColor
                          
                        : colors.tabColor,
                    },
                  ]}
                />
              ),
        }}
      />

    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
    tabStyle:
    {
      width: 25,
      height: 25,
      marginTop: 10,
      
    }
  });