/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View ,SafeAreaView, TextInput,ScrollView} from 'react-native';
import Slideshow from 'react-native-image-slider-show';
import { Avatar, Card, IconButton } from 'react-native-paper';
// import { Header } from 'react-native-elements';
import Spacer from 'react-native-spacer';
import Header from '../components/Header';
import ParagraphTitle from '../components/Paragraph';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Cards extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>

{/* <Spacer style={styles.inputWrapper}>
          <TextInput 
            style={styles.textInput}
            placeholder="Write me something, sexy!"
          />
        </Spacer>

        <Header style={{ marginBottom: 40 }}
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          /> */}
    {/* Components that need to float when keyboard showing */}

      <Slideshow 
      dataSource={[
        // { url:'http://placeimg.com/640/480/any' },
        { url:'https://img.favpng.com/4/0/0/credit-card-payment-debit-card-emv-cash-png-favpng-hDwnr5f2sDdhbUdHHBYmULJCk.jpg' },
        { url:'https://www.freepngimg.com/thumb/atm_card/1-2-atm-card-png-picture.png' }
        ]} />
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <Text>{'\n'}</Text>
    <Header>Transactions</Header>
    {/* <ParagraphTitle>
      Transactions
    </ParagraphTitle> */}
    {/* <Header>OneStop for Wallet Solutions</Header> */}

        <Card.Title
            title="$ 5"
                subtitle="Hand Washer"
      />
              <Card.Title
            title="$ 45"
                subtitle="HouseHold Groceries"
      />
              <Card.Title
            title="$ 120"
                subtitle="Bakery & Cakes"
      />
              <Card.Title
            title="$ 80"
                subtitle="Fuel Station"
      />
              <Card.Title
            title="$ 75"
                subtitle="Internet Bill"
      />
              <Card.Title
            title="$ 90"
                subtitle="Electricty bill"
      />
              <Card.Title
            title="$ 250"
                subtitle="Transport"
      />
              <Card.Title
            title="$ 15"
                subtitle="Hand Washer"
      />

        
        
      </ScrollView>
      </SafeAreaView>
      </View>

  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  slideContainer: {
    flex: 2,
      alignItems: "center",
      justifyContent: "center"
  },
  inputWrapper: {
    backgroundColor: '#FFFFFF',
    padding: 20
  },
  slide1: {
      backgroundColor: "rgba(20,20,200,0.3)"
  },
  slide2: {
      backgroundColor: "rgba(20,200,20,0.3)"
  },
  slide3: {
      backgroundColor: "rgba(200,20,20,0.3)"
  },
});
