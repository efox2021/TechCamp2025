import React from 'react';
import { View, Button, Text } from 'react-native';
// TODO: Import FlatList when you're ready to render the cards
// import { FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
// import Flashcard from '../components/Flashcard';

type Props = NativeStackScreenProps<RootStackParamList, 'Flashcards'>;

const FlashcardScreen: React.FC<Props> = ({ navigation, route }) => {
  const { cards } = route.params;

  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <Button title="Add Card" onPress={() => navigation.navigate('AddCard')} />
      
      {/* TODO: Render Flashcard components using FlatList and sample cards (passed in as a parameter from App.tsx) */}
      <Text style={{ textAlign: 'center', marginTop: 20 }}>
        No flashcards yet – start building!
      </Text>
    </View>
  );
};

export default FlashcardScreen;
