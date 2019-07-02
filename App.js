import React from 'react';
import { StyleSheet, PanResponder, Animated, Text, View } from 'react-native';
import Leaf from '/Users/jacobbrower/Documents/ReactNative/MindMapping/assets/Components/Leaf.js';


export default function App() {
  return (
    <View style={styles.container}>
      <Leaf buttonStyles={styles.button}
        textStyles={styles.text}
        content={'This is content'}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#f3f3',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
  },
});
