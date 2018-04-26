import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Linking  } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Home extends React.Component {
  render() {
    return (
      <ScrollView>
        <List>
          <ListItem
            onPress={ ()=>{ Linking.openURL('https://itunes.apple.com/us/app/route/id1327049881?mt=8')}}
            title="Route"
            subtitle="Exploring Starts Here"
          />
          <ListItem
           onPress={ ()=>{ Linking.openURL('https://vs-genius.ddns.net/food-truck/app/home')}}
           title="FüdTruck"
           subtitle="The Food Truck Finder"
          />
          <ListItem
          onPress={ ()=>{ Linking.openURL('https://nolanclark.co/project/pizza/')}}
          title="Pizza Time"
          subtitle="Hungry yet?"
          />
          <ListItem
          onPress={ ()=>{ Linking.openURL('https://www.amazon.com/dp/B074YYX1BF/ref=sr_1_3?s=digital-skills&ie=UTF8&qid=1504047696&sr=1-3&keywords=dad+jokes')}}
          title="Dad Jokes"
          subtitle="Alexa App" />
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bbb',
    marginTop: 0,
    paddingTop: 0,
    flexGrow: 0,
    overflow: 'hidden'
  },
  listItems: {
    borderBottomColor: '#fff',
    backgroundColor: '#ecac00',
    fontSize: 22
  }
});


export default Home;
