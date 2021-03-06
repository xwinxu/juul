import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
console.disableYellowBox = true;
import Axios from 'axios';


export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highestItem: 'taco',
      selected: 0,
      dosageText: 'Low'
    };
  }

  onViewableItemsChanged = (info) => {
    this.setState({ highestItem: JSON.stringify(info) })
  }

  handleScrollEvent = (ev) => {
    console.log(ev.nativeEvent.contentOffset.x)
    this.setState({selected: Math.floor(this.state.selected + (ev.nativeEvent.contentOffset.x / 1000))})
    if(this.state.selected < 30){
      this.setState({dosageText: 'Low'});
    }
    if(this.state.selected > 30){
      this.setState({dosageText: 'Medium'});
    }
    if(this.state.selected > 80){
      this.setState({dosageText: 'High'});
    }
    if(this.state.selected > 140){
      this.setState({dosageText: 'Very High'});
    }
  }

  onSwipeUp(gestureState) {
    this.setState({myText: 'You swiped up!'});
  }

  onSwipeDown(gestureState) {
    this.setState({myText: 'You swiped down!'});
  }

  onSwipeLeft(gestureState) {
    console.log('you swiped left')
  }

  onSwipeRight(gestureState) {
    this.setState({displayScreenIndex: this.state.displayScreenIndex - 1});
  }

  onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_UP:
        // this.setState({backgroundColor: 'red'});
        break;
      case SWIPE_DOWN:
        // this.setState({backgroundColor: 'green'});
        break;
      case SWIPE_LEFT:
        // this.setState({backgroundColor: 'blue'});
        break;
      case SWIPE_RIGHT:
        // this.setState({backgroundColor: 'yellow'});
        break;
    }
  }

  handleRequest(){
    console.log('wooo2')
    Axios.get('https://hooks.zapier.com/hooks/catch/298717/o3c72vr?level=' + this.state.selected)
  }


  render() {
    const self = this;
    const els = [];
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    for(let i = 0; i < 50; i++){
      els.push(
        <View key={i} style={{width: 6, height: 50, borderRadius: 4, borderWidth: 0.5, marginTop: 20, marginRight: 50, borderColor: 'transparent'}}>
          <LinearGradient
            colors={['#73DBEE', '#4E79E7']}
            start={[i / 20, i / 20]}
            style={{
              left: 0,
              right: 0,
              top: 0,
              width: 6, height: 50,
              borderRadius: 4, borderWidth: 0.5, borderColor: 'transparent'
            }}
          />
        </View>
      )
    }



    return (
      <View style={styles.container}>

      <LinearGradient
        colors={['#73DBEE', '#4E79E7']}
        start={[self.state.selected / 100, self.state.selected / 100]}
        style={{
          left: 0,
          right: 0,
          top: 0,
          borderColor: 'transparent',
          width: '100%',
          height: '100%',
          zIndex: 0,
          position: 'absolute'
        }}
      />
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeUp={(state) => this.onSwipeUp(state)}
        onSwipeDown={(state) => this.onSwipeDown(state)}
        onSwipeLeft={(state) => this.props.handleSwipeLeft(state)}
        onSwipeRight={(state) => this.props.handleSwipeRight(state)}
        config={config}
        style={{
          width: '100%',
          height: '50%',
          zIndex: 1000000,
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          borderWidth: .5,
          position: 'absolute'
        }}
        >
      </GestureRecognizer>
      <View style={{borderWidth: .5, borderColor: 'transparent', zIndex: 20, height: '45%', width: '80%', top: 310, left: 40, position: 'absolute'}}>
        <Text style={{fontSize: 65, color: 'white', textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: {width: -1, height: 1}, textShadowRadius: 10, marginBottom: 25}}>
          {self.state.dosageText}
        </Text>
        <View style={{height: 2, width: '100%', backgroundColor: '#B8B8B8', borderColor: 'transparent', opacity: .5, borderWidth: .5, marginBottom: 15}} />
        <Text style={{fontSize: 20, color: '#faf7f7'}}>Please select your preferred dosage using the slider below.</Text>
      </View>
        <View style={{height: 350, width: 415, borderWidth: 0.5, marginTop: 550, borderRadius: 25, borderColor: 'transparent', backgroundColor: 'white', zIndex: 100}}>
          <View style={{marginLeft: 20}}>
            <Text style={{color: '#C4C3C4', fontSize: 20, marginTop: 50}}>Select your desired dosage</Text>
            <View  style={{flexDirection:'row'}}>
              <Text style={{marginTop: 0, fontSize: 40, marginRight: 15}}>{self.state.selected}</Text><Text style={{fontSize: 25, marginTop: 7.5}}>Strength</Text>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} horizontal={true} onScroll={(event) => this.handleScrollEvent(event)} scrollEventThrottle={20}>
            {els}
          </ScrollView>
          <TouchableOpacity
            onPress={() => {this.handleRequest()}}
            style={{top: 250, left: 130, backgroundColor: 'black', borderRadius: 25, height: 40, width: '40%', position: 'absolute', justifyContent: 'center', alignItems: 'center'}}
          >
          <Text style={{color: 'white'}}>Select</Text>
          </TouchableOpacity>
        </View>
      </View>
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
