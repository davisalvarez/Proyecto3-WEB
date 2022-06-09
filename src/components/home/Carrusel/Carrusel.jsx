import React from 'react';
import "./Carrusel.css";

import imgMID from "./img/carrusel-merida.jpg"
import imgCUN from "./img/cancun.jpg"
import ButtonCarrusel from "./ButtonCarrusel/ButtonCarrusel.jsx";

const imgList = [
	{
		id: 1,
		src: imgCUN
	},
	{
		id: 2,
		src: imgMID
	},
	{
		id: 3,
		src: imgCUN
	},
	{
		id: 4,
		src: imgMID
	}
]

const Carrusel = () => {
	const [slide, setSlide] = React.useState({id: 1, src:imgCUN});
	
	React.useEffect(() => {
		const interval = setInterval(() => {
			setSlide( (slide) => {
				let tempID = (slide.id % imgList.length) +1
				let tempSRC
				imgList.forEach(foto =>{
					if (foto.id === tempID)
						tempSRC = foto.src
				})
				slide = {id: tempID, src: tempSRC }
				return slide
			});
		}, 8000);
		return () => clearInterval(interval);
	}, []);
	
	const changeSlide = (e, id)=>{
		e.stopPropagation();
		let temp;
		
		imgList.forEach(x =>{
			if (x.id === id){
				temp = {id: x.id, src: x.src}
			}
		})
		setSlide(temp)
	}
	
	return (
		<>
			<div className={"carruselContainer"}>
				<div style={{backgroundImage: `url("${slide.src}")`}} className={"itemCarrusel"}/>
				<div className={"carruselControls"}>
					{imgList.map(boton => <ButtonCarrusel img={boton.src} changeSlide={changeSlide} id={boton.id} slide={slide} key={boton.id}/>)}
				</div>
			</div>
		</>
	);
};

export default Carrusel;