import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// Import our shared design system
import { theme, colors } from '../styles/theme';

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

// Using our shared design system - feel free to customize these!
const styles = StyleSheet.create({
  card: {
    ...theme.card, // This applies our shared card styles
    margin: 10, // Additional custom margin for this component
  },
  text: {
    ...theme.text, // This applies our shared text styles
    textAlign: 'center', // Additional custom alignment for this component
  },
});

export default Flashcard;
