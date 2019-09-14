import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const daysOfTheWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S']


const bar = (index, fillPercentage) => {
  const height = Math.floor(Math.random() * 10) * 5;
  const dayOfTheWeek = daysOfTheWeek[index % 7];
  return (
    <View key={index} style={{marginLeft: 15}}>
      <View style={{backgroundColor: 'white', height: 80, width: 5, marginLeft: 0, borderRadius: 5, opacity: .2}} />
      <View style={{backgroundColor: 'white', height: parseInt(height), width: 5, marginLeft: 0, borderRadius: 5, marginTop: - parseInt(height)}} />
      <Text style={{color: 'white', marginLeft: -1, marginTop: 8}}>{dayOfTheWeek}</Text>
    </View>
  )
}





export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    const renderedBars = [];
    for(let i = 0; i < 14; i++){
      renderedBars.push(bar(i, 50));
    }
    return (
      <View style={styles.container}>
        <Text>Taco</Text>
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
            {renderedBars}
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
