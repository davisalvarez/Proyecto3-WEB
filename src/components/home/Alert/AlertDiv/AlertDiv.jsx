import React from "react";
import "./AlertDiv.css"


import imgArrow from "./img/ico_arrow-down.svg"

const AlertDiv = ({alert, next, prev, current}) =>{
	return(
		<>
			<div className={`alert-container ${alert.id === current ? "showA" : ""}`}
			     style={{opacity: `${alert.id === current? "1": "0"}`}}>
				<div className={"info-alert"}>
					<div className={"circuloInterrogativo"}>!</div>
					<p> <strong>{alert.tittle}: </strong>{alert.content} </p>
					<a href={"#"}> {alert.link}</a>
				</div>
				<div className={"buttons-alert"}>
					<button className={"btnAlert"}
							onClick={()=> prev()}>
						<i className="yellow-arrow arrRight" style={{backgroundImage:`url("${imgArrow}")`, transform:"rotate(90deg)",
							right: "6px", top: "4px"}}/>
					</button>
					<button className={"btnAlert"}
					        onClick={()=> next()}>
						<i className="yellow-arrow" style={{backgroundImage:`url("${imgArrow}")`,
							transform:"rotate(-90deg)"}}/>
					</button>
				</div>
			</div>
		</>
	);
	
}
export default AlertDiv