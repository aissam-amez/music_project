import React, { useState } from 'react'
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResult/SearchResult'
import Playlist from '../Playlist/Playlist'

function App() {

  const [searchResults, setSearchResults] = useState([])
  const [playlistName, setPlaylistName] = useState('My Playlist Name')
  const [palylistTracks, setPlaylistTracks] = useState([])

  const isExist = (song, id) =>{
    return song.id != id
  } 

  const addTrack = (track) =>{
    //add to playlist tracks
    const songExist = palylistTracks.every(song => isExist(song,track.id))
    if(songExist){
      palylistTracks.push(track)
      setPlaylistTracks(palylistTracks)
    }
  }

  const removeTrack = (track) =>{
    palylistTracks = palylistTracks.filer(savedTrack => savedTrack.id != track.id)
    setPlaylistTracks(palylistTracks)
  }

  const updateListName = (name) =>{
    setPlaylistName(name)
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist updateName={updateListName} onRemove={removeTrack} playlistName={playlistName} palylistTracks={palylistTracks} />
        </div>
      </div>
    </div>
  );
}

export default App;
