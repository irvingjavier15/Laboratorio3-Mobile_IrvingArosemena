import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from './src/screens/LoginScreen.jsx'
import RegisterScreen from './src/screens/RegisterScreen.jsx'
import HomeScreen from './src/screens/HomeScreen.jsx'
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen.jsx";
import Promotions from "./src/screens/PromotionsScreen.jsx";
import Orders from "./src/screens/OrdersScreen.jsx";
import Profile from "./src/screens/ProfileScreen.jsx";
import LocationScreen from "./src/screens/LocationScreen.jsx";
import Edit from "./src/screens/EditProfile.jsx";
import ShoppingCart from "./src/screens/ShoppingCart.jsx";


const StackNavigator = createNativeStackNavigator();
const TabsNavigator = createBottomTabNavigator();

function StackRouter(){
    return(
        <StackNavigator.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <StackNavigator.Screen name="Login" component={LoginScreen} />
            <StackNavigator.Screen name="Register" component={RegisterScreen}/>
            <StackNavigator.Screen name="Home" component={TabsRouter}/>
            <StackNavigator.Screen name="Reset" component={ForgotPasswordScreen}/>
            <StackNavigator.Screen name="Location" component={LocationScreen}/>
            <StackNavigator.Screen name="Edit" component={Edit}/>
            <StackNavigator.Screen name="Shopping" component={ShoppingCart}/>
        </StackNavigator.Navigator>    
    );
}

function TabsRouter(){
    return(
        <TabsNavigator.Navigator initialRouteName="Inicio" screenOptions={{headerShown: false}}>
            <TabsNavigator.Screen name="Inicio" component={HomeScreen}/>
            <TabsNavigator.Screen name="Promociones" component={Promotions}/>
            <TabsNavigator.Screen name="Orders" component={Orders}/>
            <TabsNavigator.Screen name="Profile" component={Profile}/>
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