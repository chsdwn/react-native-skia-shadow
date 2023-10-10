import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Components, List, Menu } from '../screens';

const Stack = createNativeStackNavigator();

export const HomeRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Components" component={Components} />
      <Stack.Screen name="List" component={List} />
    </Stack.Navigator>
  );
};
