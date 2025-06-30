import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { FlashcardType, RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'AddCard'> & {
  addCard: (card: FlashcardType) => void;
};

// TODO: Add the addCard prop to the component
const AddCardScreen: React.FC<Props> = ({ route }) => {
  const { addCard } = route.params;
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

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
      <Button title="Save Card" onPress={() => 
        // TODO: Call addCard with the question and answer in onSave handler
        addCard({ question, answer })
        } />
    </View>
  );
};

export default AddCardScreen;
