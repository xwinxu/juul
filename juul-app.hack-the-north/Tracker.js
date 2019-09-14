import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Renderedbar from './RenderedBar';
const daysOfTheWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S']


const bar = (index, fillPercentage, heightStatus, secondHeightStatus, heightVal) => {
  const height = Math.floor(Math.random() * 10) * 7;
  const dayOfTheWeek = daysOfTheWeek[index % 7];
  return (
    <Renderedbar key={index} heightStatus={heightStatus} secondHeightStatus={secondHeightStatus} dayOfTheWeek={dayOfTheWeek} actualHeight={height}/>
  )
}





export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedBars: [],
      heightME: new Animated.Value(0),
      heightME2: new Animated.Value(0),
    };
  }

  componentDidMount(){

    Animated.timing(                    // Animate over time
   this.state.heightME,             // The animated value to drive, this would be a new Animated.Value(0) object.
   {
     toValue: 70,                   // Animate the value
     duration: 2000,                 // Make it take a while
   }
 ).start()
 Animated.timing(                    // Animate over time
this.state.heightME2,             // The animated value to drive, this would be a new Animated.Value(0) object.
{
  toValue: - 70,                   // Animate the value
  duration: 2000,                 // Make it take a while
}
).start()

  }


  render() {
    for(let i = 0; i < 14; i++){
      this.state.renderedBars.push(bar(i, 50, this.state.heightME, this.state.heightME2));
    } 
    return (
      <View style={styles.container}>
        <View style={{width: '95%', height: 200}}>
          <LinearGradient
            colors={['#3D79E4', '#2F58E3']}
            start={[0, 5]}
            style={{
              left: 0,
              right: 0,
              top: 0,
              width: '100%', height: 200,
              borderRadius: 15, borderWidth: 0.5, borderColor: 'transparent',
              position: 'absolute'
            }}
          />
          <View>
            <Text style={{color: 'white', fontSize: 20, marginTop: 20, marginLeft: 20, fontWeight: "600"}}>DAILY USAGE</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 15}}>
            {this.state.renderedBars}
          </View>
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
              borderRadius: 15, borderWidth: 0.5, borderColor: 'transparent',
              position: 'absolute'
            }}
          />
          <View>
            <Text style={{color: 'white', fontSize: 20, marginTop: 20, marginLeft: 20, fontWeight: "600"}}>DAILY NICOTINE CONSUMPTION</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 15}}>
            {this.state.renderedBars}
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
