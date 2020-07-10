import React from 'react'

const SearchBox = ({ searchChange }) => {
	return (
		<div>
		<input 
		type='search' 
		placeholder='Insert your console'
		onChange = {searchChange}
		 />
		}
		</div>
	);
}

export default SearchBox