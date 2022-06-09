import React from 'react';
import "./ButtonCarrusel.css"

const ButtonCarrusel = ({id, changeSlide, slide}) => {
	
	
	
	return (
		<>
			<button className={`btnCarrusel ${slide.id===id? "btnCAcc": ""}`}
					onClick={(e)=>changeSlide(e, id)}>
				{id}
			</button>
		</>
	);
};

export default ButtonCarrusel;