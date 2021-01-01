import React, { useState } from 'react'
import Spotify from '../../util/Spotify'
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResult/SearchResult'
import Playlist from '../Playlist/Playlist'

function App() {

  const [searchResults, setSearchResults] = useState(Spotify)
  const [playlistName, setPlaylistName] = useState('My Playlist Name')
  const [palylistTracks, setPlaylistTracks] = useState([{
    id:0,
    artist:'mjared',
    name:'ghazali',
    album:'nachat'
  },
  {
    id:1,
    artist:'mjared',
    name:'m3alem',
    album:'nachat'
  }])

  const isExist = (song, id) =>{
    console.log("song",song,'id',id)
    return song.id != id
  } 

  const addTrack = (track) =>{
    let songNotExist = palylistTracks.every(song => isExist(song,track.id))
    console.log(songNotExist,track)
    console.log(palylistTracks)
    if(songNotExist){
      const listToAdd = palylistTracks
      listToAdd.push(track)
      console.log(listToAdd)
      setPlaylistTracks(listToAdd)
    }
  }

  const savePlaylist = () =>{
    const trackUris = palylistTracks.map(track => track.uri)
    // save trackUris and playlist name
  }

  const removeTrack = (track) =>{
    const tracksToRemove = palylistTracks.filter(savedTrack => savedTrack.id != track.id)
    setPlaylistTracks(tracksToRemove)
  }

  const updateListName = (name) =>{
    setPlaylistName(name)
  }

  const search = (term) => {
    let filterSearch = []
    Spotify.map(track =>{
      if(term != ''){
        if(track.name == term || track.album == term || track.artist == term){
          filterSearch.push(track)
        }
      }else{
        filterSearch = Spotify
      }
    })
    console.log()
    setSearchResults(filterSearch)
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist onSave={savePlaylist} updateName={updateListName} onRemove={removeTrack} playlistName={playlistName} palylistTracks={palylistTracks} />
        </div>
      </div>
    </div>
  );
}

export default App;
