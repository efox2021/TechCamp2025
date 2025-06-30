import React from 'react';
import { View, Button, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import Flashcard from '../components/Flashcard';

const FlashcardScreen: React.FC<
  NativeStackScreenProps<RootStackParamList, 'Flashcards'>
> = ({ navigation, route }) => {
  const { cards, markAsLearned } = route.params;
  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <Button title="Add Card" onPress={() => navigation.navigate('AddCard' as any)} />

      <FlatList
        data={cards}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Flashcard 
            question={item.question} 
            answer={item.answer} 
            learned={item.learned} 
            onMarkLearned={() => markAsLearned(index)} 
          />
        )}
      />
    </View>
  );
};

export default FlashcardScreen;
