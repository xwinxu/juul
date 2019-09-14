import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Demo from './Demo';
import Tracker from './Tracker';

export default function App() {
  // <Demo style={{flex: 1}}/>

  return (
    <View style={{flex: 1}}>
      <Tracker style={{flex: 1}} />
    </View>
  )

}
