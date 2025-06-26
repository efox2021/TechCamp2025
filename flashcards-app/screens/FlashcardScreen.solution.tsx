import React from 'react';
import { View, Button, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import Flashcard from '../components/Flashcard';
import sampleCards from '../data/sampleCards';

const FlashcardScreen: React.FC<
  NativeStackScreenProps<RootStackParamList, 'Flashcards'>
> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <Button title="Add Card" onPress={() => navigation.navigate('AddCard')} />

      <FlatList
        data={sampleCards}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Flashcard question={item.question} answer={item.answer} />
        )}
      />
    </View>
  );
};

export default FlashcardScreen;
