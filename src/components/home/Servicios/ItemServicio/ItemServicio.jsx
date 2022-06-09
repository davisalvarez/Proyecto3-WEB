import React from "react";
import "./ItemServicio.css"

const ItemServicio = ({servicio}) => {
	return (
		<>
			<div className="service-container">
				<img src={servicio.src}  className={"imgServicio"}/>
				<div className="contentServicio">
					<h3 className="">{servicio.title}</h3>
					<p className="">
						{servicio.info}
					</p>
				</div>
			</div>
		
		</>
	);
}
export default ItemServicio