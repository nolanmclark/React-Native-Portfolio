import React, {Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

class Welcome extends React.Component {

  goToProjects = () => {
    this.props.navigation.navigate('Home');
  }

  goToAboutMe = () => {
    this.props.navigation.navigate('About');
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.welcome}>Welcome, guests.</Text>
        </View>
        <TouchableOpacity onPress={this.goToProjects} style={styles.firstButtonContainer}>
            <Text style={styles.buttonText}>View My Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.goToAboutMe} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>About Me</Text>
        </TouchableOpacity>
        <Text style={styles.powered}>This app is powered by React Native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee'
  },
  header: {
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
  },
  welcome: {
    paddingVertical: 5,
    fontSize: 25,
    fontWeight: '700'
  },
  textContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  firstButtonContainer: {
    backgroundColor: '#2980b9',
    marginVertical: 10,
    width: '90%',
    paddingVertical: 20,
    borderRadius: 8
  },
  buttonContainer: {
    backgroundColor: '#3498db',
    marginBottom: 45,
    width: '90%',
    paddingVertical: 20,
    borderRadius: 8
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
  },
  powered: {
    marginBottom: 40,
    color: '#999'
  }
});

export default Welcome;
