import React from "react";
import "./Servicios.css"
import ItemServicio from "./ItemServicio/ItemServicio.jsx";
import MenuServicio from "./MenuServicio/MenuServicio.jsx";

import imgChar from "./img/servicio-tag-charters_mob.jpg"
import imgFBOt from "./img/servicio-tag-fbo_mob.jpg"
import imgEjec from "./img/servicio-tag-ejecutivos_mob.jpg"
import icoArrow from "../Destinos/img/ico_arrow-down.svg";

const listServicios = [
	{
		id: 1,
		title: "Charters",
		info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus velit eget arcu pellentesque placerat. Fusce commodo metus id nunc ultricies, ac laoreet diam laoreet. Nulla commodo nisi venenatis, aliquet felis a, commodo leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis a ex at neque blandit vulputate. Vivamus sed dui in elit dictum porta. Duis id ex commodo, egestas nulla ac, mollis sapien.",
		src: imgChar
	},
	{
		id: 2,
		title: "Servicios FBO",
		info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus velit eget arcu pellentesque placerat. Fusce commodo metus id nunc ultricies, ac laoreet diam laoreet. Nulla commodo nisi venenatis, aliquet felis a, commodo leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis a ex at neque blandit vulputate. Vivamus sed dui in elit dictum porta. Duis id ex commodo, egestas nulla ac, mollis sapien.",
		src:imgFBOt
	},
	{
		id: 3,
		title: "Vuelos Ejecutivos",
		info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus velit eget arcu pellentesque placerat. Fusce commodo metus id nunc ultricies, ac laoreet diam laoreet. Nulla commodo nisi venenatis, aliquet felis a, commodo leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis a ex at neque blandit vulputate. Vivamus sed dui in elit dictum porta. Duis id ex commodo, egestas nulla ac, mollis sapien.",
		src:imgEjec
	}
]

const Servicios = ({}) => {
	
	const [scrollPos, setScrollPos] = React.useState(0);
	const divServicios = React.useRef()
	
	const moveScroll = (btn) =>{
		if (btn){
			setScrollPos(scrollPos + 1050)
			divServicios.current.scrollTo(scrollPos+ 1050,0)
		}else {
			setScrollPos(scrollPos - 1050)
			divServicios.current.scrollTo(scrollPos- 1050,0)
		}
	}
	
	return (
		<>
			<div className={"destinos-container"}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus velit eget arcu pellentesque placerat.
				</p>
			</div>
			<div className={"destinos-container"}>
				<div className={"scroll-destinos hideS"} ref={divServicios}>
					{listServicios.map(sevicio=> <ItemServicio key={sevicio.id} servicio={sevicio}/>)}
					<MenuServicio />
				</div>
				<div className="divDActions">
					<button id="btnDNext" className="btnDestinosCtrl"
					        onClick={()=>moveScroll(false)}
					        style={{borderColor:`${scrollPos<=1000?"black":"#152049"}`, opacity:`${scrollPos<=1000?"0.5":"1"}`}}
					        disabled={scrollPos<=1000}>
						<i className="blue-arrow" style={{backgroundImage:`url("${icoArrow}")`}}/>
					</button>
					<br/>
					<button id="btnDNext" className="btnDestinosCtrl"
					        onClick={()=>moveScroll(true)}
					        style={{borderColor:`${scrollPos<=1050*(listServicios.length-1)?"#152049":"black"}`, opacity:`${scrollPos<=1050*(listServicios.length-1)?"1":"0.5"}`}}
					        disabled={!(scrollPos<=1050*(listServicios.length-1))}>
						<i className="blue-arrow" style={{backgroundImage:`url("${icoArrow}")`, transform:"rotate(-90deg)"}}/>
					</button>
				</div>
			</div>
		</>
	);
}
export default Servicios