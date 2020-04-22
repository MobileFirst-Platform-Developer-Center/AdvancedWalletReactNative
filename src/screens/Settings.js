import { View, Text, StyleSheet } from "react-native";
import React, { Component } from "react";
import CircleSizeSelector from 'react-native-circle-size-selector'


const InitialValue = 35;

export default class Settings extends React.Component {

  state = {
    value: InitialValue,
  }

  onChange = (value) => {
    this.setState({ value })
  }
  
  render () {
    return (

      <View style={styles.container}>
        <View>
            <Text style={styles.text}>Change Limit For Single Card Operations</Text>
            <Text style={styles.heading}>Current Limit :  {this.state.value}</Text>
          </View>
      <View style={styles.parent}>
        <CircleSizeSelector
          minValue={10}
          maxValue={100}
          initialValue={InitialValue}
          onChange={this.onChange}
        >
          <View>
            <Text style={styles.text}>{this.state.value}</Text>
          </View>
        </CircleSizeSelector>
      </View>
    </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  parent: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#AAC8C8',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#96C8C8',
  },
})
