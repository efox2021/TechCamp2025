import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { FlashcardType } from '../App.solution'; // TODO: Change import to App once you've updated
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'AddCard'> & {
  addCard: (card: FlashcardType) => void;
};

const AddCardScreen: React.FC<Props> = ({ navigation, addCard }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSave = () => {
    addCard({ question, answer, learned: false });
    setQuestion('');
    setAnswer('');
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Question"
        value={question}
        onChangeText={setQuestion}
        style={{ marginBottom: 20, borderBottomWidth: 1 }}
      />
      <TextInput
        placeholder="Answer"
        value={answer}
        onChangeText={setAnswer}
        style={{ marginBottom: 20, borderBottomWidth: 1 }}
      />
      <Button title="Save Card" onPress={handleSave} />
    </View>
  );
};

export default AddCardScreen;
