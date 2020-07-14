import React, { Component } from "react";

class GalleryList extends Component {

  componentDidMount() {
    console.log("Props used:", this.props);
  }

  render() {
    return (
      <div>
        {this.props.galleryArray.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.path}></img>
              <div class="description">
                <h4>{item.description}</h4>
              </div>
              <p>
                <i>Likes: {item.likes}</i>
              </p>
              <button>
                <b>LIKE</b>
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default GalleryList;
