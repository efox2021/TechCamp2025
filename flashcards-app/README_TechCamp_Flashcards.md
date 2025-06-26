# 🧠 Tech Camp Flashcards App

Welcome to your project for Tech Camp! You'll be building a flashcards app using React Native + Expo, with help from Cursor AI. By the end, you’ll have an interactive app you can show off — and stretch goals to take it even further.

---

## 📘 Table of Contents
1. [Overview](#overview)
2. [Setup Instructions](#setup-instructions)
3. [What You’ll Build](#what-youll-build)
4. [Step-by-Step Guide](#step-by-step-guide)
5. [Stretch Goals](#stretch-goals)
6. [Helpful AI Prompts](#helpful-ai-prompts)
7. [Resources & Docs](#resources--docs)

---

## 🧭 Overview

In this project, you’ll:
- Display a list of flashcards
- Tap a card to flip it and reveal the answer
- Add your own questions and answers
- Customize how the app looks and behaves

> Bonus: You’ll learn how to use AI to write and improve your code!

---

## 🧪 Setup Instructions

1. Open this folder in **Cursor IDE**.
2. Run the following commands in the Terminal:

```bash
npm install
npx expo start
```

3. Use **web preview** or connect your phone via the Expo Go app.

If you see a screen with a button that says “Add Card” — you’re in business!

---

## 🛠 What You’ll Build

This app includes:

✅ Flashcard viewing  
✅ Tap to flip question ↔ answer  
✅ A screen to create new cards  
✅ Sample flashcards to get you started

You’ll build the logic behind these features using step-by-step TODOs in the code.

---

## 🧱 Step-by-Step Guide

### 1. Flip the Flashcard  
📍 File: `components/Flashcard.tsx`

- Import useState from React
- Add a `const [flipped, setFlipped] = useState(false)`
- Use `TouchableOpacity` to toggle flipped
- Conditionally render the question or answer based on flipped

---

### 2. Show the Flashcards List  
📍 File: `screens/FlashcardScreen.tsx`

-  Import `FlatList`, `Flashcard`, and `sampleCards`
-  Render each flashcard using the data
-  Use `question` and `answer` as props

---

### 3. Make the Form Work  
📍 File: `screens/AddCardScreen.tsx`

-  Add `useState` for `question` and `answer`
-  Bind each `TextInput` to that state
-  On button press, log both values

---

## 🌟 Stretch Goals

### 🟤 Level 1 – Style & Polish
-  Add custom fonts or colors
-  Add emoji reactions (💡 🤯 😎)
-  Animate the card flip
-  Let users toggle light/dark mode

---

### 🟠 Level 2 – App Features
-  Mark a card as “Learned”
-  Filter to show only learned/unlearned
-  Create and display new flashcards from the form
-  Add categories or tags (e.g. “Math”, “Science”)

---

### 🔵 Level 3 – Advanced / Group Challenges

#### 🧩 Multiple Choice Mode
- Show a question with 4 possible answers
- Let the user tap to pick one
- Highlight if it was correct

#### 🖼 Image Flashcards
- Add an `image` field to cards
- Show a picture on the card (use `<Image>`)

#### 💾 Local Storage
- Use `AsyncStorage` to save created cards
- Load them when the app starts

#### 📚 Decks / Topics
- Organize cards by deck
- Let users select which deck to study

---

## 🤖 Helpful AI Prompts for Cursor

Try typing these in Cursor’s AI helper pane:

- “Toggle card content on press using useState.”
- “Use FlatList to render an array of objects with props.”
- “Store new flashcard values and print to console.”
- “Save flashcards using AsyncStorage in Expo.”
- “Create a card UI with an image and a caption.”

---

## 📚 Resources & Docs

- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [Expo Docs](https://docs.expo.dev/)
- [AsyncStorage (local saving)](https://docs.expo.dev/versions/latest/sdk/async-storage/)
- [React Navigation](https://reactnavigation.org/)

---

### 🚀 Let’s Build!
You’ve got a great foundation. Use your creativity, learn from the AI, and don’t be afraid to try something new!
