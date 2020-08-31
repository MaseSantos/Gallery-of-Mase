import React, { Component } from "react";
import axios from "axios";

class GalleryItem extends Component {
  componentDidMount() {
    console.log("Props used:", this.props);
  }

  state = {
    description: true,
  };

  toggleDescription = () => {
    this.setState({
      description: !this.state.description,
    });
  };

  handleClick = () => {
    console.log("Firing off PUT Gallery");
    let id = this.props.thisPic.id;
    axios({
      method: "PUT",
      url: "/gallery/like/" + id
    })
      .then((response) => {
        this.props.getGallery();
        console.log('PUT done, response:', response)
      })
      .catch((error) => {
        console.log("PUT error", error);
      });
  };


  render() {
    return (
        <div className="gallery-item" onClick={this.toggleDescription}>
            {( this.state.description ?
            <img alt={this.props.thisPic.description} src={this.props.thisPic.path}></img> :
            <>
            <div className="card">
              <div className="details">
                <h4 className="description"><i>{this.props.thisPic.description}</i></h4>
                <h4 className="likes-num">Likes: {this.props.thisPic.likes}</h4>
                <button onClick={this.handleClick}><b>LIKE</b></button>
              </div>
            </div>
            </>)}
        
        </div>
    );
  }
}

export default GalleryItem;
