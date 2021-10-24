import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator } from "./Nav";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Главная" component={ContactStackNavigator} />
      <Tab.Screen name="Подарки" component={MainStackNavigator} />
      
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;