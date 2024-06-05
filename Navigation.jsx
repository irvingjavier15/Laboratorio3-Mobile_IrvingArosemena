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
import VerifyCodeScreen from "./src/screens/VerifyCodeScreen.jsx";
import ChangePasswordScreen from "./src/screens/ChangePasswordScreen.jsx";
import LaundryProfileScreen from "./src/screens/LaundryProfileScreen.jsx";
import LaundryReviewScreen from "./src/screens/LaundryReviewScreen.jsx";
import ProductDetailScreen from "./src/screens/ProductDetailScreen.jsx";
import LeaveReviewScreen from "./src/screens/LeaveReviewScreen.jsx";
import { FontAwesome, Feather, Ionicons } from '@expo/vector-icons';


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
            <StackNavigator.Screen name="VerifyCode" component={VerifyCodeScreen}/>
            <StackNavigator.Screen name="ChangePassword" component={ChangePasswordScreen}/>
            <StackNavigator.Screen name="LaundryProfile" component={LaundryProfileScreen}/>
            <StackNavigator.Screen name="LaundryReview" component={LaundryReviewScreen}/>
            <StackNavigator.Screen name="ProductDetail" component={ProductDetailScreen}/>
            <StackNavigator.Screen name="LeaveReview" component={LeaveReviewScreen}/>
            
            
        </StackNavigator.Navigator>    
    );
}

function TabsRouter(){
    return(
        <TabsNavigator.Navigator initialRouteName="Inicio" screenOptions={{headerShown: false}}>
            <TabsNavigator.Screen name="Inicio" component={HomeScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" size={size} color={"#007192"} />
                    ),
                }}/>
            <TabsNavigator.Screen name="Promociones" component={Promotions}  options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="pricetag" size={size} color={"#007192"} />
                    ),
                }}/>
            <TabsNavigator.Screen name="Orders" component={Orders} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="shopping-bag" size={size} color={"#007192"} />
                    ),
                }}/>
            <TabsNavigator.Screen name="Profile" component={Profile} options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user" size={size} color={"#007192"} />
                    ),
                }}/>
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