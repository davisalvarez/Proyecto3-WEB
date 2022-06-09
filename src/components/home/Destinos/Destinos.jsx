import React from 'react';
import "./Destinos.css"
import DestinoCard from "./DestinoCard/DestinoCard.jsx";

import icoArrow from "./img/ico_arrow-down.svg"
import imgHole from "./img/blue-hole_belice.jpg"
import imgBeli from "./img/faro_belice.jpg"
import imgRoat from "./img/isla-roatan_honduras.jpg"
import imgSunz from "./img/playa-sunzal_el-salvador.jpg"
import imgMund from "./img/salvador-del-mundo_el-salvador.jpg"
import imgSnor from "./img/snorkel-roatan_honduras.jpg"

const listDestinos = [
	{
		id: 1,
		src: imgHole,
		price: 159,
		type: "Viaje sencillo",
		currency: "UDS"
	},
	{
		id: 2,
		src: imgBeli,
		price: 789 ,
		type: "Viaje sencillo",
		currency: "UDS"
	},
	{
		id: 3,
		src: imgRoat,
		price: 632,
		type: "Viaje sencillo",
		currency: "UDS"
	},
	{
		id: 4,
		src: imgSunz,
		price: 624,
		type: "Viaje sencillo",
		currency: "UDS"
	},
	{
		id: 5,
		src: imgMund,
		price: 425,
		type: "Viaje sencillo",
		currency: "UDS"
	},
	{
		id: 6,
		src: imgSnor,
		price: 267,
		type: "Viaje sencillo",
		currency: "UDS"
	}
]

const Destinos = () => {
	const [scrollPos, setScrollPos] = React.useState(0);
	const divDestinos = React.useRef()
	
	const moveScroll = (btn) =>{
		if (btn){
			setScrollPos(scrollPos + 350)
			divDestinos.current.scrollTo(scrollPos+ 350,0)
		}else {
			setScrollPos(scrollPos - 350)
			divDestinos.current.scrollTo(scrollPos- 350,0)
		}
	}
	
	return (
		<div className={"destinos-container"}>
			<div className={"scroll-destinos hideS"} ref={divDestinos}>
				{listDestinos.map(destino=> <DestinoCard key={destino.id} destino={destino}/>)}
			</div>
			<div className="divDActions">
				<button id="btnDNext" className="btnDestinosCtrl"
				        onClick={()=>moveScroll(false)}
				        style={{borderColor:`${scrollPos<=340?"black":"#152049"}`, opacity:`${scrollPos<=340?"0.5":"1"}`}}
				        disabled={scrollPos<=340}>
					<i className="blue-arrow" style={{backgroundImage:`url("${icoArrow}")`}}/>
				</button>
				<br/>
				<button id="btnDNext" className="btnDestinosCtrl"
				        onClick={()=>moveScroll(true)}
				        style={{borderColor:`${scrollPos<=(listDestinos.length*350-350*4)?"#152049":"black"}`, opacity:`${scrollPos<=(listDestinos.length*350-350*4)?"1":"0.5"}`}}
				       disabled={!(scrollPos<=(listDestinos.length*350-350*4))}>
					<i className="blue-arrow" style={{backgroundImage:`url("${icoArrow}")`, transform:"rotate(-90deg)"}}/>
				</button>
			</div>
		</div>
	);
};

export default Destinos;