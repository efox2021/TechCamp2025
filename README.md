# 🧠 Tech Camp Flashcards App

Welcome to your project for Tech Camp! You'll be building a flashcards app using React Native + Expo, with help from Cursor AI. By the end, you'll have an interactive app you can show off — and stretch goals to take it even further.

---

## 📘 Table of Contents
1. [Overview](#overview)
2. [Setup Instructions](#setup-instructions)
3. [What You'll Build](#what-youll-build)
4. [Design System & Styling](#design-system--styling)
5. [Step-by-Step Guide](#step-by-step-guide)
6. [Stretch Goals](#stretch-goals)
7. [Helpful AI Prompts](#helpful-ai-prompts)
8. [Resources & Docs](#resources--docs)
9. [React Native Quick Reference](#react-native-quick-reference)

---

## <span id="overview">🧭 Overview</span>

In this project, you'll:
- Display a list of flashcards
- Tap a card to flip it and reveal the answer
- Add your own questions and answers
- Customize how the app looks and behaves

> Bonus: You'll learn how to use AI to write and improve your code!

---

## <span id="setup-instructions">🧪 Setup Instructions</span>

1. Open this folder in **Cursor IDE**.
2. Run the following commands in the Terminal:

```bash
npm install
npx expo start
```

3. Use **web preview** or connect your phone via the Expo Go app.

If you see a screen with a button that says "Add Card" — you're in business!

---

## <span id="what-youll-build">🛠 What You'll Build</span>

This app includes:

✅ Flashcard viewing  
✅ Tap to flip question ↔ answer  
✅ A screen to create new cards  
✅ Sample flashcards to get you started

You'll complete the app by following TODOs in the code that guide you through building the core features.

---

## <span id="design-system--styling">🎨 Design System & Styling</span>

A great app is not just functional, but also looks and feels good! Here's a simple design system you can use and tweak as you build your flashcards app. Feel free to change these values to make the app your own.

### Color Palette
| Name         | Example      | Value         |
|--------------|--------------|--------------|
| Primary      | ![#4F8EF7](https://placehold.co/15x15/4F8EF7/4F8EF7.png) | `#4F8EF7` |
| Accent       | ![#FFD166](https://placehold.co/15x15/FFD166/FFD166.png) | `#FFD166` |
| Background   | ![#F6F7FB](https://placehold.co/15x15/F6F7FB/F6F7FB.png) | `#F6F7FB` |
| Card         | ![#FFFFFF](https://placehold.co/15x15/FFFFFF/FFFFFF.png) | `#FFFFFF` |
| Text         | ![#22223B](https://placehold.co/15x15/22223B/22223B.png) | `#22223B` |
| Muted        | ![#BFC6D1](https://placehold.co/15x15/BFC6D1/BFC6D1.png) | `#BFC6D1` |

### Typography
- **Font Family:** System default (or try `Avenir`, `Helvetica Neue`, or `Roboto`)
- **Font Sizes:**
  - Title: 24
  - Subtitle: 18
  - Body: 16
  - Small: 14

### Spacing
- **Padding:** 16
- **Margin:** 12
- **Card Border Radius:** 12

### Example: Reusable Stylesheet
```tsx
// styles/theme.ts
import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#4F8EF7',
  accent: '#FFD166',
  background: '#F6F7FB',
  card: '#FFFFFF',
  text: '#22223B',
  muted: '#BFC6D1',
};

export const theme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
```

> 💡 **Tip:** Create a `styles/theme.ts` file and import these styles into your components. Update the colors, fonts, and spacing to match your own style!

---

### 1. Show the Flashcards List 
### 🎯 Goal:
Render a scrollable list of flashcards from sample data using FlatList.

📍 File: `screens/FlashcardScreen.tsx`

-  Import `FlatList`, `Flashcard`, and `sampleCards`
-  Render each flashcard using the data
-  Use `question` and `answer` as props

### 🤖 AI Prompt Suggestions
- 💬 "Render a list of items in React Native using FlatList."
- 💬 "Pass props into a child component in a FlatList."

### ⚠️ Common Issues & Fixes
| Issue                          | Cause                                               | Fix                                                             |
| ------------------------------ | --------------------------------------------------- | --------------------------------------------------------------- |
| ❌ Nothing is showing           | `FlatList` isn't rendered or `data` is empty        | Make sure `sampleCards` is imported and returned                |
| ❌ Red error about keyExtractor | You forgot `index.toString()` or used the wrong key | Use `keyExtractor={(item, index) => index.toString()}`          |
| ❌ Flashcard error              | Flashcard file isn't imported, or props are wrong   | Confirm `Flashcard` is imported and passed `question`, `answer` |

---

## <span id="step-by-step-guide">🧱 Step-by-Step Guide</span>

### 2. Flip the Flashcard
### 🎯 Goal:
When a student taps on a flashcard, it should flip between showing the question and the answer.  

📍 File: `components/Flashcard.tsx`
- Import useState from React
- Add a `const [flipped, setFlipped] = useState(false)`
- Use `TouchableOpacity` to toggle flipped
- Conditionally render the question or answer based on flipped


💡 **Design Tip:** This component already uses our shared design system! Feel free to customize the colors, fonts, and spacing in `styles/theme.ts` to make it your own.

> ### 🤖 AI Prompt Suggestions
>   - 💬 "Add a useState boolean to toggle between two views in a React Native component."
>  - 💬 "Make this flashcard component flip between question and answer when tapped."

### ⚠️ Common Issues & Fixes
| Issue                                 | Cause                                                                                  | Fix                                                                                 |
| ------------------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| ❌ `useState` is not defined           | Forgot to import it                                                                    | Add `import { useState } from 'react';` at the top                                  |
| ❌ Nothing happens when I tap the card | `onPress` might not be set correctly or the component is not inside `TouchableOpacity` | Wrap everything in `<TouchableOpacity onPress={...}>`                               |
| ❌ Always shows the same value         | The conditional may be incorrect or state isn't toggling                               | Check for `{flipped ? answer : question}` and that `setFlipped(!flipped)` is called |

---

### 3. Make the Form Work  
### 🎯 Goal:
Build a form where users can type a question and answer, and log the result when they tap "Save Card."

📍 File: `screens/AddCardScreen.tsx`

-  Add `useState` for `question` and `answer`
-  Bind each `TextInput` to that state
-  On button press, log both values

> ### 🤖 AI Prompt Suggestions
> - 💬 "Render a list of items in React Native using FlatList."
> - 💬 "Pass props into a child component in a FlatList."

### ⚠️ Common Issues & Fixes
| Issue                        | Cause                             | Fix                                                                          |
| ---------------------------- | --------------------------------- | ---------------------------------------------------------------------------- |
| ❌ Text doesn't update        | `value` or `onChangeText` missing | Ensure each `TextInput` is wired with `value={...}` and `onChangeText={...}` |
| ❌ Button doesn't do anything | No `onPress` handler              | Make sure `onPress={handleSave}` is in place                                 |
| ❌ Empty values printed       | State never updated               | Check spelling and placement of `useState`                                   |

---

### Step 4: Make Your Flashcard Save to the List 
### 🎯 Goal:
Right now, when you fill out the form and hit Save, your flashcard just prints to the console. Let's fix that!

### ✅ Part A: Create a Card Object
📍 File: AddCardScreen.tsx
- In your save handler, build an object like this: 
```tsx
{ question: 'your question here', answer: 'your answer here' }
```
- Try logging it to the console

### ✅ Part B: Think About Where the Cards Live
Right now, your sample cards come from sampleCards.ts, but that's just a static file.
- Where would you need to put the card list so both screens can see it?
- How can you update it?

### ✅ Part C: Share Your New Card
- Move your card list (useState) into App.tsx
- Add a function `addCard` in App.tsx that takes a question and answer and updates that list
- Pass that function to AddCardScreen as a prop (don't forget to update the `RootStackParamList`)
  - You can pass the method parameter in the route params like this: `route={{ addCard }}`
  - Add the route param in your AddCardScreen file (`AddCardScreen({ route })`)
  - In AddCardScreen, destructure it from the route: `const { addCard } = route.params;`
- Call it inside your save handler
```tsx
<Button
  title="Save Card"
  onPress={() => {
    addCard({ question, answer });  
  }}
/>
```

### ✅ Part D: Reset Form State and Navigate Back
- Create a `handleSave` method that calls `addCard` and resets form state
- Add `navigation` prop to AddCardScreen component
- Call `navigation.goBack()` to return to FlashcardScreen

### 🤖 AI Prompt Ideas
> - 💬 "How do I update the RootStackParamList navigation props for a screen? How do I pass those props?"
> - 💬 "How do I go back using React Navigation?"

> - 💬 "How do I use the navigation object from a screen in react native?"

##

### Step 5: Mark Cards as "Learned" and Filter Them

Let's level up your flashcards by letting users keep track of what they've already learned!


#### ✅ Part A: Add a `learned` Field to New Cards

📍 File: `AddCardScreen.tsx`

- [ ] When calling `addCard`, include this:

```tsx
addCard({ question, answer, learned: false });
```

- [ ] Update your types or structure to include `learned`

---

#### ✅ Part B: Let Users Mark a Card as Learned

📍 File: `Flashcard.tsx`

- [ ] Add a **"Mark as Learned"** button below each card
- [ ] When tapped, it should call a function passed from the parent (e.g., `onMarkLearned`)
- [ ] Visually indicate learned cards with a ✅ or different background color (leverage your state for toggling styling)

---

#### ✅ Part C: Add a Filter

📍 File: `FlashcardScreen.tsx`

- [ ] Add a button or switch labeled "Show Learned Only"
- [ ] Add a boolean `showLearnedOnly` state
- [ ] Use `.filter()` on the `cards` list before passing to `FlatList`

```tsx
const visibleCards = showLearnedOnly
  ? cards.filter((card) => card.learned)
  : cards;
```

---

### ✅ Part D: Test It!
- Add a new card using the form
- Go back to the main screen
- It should now appear in your flashcard list 🎉

> ### 🤖 AI Prompt Ideas
> - 💬 "How do I pass data between two screens in React Navigation?"
> - 💬 "Update a shared list of objects from another screen in React Native."

### ⚠️ Common Gotchas
| Problem              | Hint                                                       |
| -------------------- | ---------------------------------------------------------- |
| Card doesn't show up | Did you pass the card list to `FlashcardScreen` as a prop? |
| Can't call `addCard` | Is it being passed as a prop? Is it defined in `App.tsx`?  |
| State doesn't update | Are you calling `setCards([...prev, newCard])`?            |


## <span id="stretch-goals">🌟 Stretch Goals</span>

### 🟤 Level 1 – Style & Polish
-  Add custom fonts or colors
-  Add emoji reactions (💡 🤯 😎)
-  Animate the card flip
-  Let users toggle light/dark mode

---

### 🟠 Level 2 – App Features
-  Mark a card as "Learned"
-  Filter to show only learned/unlearned
-  Create and display new flashcards from the form
-  Add categories or tags (e.g. "Math", "Science")

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

## <span id="helpful-ai-prompts">🤖 Helpful AI Prompts</span>🤖

Try typing these in Cursor's AI helper pane:

- "Toggle card content on press using useState."
- "Use FlatList to render an array of objects with props."
- "Store new flashcard values and print to console."
- "Save flashcards using AsyncStorage in Expo."
- "Create a card UI with an image and a caption."

---

## <span id="resources--docs">📚 Resources & Docs</span>

- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [Expo Docs](https://docs.expo.dev/)
- [AsyncStorage (local saving)](https://docs.expo.dev/versions/latest/sdk/async-storage/)
- [React Navigation](https://reactnavigation.org/)

---

## <span id="react-native-quick-reference">📌 React Native Quick Reference</span>

### 🧠 useState Hook

```tsx
const [count, setCount] = useState(0);
```

---

### 📋 FlatList

```tsx
<FlatList
  data={yourArray}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => <Text>{item.someValue}</Text>}
/>
```

---

### 🔘 TouchableOpacity (Button)

```tsx
<TouchableOpacity onPress={() => console.log('Tapped!')}>
  <Text>Tap me!</Text>
</TouchableOpacity>
```

---

### ⌨️ TextInput with State

```tsx
const [text, setText] = useState('');

<TextInput
  value={text}
  onChangeText={setText}
  placeholder="Type here"
/>
```
---
### 🔁 Lifting State & Updating a Shared List
```tsx
// In App.tsx
const [cards, setCards] = useState([]);

const addCard = (newCard) => {
  setCards((prevCards) => [...prevCards, newCard]);
};

// Pass addCard as a prop to another screen:
<AddCardScreen addCard={addCard} />
```

```tsx
// In AddCardScreen.tsx
const handleSave = () => {
  addCard({ question, answer });
};

<Button
  title="Save Card"
  onPress={() => {
    handleSave()
  }}
/>
```

### 💬 Tip: If your new data isn't showing up, check:
- Did you call setState with a copy of the previous state?
- Are you passing the state and function down properly?
---

### 💡 Conditional Rendering

```tsx
{showAnswer ? <Text>Answer</Text> : <Text>Question</Text>}
```

---

### 🎨 Basic Stylesheet

```tsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
```

---

### 📦 AsyncStorage (Local Storage Example)

```tsx
import AsyncStorage from '@react-native-async-storage/async-storage';

const save = async () => {
  await AsyncStorage.setItem('myKey', 'myValue');
};

const load = async () => {
  const value = await AsyncStorage.getItem('myKey');
  console.log(value);
};
```

---

>💬 **Tip:** Use Cursor AI to ask for any variation of these if you're stuck or want to experiment!

---

### 🚀 Let's Build!
You've got a great foundation. Use your creativity, learn from the AI, and don't be afraid to try something new!
