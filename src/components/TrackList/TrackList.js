import React from 'react'
import './TrackList.css'
import Track from '../Track/Track'

const TrackList = (props) =>{
	const {list, onAdd, onRemove, isRemoval} = props

	return (
		<div className = "TrackList">
			{list.map(track => <Track key={track.id} onAdd={onAdd} onRemove={onRemove} track={track} isRemoval={isRemoval} />)
		}
		</div>
	)
}

export default TrackList;