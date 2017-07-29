import React, { Component } from 'react';

class PlayListForm extends Component {
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {name: ''};
  }

  handleNameChange(event){
    this.setState({name: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    alert('Thank you,' + this.state.name + 'your name was submitted');
  }

  addToList = (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value,
                    songTitle: e.target.value,
                    songArtist: e.target.value,
                    songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '',
                  songNotes: '',
                  songArtist: '',
                  songTitle:''});
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <div className="inputcontainer">
            <label>User Name:</label><br />
            <input placeholder="name or user name" onChange={this.handleNameChange.userName} name="name" type="text" value={this.state.userName} ref="username" />
          </div>
          <div className="inputcontainer">
            <label>Artist/Band:</label><br />
            <input placeholder="artist or band name" onChange={this.handleNameChange.songArtist} name="name" type="text" value={this.state.songArtist} ref="artist" />
          </div>
          <div className="inputcontainer">
            <label>Song Title:</label><br />
            <input placeholder="song title" onChange={this.handleNameChange.songTitle} name="name" type="text" value={this.state.songTitle} ref="songtitle" />
          </div>
          <div className="inputcontainer">
            <label>Notes about Song:</label><br />
            <textarea className="input" onChange={this.handleNameChange.songNotes} name="name" type="textarea" value={this.state.songNotes} ref="notes" />
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default PlayListForm;
