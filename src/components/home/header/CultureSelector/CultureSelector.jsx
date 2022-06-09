import React from 'react';
import "./CultureSelector.css"
import CultureDiv from "./../CultureDiv/CultureDiv.jsx";

import flagGT from "./flags/gt.svg";
import flagMX from "./flags/mx.svg";
import flagSV from "./flags/sv.svg";
import flagHN from "./flags/hn.svg";
import flagBZ from "./flags/bz.svg";
import flagWR from "./flags/ico_flag-en.svg";
import arrow from "./flags/ico_arrow-down.svg";

const cultureList = [
	{
		id: "GT-ES",
		county: "Guatemala",
		flag: flagGT,
		idioma: "Español",
		currency: "USD"
	},
	{
		id: "HN-ES",
		county: "Honduras",
		flag: flagHN,
		idioma: "Español",
		currency: "USD"
	},
	{
		id: "SV-ES",
		county: "El Salvador",
		flag: flagSV,
		idioma: "Español",
		currency: "USD"
	},
	{
		id: "BZ-ES",
		county: "Belice",
		flag: flagBZ,
		idioma: "Español",
		currency: "USD"
	},
	{
		id: "MX-ES",
		county: "MX",
		flag: flagMX,
		idioma: "Español",
		currency: "MXN"
	},
	{
		id: "US-EN",
		county: "Otro",
		flag: flagWR,
		idioma: "Inglés",
		currency: "USD"
	}
]
const CultureSelector = () => {
	
	const [showCulture, setShowCulture] = React.useState(false);
	const [accCulture, setAccCulture] = React.useState({
		id: "GT-ES",
		county: "Guatemala",
		flag: flagGT,
		idioma: "Español",
		currency: "USD"
	});
	
	const changeCulture = (culture, e) => {
		e.preventDefault()
		e.stopPropagation()
		setAccCulture(culture)
		setShowCulture(false)
	}
	
	const showDiv = (e)=>{
		e.preventDefault()
		e.stopPropagation()
		setShowCulture(!showCulture)
	}
	
	return (
		<>
			<div className={"divCulture"} onClick={(event)=>showDiv(event)}>
				<div className={"accCulture"}>
					<img src={accCulture.flag}/>
					<p>{accCulture.id}</p>
					<img className={"arrowCulture"} src={arrow}
					     style={{transform: `${showCulture ? "rotate(180deg)":"rotate(0deg)"}`}}/>
				</div>
				<div className={"cultureContainer"} id="cultureDiv" style={{display: `${showCulture ? "block":"none"}`}}>
					<p>Pais /  <span>Idioma</span></p>
					{cultureList.map(culture => <CultureDiv key={culture.id} culture={culture} changeCulture={changeCulture}/>) }
				</div>
			</div>
		</>
	);
};
export default CultureSelector;