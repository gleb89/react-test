import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {Home }from  '../components/HomeScreen';
import {DetailsScreen} from '../components/Dedail';
import {Present} from '../components/Present';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "orange",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};
const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Каталог" component={DetailsScreen} />
      <Stack.Screen name="Подарок" component={Present} />
    </Stack.Navigator>
  );
}



export { ContactStackNavigator,MainStackNavigator  };

