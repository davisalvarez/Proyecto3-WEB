import React from 'react';
import "./DestinoCard.css"

const DestinoCard = ({destino}) => {
	return (
		<>
			<div className="destCont">
				<img className="imgDest" src={destino.src}/>
				<div className="divDItemDesc">
					<div className="divItemDescP">
						<p className="txtDPrice">{destino.price}</p>
						<p className="txtDCurrency"> {destino.currency} </p>
						<p className="txtDViajeDesc">{destino.type}</p>
					</div>
					<button>Reserva ahora</button>
				</div>
			</div>
		</>
	);
};

export default DestinoCard;