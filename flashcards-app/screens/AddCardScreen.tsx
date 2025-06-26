import React from 'react';
import { View, TextInput, Button } from 'react-native';

const AddCardScreen: React.FC = () => {
  // TODO: Create state for question and answer
  // Hint: Use useState for both fields

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Question"
        // TODO: Bind to state
        style={{ marginBottom: 20, borderBottomWidth: 1 }}
      />
      <TextInput
        placeholder="Answer"
        // TODO: Bind to state
        style={{ marginBottom: 20, borderBottomWidth: 1 }}
      />
      <Button
        title="Save Card"
        onPress={() => {
          // TODO: Print question + answer to the console
        }}
      />
    </View>
  );
};

export default AddCardScreen;
