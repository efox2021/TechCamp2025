import React from 'react';
import { View, Button, Text } from 'react-native';
// TODO: Import FlatList when you're ready to render the cards
// import { FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
// import Flashcard from '../components/Flashcard';
// import sampleCards from '../data/sampleCards';

const FlashcardScreen: React.FC<
  NativeStackScreenProps<RootStackParamList, 'Flashcards'>
> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <Button title="Add Card" onPress={() => navigation.navigate('AddCard')} />
      
      {/* TODO: Render Flashcard components using FlatList and sampleCards */}
      <Text style={{ textAlign: 'center', marginTop: 20 }}>
        No flashcards yet – start building!
      </Text>
    </View>
  );
};

export default FlashcardScreen;
