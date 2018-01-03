import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image} from 'react-native';

class About extends React.Component {
  render() {
      return (
        <View style={styles.main}>
          <View style={styles.contentContainer}>
            <Image style={styles.bioImage} source={{uri: "https://nolanclark.co/images/bio-picture.png"}} />
            <Text style={styles.content}>Im a 22 year old designer and developer from Omaha, Nebraska. My work is focused primarily on the design and full-stack development of mobile and web applications, but I also love learning about computer theory, AI and machine learning. I enjoy entrepreneurship, complex problem solving, and simplifying our world with technology. I am currently a student studying Computer Science with a minor in IT Innovation. Outside work and school, I enjoy traveling, exercise and working on my side projects.</Text>
          </View>
        </View>
      )
  };
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  bioImage: {
    marginVertical: 30,
    width: 150,
    height: 150,
    borderRadius: 75
  },
  headingContainer: {
    marginTop: 30,
  },
  header: {
    fontWeight: '700',
    fontSize: 35,
    textAlign: 'left',
    marginLeft: 20
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  content: {
    fontWeight: '400',
    fontSize: 15,
    textAlign: 'center'
  }
})

export default About;
