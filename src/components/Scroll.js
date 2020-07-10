import React from 'react'

// Cuando es un componente que encierra a elementos, por default en sus props tiene a children, que son los elementos encerrados
const Scroll = (props) => {
	return(
	<div style={{overflowY: 'scroll', border:'1px solid black', height:'500px' }}>
	{props.children}
	</div>
	)
}
export default Scroll;