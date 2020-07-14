import React, { Component } from "react";
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {

    componentDidMount() {
        console.log("Props used:", this.props);
    }

    render() {
        return (
        <div>
            {this.props.galleryArray.map((item, index) => 
            <GalleryItem thisPic={ item } key={ index }/>)}
        </div>
        );
    }
}

export default GalleryList;
