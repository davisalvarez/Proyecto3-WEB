import React from 'react';
import "./MenuServicio.css"

import imgVIP from "./img/ico_servicios-vip.svg"
import imgComercial from "./img/ico_servicios-comercial.svg"
import imgComercio from "./img/ico-servicios-comercio.svg"
import imgTransporte from "./img/ico_servicios-transporte.svg"

const MenuServicio = () => {
	return (
		<>
			<div className={"containerSM"}>
				<div className={"service-menu"}>
					<div className={"itemMenu"}>
						<img src={imgVIP}/>
						<h3 >VIP</h3>
						<a>Charter</a>
						<a>Vuelos ejecutivos</a>
						<a>Servicios FBO</a>
					</div>
					<div className={"itemMenu"}>
						<img src={imgComercial}/>
						<h3>Comercial</h3>
						<a>Publicidad</a>
						<a>Filmación aérea</a>
					</div>
					<div className={"itemMenu"}>
						<img src={imgComercio}/>
						<h3>Comercio</h3>
						<a>Fumicación aérea</a>
						<a>Combate de incendios</a>
					</div>
					<div className={"itemMenu"}>
						<img src={imgTransporte}/>
						<h3>Transporte</h3>
						<a>Cargo</a>
						<a>Courier</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default MenuServicio;