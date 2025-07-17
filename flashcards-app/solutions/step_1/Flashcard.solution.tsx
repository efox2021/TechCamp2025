import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

interface FlashcardProps {
  question: string;
  answer: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setFlipped(!flipped)}
      style={styles.card}
    >
      <Text style={styles.text}>
        {flipped ? answer : question}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    margin: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Flashcard;
