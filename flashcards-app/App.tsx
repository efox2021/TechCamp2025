import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashcardScreen from './screens/FlashcardScreen';
import AddCardScreen from './screens/AddCardScreen';

export type RootStackParamList = {
  Flashcards: undefined;
  AddCard: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Flashcards">
        <Stack.Screen name="Flashcards" component={FlashcardScreen} />
        <Stack.Screen name="AddCard" component={AddCardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
