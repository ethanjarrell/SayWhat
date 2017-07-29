import React, { Component } from 'react';
import './App.css';
import PlayListForm from './components/PlayListForm';
import PlayList from './components/PlayList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h3>play what?!</h3>
        </div>
        <div className="playlistcontainer">
          <div>
            <PlayListForm />
          </div>
          <div className="playlist">
            <PlayList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
