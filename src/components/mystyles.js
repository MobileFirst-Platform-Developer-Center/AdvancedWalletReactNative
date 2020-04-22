import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  skewContainer: {
    backgroundColor: '#2c3e50',
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width + 100,
    position: 'absolute',
    left: Dimensions.get('window').width * -0.1,
    top: Dimensions.get('window').height * -0.1,
    transform: [{ rotateZ: '-20deg' }],
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  textDesc: {
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default styles;