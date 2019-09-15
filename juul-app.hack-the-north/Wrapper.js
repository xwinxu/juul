import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Tracker from './Tracker';
import Demo from './Demo';
import Path from './Path';

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayScreenIndex: 0
    };
  }

  // <Demo style={{flex: 1}}/>
  // <Tracker style={{flex: 1}} />


  onSwipeUp(gestureState) {
    this.setState({myText: 'You swiped up!'});
  }

  onSwipeDown(gestureState) {
    this.setState({myText: 'You swiped down!'});
  }

  onSwipeLeft(gestureState) {
    this.setState({displayScreenIndex: this.state.displayScreenIndex + 1});
  }

  onSwipeRight(gestureState) {
    this.setState({displayScreenIndex: this.state.displayScreenIndex - 1});
  }

  onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_UP:
        this.setState({backgroundColor: 'red'});
        break;
      case SWIPE_DOWN:
        this.setState({backgroundColor: 'green'});
        break;
      case SWIPE_LEFT:
        this.setState({backgroundColor: 'blue'});
        break;
      case SWIPE_RIGHT:
        this.setState({backgroundColor: 'yellow'});
        break;
    }
  }



  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    return (
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeUp={(state) => this.onSwipeUp(state)}
        onSwipeDown={(state) => this.onSwipeDown(state)}
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
        }}
        >
        {this.state.displayScreenIndex % 3 === 0 ? <Tracker style={{flex: 1}}/> : null }
        {this.state.displayScreenIndex % 3 === 1 ? <Demo style={{flex: 1}}/> : null }
        {this.state.displayScreenIndex % 3 === 2 ? <Path style={{flex: 1}}/> : null }
      </GestureRecognizer>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0D0D0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
