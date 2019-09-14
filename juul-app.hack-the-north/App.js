import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {

  const els = [];

  for(let i = 0; i < 20; i++){
    els.push(<View key={i} style={{width: 20, height: 200, borderLeftColor: 'black', borderRadius: 4, borderWidth: 0.5, marginTop: 50, marginRight: 100}}></View>)
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} horizontal={true}>
        {els}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
