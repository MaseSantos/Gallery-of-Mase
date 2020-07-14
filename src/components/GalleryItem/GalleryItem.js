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
        <>
        <div onClick={this.toggleDescription}>
            {( this.state.description ?
            <img alt={this.props.thisPic.description} src={this.props.thisPic.path}></img> :
            <div className="description"><h4>{this.props.thisPic.description}</h4></div>)}
        </div>
        <p><i>Likes: {this.props.thisPic.likes}</i></p>
        <button><b>LIKE</b></button>
        </>
    );
  }
}

export default GalleryItem;
