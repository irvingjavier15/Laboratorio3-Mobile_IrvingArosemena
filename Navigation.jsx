import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from './src/screens/LoginScreen.jsx'
import RegisterScreen from './src/screens/RegisterScreen.jsx'
import HomeScreen from './src/screens/HomeScreen.jsx'

const StackNavigator = createNativeStackNavigator();
const TabsNavigator = createBottomTabNavigator();

function StackRouter(){
    return(
        <StackNavigator.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <StackNavigator.Screen name="Login" component={LoginScreen} />
            <StackNavigator.Screen name="Register" component={RegisterScreen}/>
            <StackNavigator.Screen name="Home" component={TabsRouter}/>
        </StackNavigator.Navigator>    
    );
}

function TabsRouter(){
    return(
        <TabsNavigator.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <TabsNavigator.Screen name="Home" component={HomeScreen}/>
            <TabsNavigator.Screen name="Discovery" component={HomeScreen}/>
            <TabsNavigator.Screen name="Map" component={HomeScreen}/>
            <TabsNavigator.Screen name="Create" component={HomeScreen}/>
            <TabsNavigator.Screen name="Profile" component={HomeScreen}/>
        </TabsNavigator.Navigator>
    );
}

const Routes = () =>{
    return(
        <NavigationContainer>
            <StackRouter /> 
        </NavigationContainer>
    );
};

export default Routes;