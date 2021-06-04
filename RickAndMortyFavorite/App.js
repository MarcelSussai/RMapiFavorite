import React from 'react'
import InitialScreen from './src/initialScreen/initialScreen'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const app = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="InitialScreen" component={InitialScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default app;