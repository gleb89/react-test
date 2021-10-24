// import React from 'react';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { DetailsScreen } from './Dedail';
import { Present } from './Present';

// const Tab = createMaterialBottomTabNavigator();

// export const BottomTabs = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Feed"
//       shifting={true}
//       sceneAnimationEnabled={false}
//     >
//       <Tab.Screen
//         name="Details"
//         component={DetailsScreen}
//         options={{
//           tabBarIcon: 'home-account',
//         }}
//       />
//       <Tab.Screen
//         name="Present"
//         component={Present}
//         options={{
//           tabBarIcon: 'bell-outline',
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens


//Screen names

const homeName = "Details";


const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={DetailsScreen} />
        
        

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;