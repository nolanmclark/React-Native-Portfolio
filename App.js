import React, {Component } from 'react';
import { StyleSheet, Text, View, Animated, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

class Greeting extends Component {
  render() {
    return (
      <Text style={styles.welcome}>Hello, {this.props.name}</Text>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          {/* <Text style={styles.header}>First app!</Text> */}
          <Animatable.Text animation="fadeIn" onAnimationEnd={() => this.setState({fontSize: 10})} iterationCount={1}>
            <Greeting name="Nolan" />
          </Animatable.Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
  },
  welcome: {
    paddingTop: 5,
    fontSize: 20
  },
});
