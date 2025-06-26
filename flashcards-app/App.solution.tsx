import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashcardScreen from './screens/FlashcardScreen';
import AddCardScreen from './screens/AddCardScreen';
import sampleCards from './data/sampleCards';

export type FlashcardType = {
  question: string;
  answer: string;
  learned: boolean;
};

export type RootStackParamList = {
  Flashcards: undefined;
  AddCard: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [cards, setCards] = useState<FlashcardType[]>(sampleCards);

  const addCard = (card: FlashcardType) => {
    setCards((prev) => [...prev, card]);
  };

  const markAsLearned = (index: number) => {
    setCards((prev) =>
      prev.map((card, i) =>
        i === index ? { ...card, learned: true } : card
      )
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Flashcards">
        <Stack.Screen name="Flashcards">
          {(props) => (
            <FlashcardScreen
              {...props}
              cards={cards}
              markAsLearned={markAsLearned}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="AddCard">
          {(props) => <AddCardScreen {...props} addCard={addCard} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
