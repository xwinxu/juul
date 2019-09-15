import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Animated, Image } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts'
import { Defs, LinearGradient, Stop } from 'react-native-svg'
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'


export default class Path extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount(){


  }




  render() {
    const data = [128, 111, 110, 108, 104, 105, 100]
    const margins = [0, 150]
    // , 97, 89, 77, 88, 56, 43
    const predictedData = [120, 80, 67, -44]

        const contentInset = { top: 20, bottom: 20 }

    return (
      <View style={styles.container}>
      <View style={{marginTop: -40, marginBottom: 30}}>
        <Image source={require('./assets/headshot.jpg')} style={{height: 50, width: 50, borderRadius: 30, marginLeft: 30}}/>
        <Text style={{color: 'white', fontSize: 25}}>John Smith</Text>
      </View>
      <View style={{width: '95%', height: 400}}>

        <View>
          <Text style={{color: 'white', fontSize: 20, marginTop: 20, marginLeft: 20, fontWeight: "600"}}>MY JOURNEY</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 20}}>
        <View style={{ height: 300, flexDirection: 'row' }}>
        <View style={{ height: 200, flexDirection: 'row', width: '95%' }}>
        <LinearGradient
          colors={['#3D79E4', '#2F58E3']}
          start={[0, 5]}
          style={{
            left: 0,
            right: 0,
            top: 0,
            width: '100%', height: 400,
            borderRadius: 15, borderWidth: 0.5, borderColor: 'transparent',
            position: 'absolute'
          }}
        /> 
              <YAxis
                  data={margins}
                  contentInset={contentInset}
                  svg={{
                      fill: 'white',
                      fontSize: 10,
                  }}
                  numberOfTicks={10}
                  min={0}
                  formatLabel={(value) => `${value}`}
              />
              <LineChart
                  style={{ height: 200, width: 200, marginLeft: 16, fill: 'white' }}
                  data={margins}
                  svg={{ stroke: 'transparent', strokeWidth: 2 }}
                  contentInset={contentInset}

              >
              <Grid />
              </LineChart>
              <LineChart
                  style={{ height: 130, width: 200, marginLeft: -200, marginTop: 30, fill: 'white' }}
                  data={data}
                  svg={{ stroke: 'rgb(134, 65, 244)', strokeWidth: 2 }}
                  contentInset={contentInset}
              >
              </LineChart>
              <LineChart
                  style={{ height: 70, width: 50, marginLeft: 2, marginTop: 122, fill: 'white' }}
                  data={predictedData}
                  svg={{ stroke: 'rgb(134, 65, 244)', strokeDasharray: '4,4', strokeWidth: 2 }}
                  contentInset={contentInset}
              >
              </LineChart>
          </View>

          </View>
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
