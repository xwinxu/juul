import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';





export default class RenderedBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heightOfMe: new Animated.Value(0),
      heightOfMeNegative: new Animated.Value(0)
    };
  }

  componentDidMount(){

    Animated.timing(                    // Animate over time
   this.state.heightOfMe,             // The animated value to drive, this would be a new Animated.Value(0) object.
   {
     toValue: this.props.actualHeight,                   // Animate the value
     duration: 1500,                 // Make it take a while
   }
 ).start()
 Animated.timing(                    // Animate over time
this.state.heightOfMeNegative,             // The animated value to drive, this would be a new Animated.Value(0) object.
{
  toValue: - this.props.actualHeight,                   // Animate the value
  duration: 1500,                 // Make it take a while
}
).start()


  }


  render() {
    return (
      <View style={{marginLeft: 15}}>
        <View style={{backgroundColor: 'white', height: 80, width: 5, marginLeft: 0, borderRadius: 5, opacity: .2}} />
        <Animated.View style={{backgroundColor: 'white', height: this.state.heightOfMe, width: 5, marginLeft: 0, borderRadius: 5, marginTop: this.state.heightOfMeNegative}} />
        <Text style={{color: 'white', marginLeft: -1, marginTop: 8}}>{this.props.dayOfTheWeek}</Text>
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
