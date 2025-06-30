import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { FlashcardType, RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'AddCard'>;

const AddCardScreen: React.FC<Props> = ({ navigation, route }) => {
  const { addCard } = route.params;
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSave = () => {
    // TODO: Add learned property to the card and set it to false when the card is created
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
