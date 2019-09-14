import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {


    return (
      <View style={styles.container}>
        <Text>Taco</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
