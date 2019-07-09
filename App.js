/**
 * The main storage for the app in React Native
 * @author Sree and Br0wer
 */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Draggable from '/Users/jacobbrower/Documents/ReactNative/MindMapping/assets/Components/Draggable.js';


export default function App() {

  return (
    <View style={styles.container}>
      <Draggable />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#f3f',
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
});
