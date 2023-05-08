import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
//import Video from 'react-native-video';
import { Col, Row, Grid } from "react-native-easy-grid";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Settings() {
  
  return (
   <View>slt c ninho</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    width: windowWidth,
    height: windowHeight / 2,
    backgroundColor:"black",
  },
  grid: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: windowWidth / 4,
    height: windowWidth / 4,
    margin: 10,
  },
});
