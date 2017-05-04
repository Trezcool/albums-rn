import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from "./components/Header";
import AlbumList from "./components/AlbumList";

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Header title="Albums"/>
        <AlbumList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
