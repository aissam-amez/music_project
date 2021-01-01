import React from 'react'
import './Track.css'

const Track = (props) => {

	const {track, onAdd, isRemoval, onRemove} = props
	//console.log(isRemoval,track)
	const renderAction = (isRemoval)=>{
		const display = isRemoval==='true' ? '-' : '+'
		return display
	}
	const addTrack =() =>{
		onAdd(track)
	}
	const removeTrack = () =>{
		onRemove(track)
	}
	//console.log(isRemoval)

	return (
		<div className="Track">
			<div className="Track-information">
				<h3>{track.name}</h3>
				<p> {track.artist} | {track.album} </p>
			</div>
			<button className="Track-action" onClick={isRemoval==='true' ? removeTrack : addTrack } >{renderAction(isRemoval)}</button>
		</div>
	)
}

export default Track;