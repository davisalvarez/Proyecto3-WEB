import React from "react";
import "./Complements.css"
import ComplementCard from "./ComplementCard/ComplementCard.jsx";

import imgEqui from "./img/ico_complementa_equipaje-extra.svg"
import imgAssi from "./img/ico_complementa_asistencia.svg"
import imgSeat from "./img/ico_complementa_seat.svg"
import imgChec from "./img/ico_boarding-pass.svg"

const compleList = [
	{
		id: 1,
		src: imgEqui,
		tittle: "Equipaje Extra",
		content: "Ahorre hasta un 20 % al adquirir equipaje adicional hasta 3 horas antes de la salida, directamente a través de tag.com.mx",
		button: "Comprar"
	},
	{
		id: 2,
		src: imgAssi,
		tittle: "TAG Assist",
		content: "Protégete ante cancelaciones, demoras, emergencias médicas y más.",
		button: "Adquirir"
	},
	{
		id: 3,
		src: imgSeat,
		tittle: "Selección de asiento",
		content: "Si desea un espacio más amplio para las piernas, prefiere ventanilla o pasillo, o desea sentarse junto a familiares y amigos, puede escoger su asiento favorito.",
		button: "Seleccionar"
	},
	{
		id: 4,
		src: imgChec,
		tittle: "Check-in",
		content: "Mejore su experiencia y ahorre tiempo en el aeropuerto haciendo Check-in en tag.com.gt. Elija su asiento, imprima su pase de abordar.",
		button: "Seleccionar"
	}
]

const Complements = ({}) =>{
	const divComplements = React.useRef()
	
	React.useEffect(()=>{
		document.addEventListener('DOMContentLoaded', function () {
			const ele = divComplements.current;
			ele.style.cursor = 'grab';
			
			let pos = {top: 0, left: 0, x: 0, y: 0};
			
			const mouseDownHandler = function (e) {
				ele.style.cursor = 'grabbing';
				ele.style.userSelect = 'none';
				
				pos = {
					left: ele.scrollLeft,
					top: ele.scrollTop,
					// Get the current mouse position
					x: e.clientX,
					y: e.clientY,
				};
				
				document.addEventListener('mousemove', mouseMoveHandler);
				document.addEventListener('mouseup', mouseUpHandler);
			};
			
			const mouseMoveHandler = function (e) {
				// How far the mouse has been moved
				const dx = e.clientX - pos.x;
				const dy = e.clientY - pos.y;
				
				// Scroll the element
				ele.scrollTop = pos.top - dy;
				ele.scrollLeft = pos.left - dx;
			};
			
			const mouseUpHandler = function () {
				ele.style.cursor = 'grab';
				ele.style.removeProperty('user-select');
				
				document.removeEventListener('mousemove', mouseMoveHandler);
				document.removeEventListener('mouseup', mouseUpHandler);
			};
			
			// Attach the handler
			ele.addEventListener('mousedown', mouseDownHandler);
		});
	},[]);
	
	return(
		<>
			<div className={"complements-container"}>
				<div className={"displayComplements hideS"}
				     ref={divComplements}>
					{compleList.map((complement)=><ComplementCard complement={complement}  key={complement.id}/>)}
				</div>
			</div>
		</>
	);
	
}
export default Complements