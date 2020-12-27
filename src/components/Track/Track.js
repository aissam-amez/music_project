import React from 'react'
import './Track.css'

const Track = (props) => {

	const {track, onAdd, isRemoval, onRemove} = props

	const renderAction = (isRemoval)=>{
		const display = isRemoval ? '-' : '+'
		return display
	}
	const addTrack =() =>{
		onAdd(track)
	}
	const removeTrack = () =>{
		onRemove(track)
	}

	return (
		<div className="Track">
			<div className="Track-information">
				<h3>{track.name}</h3>
				<p> {track.artist} \| {track.album} </p>
			</div>
			<button class="Track-action" onClick={isRemoval ? removeTrack : addTrack} >{renderAction()}</button>
		</div>
	)
}

export default Track;