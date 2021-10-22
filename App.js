// In App.js in a new project

import * as React from 'react';
import { useEffect, useState } from 'react';
import { View,Button,Image,ActivityIndicator, FlatList, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {DetailsScreen }from './components/Dedail'
import {Present} from './components/Present'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Homedfdfd Screen</Text>
      <Button
  title="Go to Details... again"
  onPress={() => navigation.push('Details')}
/>
    </View>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerStyle: {
          backgroundColor: 'orange',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
        <Stack.Screen name="Home3" options={{ title: 'Главная' }}  component={HomeScreen} />
        <Stack.Screen name="Details" options={{ title: 'Каталог' }} component={DetailsScreen} />
        <Stack.Screen name="Present" options={{ title: 'Товар' }} component={Present} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;