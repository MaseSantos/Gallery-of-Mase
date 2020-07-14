import React, { Component } from "react";

class GalleryItem extends Component {
  componentDidMount() {
    console.log("Props used:", this.props);
  }

  render() {
    return (     
        <div>
            <img src={this.props.thisPic.path}></img>
            <div class="description"><h4>{this.props.thisPic.description}</h4></div>
            <p><i>Likes: {this.props.thisPic.likes}</i></p>
            <button><b>LIKE</b></button>
      </div>
    );
  }
}

export default GalleryItem;
