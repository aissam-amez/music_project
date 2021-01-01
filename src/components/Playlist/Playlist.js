import React from 'react'
import './Playlist.css'
import TrackList from '../TrackList/TrackList'

const Playlist = (props) => {
	const {onSave, palylistTracks, onRemove, updateName, playlistName} = props

	const changeName = (e) =>{
		updateName(e.target.value)
	}

	return (
		<div className="Playlist">
			<input type="text" value={playlistName} onChange={changeName} />
			<TrackList list={palylistTracks} onRemove={onRemove} isRemoval='true' />
			<button className="Playlist-save" onClick={onSave} >SAVE TO SPOTIFY</button>
		</div>
	)
}

export default Playlist;