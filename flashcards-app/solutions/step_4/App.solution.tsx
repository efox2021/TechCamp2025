import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashcardScreen from './screens/FlashcardScreen';
import AddCardScreen from './screens/AddCardScreen';
import sampleCards from './data/sampleCards';

export type FlashcardType = {
  question: string;
  answer: string;
};

export type RootStackParamList = {
  Flashcards: {
    cards: FlashcardType[];
  };
  AddCard: {
    addCard: (card: FlashcardType) => void;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  // TODO: Create state for cards
  const [cards, setCards] = useState<FlashcardType[]>(sampleCards);

  // TODO: Create addCard function that adds the card to the cards state
  const addCard = (card: FlashcardType) => {
    setCards((prev) => [...prev, card]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Flashcards">
        <Stack.Screen name="Flashcards">
          {(props) => (
            <FlashcardScreen
              {...props}
              route={{
                ...props.route,
                params: {
                  // TODO: Pass the cards state to the FlashcardScreen to see updates
                  cards,
                },
              }}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="AddCard">
          {/* TODO: Pass the addCard function to the AddCardScreen */}
          {(props) => <AddCardScreen {...props} addCard={addCard} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
