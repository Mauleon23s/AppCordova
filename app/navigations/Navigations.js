import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";


import RestaurantsScreenStacks from "./RestaurantsStacks";
import TopListsScreenStacks from "./TopListsStacks";
import MyAccountScreenStacks from "./AccountStacks";
import LoginScreenStacks from "../screens/Account/Login";

const NavigationStacks = createBottomTabNavigator(
  {
    Perfil: {
      screen: RestaurantsScreenStacks,
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          type="material-community"
          name="magnify"
          fontsize={22}
          color={tintColor}
        />
      )
    },
    

    Inicio: {
      screen: MyAccountScreenStacks,
      tabBarLabel: "Cuenta",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          type="material-community"
          name="home-outline"
          fontsize={22}
          color={tintColor}
        />
      )
    }
  },
  {
    initialRouteName: "Inicio",
    order: ["Perfil", "Inicio"],
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#75a614"
    }
  }
);

export default createAppContainer(NavigationStacks);
