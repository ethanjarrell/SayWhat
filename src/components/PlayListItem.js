import React, { Component } from 'react';

class PlayListItem extends Component {

  render() {
      let songInfo = this.props.songs.map(song => {
        return (
          <ul className="card1" key={song._id}>
            <li className="listcard1">
              User Name: {song.userName}
            </li>
            <li className="listcard2">
              Artist/Band: {song.songArtist}
            </li>
            <li className="listcard3">
              Song Title: {song.songTitle}
            </li>
            <li className="listcard4">
              Song Notes: {song.songNotes}
            </li>
          </ul>
        );
      });
      return (
        <div className="card">
          {songInfo}
        </div>
      );
    }
  }


  export default PlayListItem;
