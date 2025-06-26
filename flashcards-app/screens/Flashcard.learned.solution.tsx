import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

interface FlashcardProps {
  question: string;
  answer: string;
  learned: boolean;
  onMarkLearned: () => void;
}

const Flashcard: React.FC<FlashcardProps> = ({
  question,
  answer,
  learned,
  onMarkLearned,
}) => {
  const [flipped, setFlipped] = React.useState(false);

  return (
    <TouchableOpacity onPress={() => setFlipped(!flipped)} style={[
      styles.card,
      learned && styles.learnedCard,
    ]}>
      <Text style={styles.text}>{flipped ? answer : question}</Text>
      {!learned && (
        <Button title="Mark as Learned" onPress={onMarkLearned} />
      )}
      {learned && <Text style={styles.learnedText}>✅ Learned</Text>}
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
  learnedCard: {
    backgroundColor: '#d4f5dc',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  learnedText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'green',
    marginTop: 10,
  },
});

export default Flashcard;
