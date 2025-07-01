import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashcardScreen from './screens/FlashcardScreen';
import AddCardScreen from './screens/AddCardScreen';
import sampleCards from './data/sampleCards';

export type FlashcardType = {
  question: string;
  answer: string;
  // TODO: Add learned property to the FlashcardType
  learned: boolean;
};

export type RootStackParamList = {
  Flashcards: {
    cards: FlashcardType[];
    // TODO: Add markAsLearned function to the FlashcardType
    markAsLearned: (index: number) => void;
  };
  AddCard: {
    addCard: (card: FlashcardType) => void;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [cards, setCards] = useState<FlashcardType[]>(sampleCards);

  const addCard = (card: FlashcardType) => {
    setCards((prev) => [...prev, card]);
  };

  // TODO: Create markAsLearned function that marks the card as learned
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
              route={{
                ...props.route,
                params: {
                  cards,
                  // TODO: Pass the markAsLearned function to the FlashcardScreen
                  markAsLearned,
                },
              }}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="AddCard">
          {(props) => (
            <AddCardScreen
              {...props}
              route={{
                ...props.route,
                params: {
                  addCard,
                },
              }}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
