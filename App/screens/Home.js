import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Home extends React.Component {
  render() {
    return (
      <ScrollView>
        <List>
          <ListItem title="Route" subtitle="Exploring Starts Here" />
          <ListItem title="GoPark" subtitle="Find Your Way" />
          <ListItem title="Pizza Time" subtitle="Hungry yet?" />
          <ListItem title="Dad Jokes" subtitle="Alexa App" />
        </List>
      </ScrollView>
    );
  }
}

export default Home;
