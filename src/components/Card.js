//import React, { Component } from 'react'
import React from 'react'

// Functional Components hasta hace poco no se podía tener state, por lo demás era igual al Class Component.
const Card = ({ name, email, id }) => {
	return(
		<div className ='bg-light-green dib br3 pa3 ma2 grow tc'>
		 <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}
export default Card



/*
class Card extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div>
			<h1> Nombre Consola </h1>
			<h1> Compañía </h1>
			</div>
		)
	}
}*/