import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, ImageBackground } from 'react-native';

import SearchInput from './components/SearchInput'
//import sunny.jpg from './assets/'
//const image = {require('./assets/sunny.jpg')}

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      location: '',
    };
  }

  componentDidMount() {
    this.handleUpdateLocation('Cairo');
  }

  handleUpdateLocation = city => {
    this.setState({
      location: city,
    });
  }

  render() {
    const {location} = this.state;
  return (
    <View style={styles.container}>
      <ImageBackground
      source={require('./assets/sunny.png')}
      style={styles.imageContainer}
      imageStyle={styles.image}
      >
      <View style={styles.detailsContainer}>
      <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
      <Text style={[styles.smallText, styles.textStyle]}>Sunny</Text>
      <Text style={[styles.largeText, styles.textStyle]}>32°</Text>
        <SearchInput 
        placeholder="Search"
        onSubmit ={this.handleUpdateLocation}
        />
    </View>
    </ImageBackground>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    hight: null,
    resizeMode: 'cover',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily:  'Roboto',
    color: 'white',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  
});
