import React from 'react';
import { View, TextInput, Button } from 'react-native';

const AddCardScreen: React.FC = () => {
  // TODO: Create state for question and answer
  // Hint: Use useState for both fields
  const [question, setQuestion] = React.useState('');
  const [answer, setAnswer] = React.useState('');

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Question"
        style={{ marginBottom: 20, borderBottomWidth: 1 }}
        // TODO: Bind to state
        value={question}
        onChangeText={setQuestion}
      />
      <TextInput
        placeholder="Answer"
        style={{ marginBottom: 20, borderBottomWidth: 1 }}
        // TODO: Bind to state
        value={answer}
        onChangeText={setAnswer}
      />
      <Button
        title="Save Card"
        onPress={() => {
          // TODO: Print question + answer to the console
          console.log(question, answer);
        }}
      />
    </View>
  );
};

export default AddCardScreen;
