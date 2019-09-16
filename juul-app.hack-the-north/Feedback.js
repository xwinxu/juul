import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Animated, Image } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts'
import { Defs, LinearGradient, Stop } from 'react-native-svg'
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import Axios from 'axios';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';



export default class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <View style={styles.container}>
      <View style={{marginTop: -200, marginBottom: 30}}>
        <Image source={require('./assets/headshot.jpg')} style={{height: 50, width: 50, borderRadius: 30, marginLeft: 30}}/>
        <Text style={{color: 'white', fontSize: 25}}>John Smith</Text>
      </View>
      <View style={{width: '95%', height: 200, marginTop: 30}}>
        <LinearGradient
          colors={['#3D79E4', '#3BB3D3']}
          start={[0, 5]}
          style={{
            left: 0,
            right: 0,
            top: 0,
            width: '100%', height: 200,
            zIndex: 100,
            borderRadius: 15, borderWidth: 0.5, borderColor: 'transparent',
            position: 'absolute'
          }}
        />
        <View>
          <Text style={{color: 'white', fontSize: 20, marginTop: 20, marginLeft: 60, fontWeight: "600", marginBottom: 20}}>How Are You Feeling Today?</Text>
        </View>
        <View style={{marginLeft: 100}}>
          <AwesomeButtonRick type="primary" width={200} style={{marginBottom: 20}}>Fantastic</AwesomeButtonRick>
          <AwesomeButtonRick type="secondary" width={200} style={{marginBottom: 20}}>Pretty Good</AwesomeButtonRick>
          <AwesomeButtonRick type="primary" width={200} style={{marginBottom: 20}}>Just Okay</AwesomeButtonRick>
          <AwesomeButtonRick type="secondary" width={200} style={{marginBottom: 20}}>Poor</AwesomeButtonRick>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 20}}>
        </View>
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
