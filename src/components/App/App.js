import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import GalleryList from "../GalleryList/GalleryList.js";

class App extends Component {
  state = {
    galleryArray: [],
  };
 
  componentDidMount() {
    console.log("Page loaded");
    this.getGallery();
  }

  getGallery = () => {
    console.log("Firing off GET Gallery");
    axios({
      method: "GET",
      url: "/gallery",
    })
      .then((response) => {
        console.log("GET response", response.data);
        this.setState({
          galleryArray: response.data,
        });
      })
      .catch((error) => {
        console.log("GET error", error);
      });
  };

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <h1>About Mase</h1>
          </header>
          <br/>
          <GalleryList galleryArray={this.state.galleryArray} />
        </div>
      </>
    );
  }
}

export default App;
