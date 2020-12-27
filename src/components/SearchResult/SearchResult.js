import React from 'react'
import './SearchResult.css'
import TrackList from '../TrackList/TrackList'

const SearchResult = (props) =>{
	const {searchResults, onAdd} = props
	return(
		<div className="SearchResults">
			<h2>Results</h2>
			<TrackList list={searchResults} onAdd={onAdd} isRemoval='false' />
		</div>
	)
}

export default SearchResult;