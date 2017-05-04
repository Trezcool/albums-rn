import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, Linking } from 'react-native';

import Card from "./Card";
import CardItem from "./CardItem";
import MyButton from "./MyButton";

export default class Album extends Component {

  render() {
    const {title, artist, url, image, thumbnail_image} = this.props;
    return (
      <Card>
        <CardItem>
          <View style={styles.thumbnailContainer}>
            <Image
              style={styles.thumbnail}
              source={{uri: thumbnail_image}}
            />
          </View>
          <View style={styles.headerDetails}>
            <Text style={styles.headerTittle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardItem>

        <CardItem>
          <Image
            style={styles.artWork}
            source={{uri: image}}
          />
        </CardItem>

        <CardItem>
          <MyButton
            title="Buy Now"
            onPress={() => Linking.openURL(url)}
          />
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  thumbnail: {
    height: 50,
    width: 50,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  headerDetails: {
    justifyContent: 'space-around',
  },
  headerTittle: {
    fontSize: 18,
  },
  artWork: {
    height: 340,
    flex: 1,
  }
});
