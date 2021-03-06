import React, { Component } from "react";
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {

    componentDidMount() {
        console.log("Props used:", this.props);
    }

    render() {
        return (
        <div className="gallery-list">
                    {this.props.galleryArray.map((item, index) =>
                        <GalleryItem
                            getGallery={this.props.getGallery}
                            thisPic={item} key={index} />)}
        </div>
        );
    }
}

export default GalleryList;
