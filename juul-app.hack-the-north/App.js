import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Demo from './Demo';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Demo style={{flex: 1}}/>
    </View>
  )

}
