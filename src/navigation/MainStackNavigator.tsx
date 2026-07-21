import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import OnboardingScreen from "../screens/OnboardingScreen";

const Stack = createNativeStackNavigator();

export function MainStackNavigator() {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <Stack.Navigator initialRouteName="OnboardingScreen">
                <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    )
}