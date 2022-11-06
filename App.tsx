import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ReviewPage } from './src/pages/ReviewPage'; 
import { NativeBaseProvider } from 'native-base';
import { HomeScreen } from './src/pages/HomePage';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Review" component={ReviewPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
