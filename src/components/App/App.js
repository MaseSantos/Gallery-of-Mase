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
          <div className="title-div">
            <h1 className="header-odd">Gallery of Mase</h1>
            <h1 className="header-even">Gallery of Mase</h1>
            <h1 className="header-odd">Gallery of Mase</h1>
          </div>
          <br />
            <GalleryList galleryArray={this.state.galleryArray}
            getGallery={this.getGallery}
            // addLikeFunction={this.addLike}
            />
        </div>
      </>
    );
  }
}

export default App;
