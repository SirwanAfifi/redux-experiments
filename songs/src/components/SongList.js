import React from "react";
import { connect, useSelector } from "react-redux";

class SongList extends React.Component {
    render() {
        return <div>SongList {this.props.songs.length}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    }
};

export default connect(mapStateToProps)(SongList);