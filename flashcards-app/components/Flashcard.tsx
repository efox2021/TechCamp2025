import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface FlashcardProps {
  question: string;
  answer: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ question, answer }) => {
  // TODO: Add logic to flip between question and answer when pressed
  // Hint: Use useState to track flipped state

  return (
    <TouchableOpacity
      onPress={() => {
        // TODO: Toggle flip state here
      }}
      style={styles.card}
    >
      <Text style={styles.text}>
        {/* TODO: Show question or answer based on flip state */}
        question
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
