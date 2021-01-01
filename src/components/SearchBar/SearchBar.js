import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = (props) =>{
	const {onSearch} = props
	const [searchTerm, setSearchTerm] = useState('')

	const handleSearch = (e) =>{
		setSearchTerm(e.target.value)
	}
	const search = () => {
		onSearch(searchTerm)
	}

	return (
		<div className="SearchBar">
			<input placeholder="Enter A Song, Album, or Artist" onChange={handleSearch} />
			<button className="SearchButton" onClick={search} >SEARCH</button>
		</div>
	)
}

export default SearchBar;