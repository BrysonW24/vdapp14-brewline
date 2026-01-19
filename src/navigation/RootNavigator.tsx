import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import ItemDetailsScreen from '../screens/DetailsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import StorePickerScreen from '../screens/StorePickerScreen';
import PosQueueScreen from '../screens/PosQueueScreen';
import AdminDashboardScreen from '../screens/AdminDashboardScreen';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={BottomTabNavigator} />
        <Stack.Screen
          name="ItemDetails"
          component={ItemDetailsScreen}
          options={{
            headerShown: true,
            title: 'Menu Item',
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            headerShown: true,
            title: 'Notifications',
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen
          name="StorePicker"
          component={StorePickerScreen}
          options={{
            headerShown: true,
            title: 'Choose a store',
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen
          name="PosQueue"
          component={PosQueueScreen}
          options={{
            headerShown: true,
            title: 'POS Queue',
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen
          name="AdminDashboard"
          component={AdminDashboardScreen}
          options={{
            headerShown: true,
            title: 'Admin Dashboard',
            headerBackTitle: 'Back',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
