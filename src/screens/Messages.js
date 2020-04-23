import {FlatList, View, Text, StyleSheet } from "react-native";
import React, { Component } from "react";

export default class Messages extends React.Component {

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 3,
          width: "100%",
          // backgroundColor: "#700",
        }}
      />
    );
  }

  render() {
    return (
      <View elevation={10}  style={styles.container}>
        <FlatList
                    ItemSeparatorComponent = { this.FlatListItemSeparator }
        data={[
            {
            key: 'Due to Covid-19, We take all neccesary actions to make your service easy and simple',
            date: '20-Mar-2020'
            },
            {
            key: 'Introducing New Functionalities with faster transactions',
            date: '12-Mar-2020'
            },
            {
            key: 'CheckOut Latest Update with new offers',
            date: '2-Feb-2020'
            },
            {
            key: 'You are now a valued customer and you can upgrade your wallet limit',
            date: '17-Jan-2020'
            },
            {
            key: 'Thank You For using Our Advanced Wallet',
            date: '20-Dec-2019'
            },
        ]}
          renderItem={({ item,index }) =>

            <View style={[{  flex: 1 }, index%2==0 ? { marginRight: 10 } : { marginRight: 10 } ]}>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.item}>{item.key}</Text>
            </View>
          
          }

      />
    </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    // padding: 10,
    // textAlign: 'center',
    fontSize: 18,
    height: 44,
  },
  date: {
    textAlign: 'right',
    padding: 10,
    fontSize: 13,
    height: 40,
  },
})

