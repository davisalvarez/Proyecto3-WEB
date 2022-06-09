import React from "react";
import "./ComplementCard.css"


const ComplementCard = ({complement}) =>{
	return(
		<>
			<div className="divCItem">
				<img className="imgCIcon" src={complement.src}/>
					<p className="card-title txtCCardTitle">{complement.tittle}</p>
					<p className="txtCCardInfo">{complement.content}</p>
					<button className="btnCComprar">{complement.button}</button>
			</div>
		</>
	);
	
}
export default ComplementCard