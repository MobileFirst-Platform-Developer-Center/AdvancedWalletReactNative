import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import A from "../screens/A";
import B from "../screens/A";
// import ProfileScreen from "../screens/ProfileScreen";
// import SearchScreen from "../screens/SearchScreen";

//Add navigators with screens in this file
export const HomeNavigator = createStackNavigator({
  Home: { screen: A }
});

// export const SettingsNavigator = createStackNavigator({
//   Settings: { screen: SettingsScreen }
// });

export const ProfileNavigator = createStackNavigator({
  Profile: { screen: B }
});

// export const SearchNavigator = createStackNavigator({
//   Search: { screen: SearchScreen }
// });
