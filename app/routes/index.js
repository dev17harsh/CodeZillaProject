import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../src/HomeScreen';
import ProfileScreen from '../src/PrrofileScreen';
import SettingScreen from '../src/SettingScreen';
import TaskScreen from '../src/TasksScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigation = () =>{
    return(
        <Drawer.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName="Home">
            
            <Drawer.Screen name="Home" component={TabNavigation} />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ drawerLabel: 'Profile' }}
        />
        <Drawer.Screen
          name="Setting"
          component={SettingScreen}
          options={{ drawerLabel: 'Setting' }}
        />
      </Drawer.Navigator>

    )
}

const TabNavigation = () =>{
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = 'home'
              } else if (route.name === 'Task') {
                iconName = 'menu'
              }else if(route.name === 'Profile') {
                iconName = 'people'
              }
  
              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: '#FF8C00',
            tabBarInactiveTintColor: 'gray',
            headerShown: false
          })}
        >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Task" component={TaskScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    )
}

const Routes = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
            >
                <Stack.Screen name="Drawer" component={DrawerNavigation} />
                <Stack.Screen name="Tab" component={TabNavigation} />
               
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes