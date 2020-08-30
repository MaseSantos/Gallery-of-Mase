import React, { Component } from "react";

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

  render() {
    return (
        <div className="gallery-item" onClick={this.toggleDescription}>
            {( this.state.description ?
            <img alt={this.props.thisPic.description} src={this.props.thisPic.path}></img> :
            <div className="description"><h4>{this.props.thisPic.description}</h4></div>)}
          <p className="likes-num">Likes: {this.props.thisPic.likes}</p>
        <button><b>LIKE</b></button>
        </div>
    );
  }
}

export default GalleryItem;
