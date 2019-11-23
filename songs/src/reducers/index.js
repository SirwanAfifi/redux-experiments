import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: "No Scrubs", duration: "4:04"},
        { title: "Macarena", duration: "2:30"},
        { title: "All Stars", duration: "3:15"},
        { title: "I Want it That Way", duration: "1:45"},
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    switch(action.type) {
        case "SONG_SELECTED":
            return action.payload;
        default:
            return selectedSong;
    }
};

export default combineReducers({
    songs: songsReducer, 
    selectedSong: selectedSongReducer
});