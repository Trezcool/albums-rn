import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Album from "./Album";

export default class AlbumList extends Component {
  state = {
    loading: true,
    error: false,
    albums: [],
  };

  async componentWillMount() {
    try {
      const resp = await fetch('http://rallycoding.herokuapp.com/api/music_albums');
      const albums = await resp.json();
      this.setState({loading: false, albums});
    } catch (e) {
      this.setState({loading: false, error: true})
    }
  }

  renderAlbum = ({title, artist, url, image, thumbnail_image}) => {
    return (
      <Album
        key={title}
        title={title}
        artist={artist}
        url={url}
        image={image}
        thumbnail_image={thumbnail_image}
      />
    );
  };

  render() {
    const {albums, loading, error} = this.state;
    return (
      <ScrollView>
        {albums.map(this.renderAlbum)}
      </ScrollView>
    );
  }
}
