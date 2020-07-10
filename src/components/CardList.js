import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
return (
	<div>
			{
			robots.map((user) => {
				return (
					<Card 
						key={user.id} 
						id={user.id}
						name={user.name} 
						email={user.email}
						/>
					);
				})
			}
    </div>
	);
}

export default CardList

	/* OTRA FORMA DE HACERLO
	const cardComponent2 = consoles.map( (user) => {
		return <Card id={user.id} name={user.name} company={user.company}/>
	});*/

//SE INTRODUJO LA FUNCIÓN DIRECTAMENTE AL RETURN
/*
	const cardArray = consoles.map( (user,i) => {
		return (
			<Card 
		key={consoles[i].id} 
		id={consoles[i].id} 
		name={consoles[i].name} 
		company={consoles[i].company}/>
		);
	});*/