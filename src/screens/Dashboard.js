

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from 'react-native'

import Cards from '../screens/Cards'
import Settings from '../screens/Settings'
import Messages from '../screens/Messages'


const deviceW = Dimensions.get('window').width

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Home
        </Text>
      </View>
    )
  }
}

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Profile
        </Text>
      </View>
    )
  }
}

export default class TabDemo extends Component {
  state= {
    selectedTab: 'Cards'
  };

  render() {
    return (
      <TabNavigator style={styles.container}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Cards'}
          title="Cards"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="cards-playing-outline" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="cards" size={px2dp(22)} color="#3496f0"/>}
          // badgeText="1"
          onPress={() => this.setState({selectedTab: 'Cards'})}>
          {/* <Home /> */}
          <Cards/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Messages'}
          title="Messages"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="message-reply-text" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="message-reply" size={px2dp(22)} color="#3496f0"/>}
          onPress={() => this.setState({selectedTab: 'Messages'})}>
          <Messages/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Settings'}
          title="Settings"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <FontAwesome name="gear" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <FontAwesome name="gears" size={px2dp(22)} color="#3496f0"/>}
          onPress={() => this.setState({selectedTab: 'Settings'})}>
          <Settings/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TabDemo', () => TabDemo);



// import React, { Component } from "react";
// import Drawer from "../navigators/drawer-navigator";
// export default class App extends React.Component {
//   render() {
//     return <Drawer />;
//   }
// }




// import React, { memo } from 'react';
// import Background from '../components/Background';
// import Logo from '../components/Logo';
// import Header from '../components/Header';
// import Paragraph from '../components/Paragraph';
// import Button from '../components/Button';

// const Dashboard = ({ navigation }) => (
//   <Background>
//     <Logo />
//     <Header>Let’s start</Header>
//     <Paragraph>
//       Your amazing app starts here. Open you favourite code editor and start
//       editing this project.
//     </Paragraph>
//     <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
//       Logout
//     </Button>
//   </Background>
// );

// export default memo(Dashboard);
