import React from "react";
import "./CultureDiv.css"
const CultureDiv = ({culture, changeCulture}) => {
	return (
		<div className={"cultureDiv"} onClick={(event) => changeCulture(culture, event)}>
			<img src={culture.flag} />
			<p >
				{culture.county} -
				<span>{culture.idioma} </span>
				- {culture.currency}
			</p>
		</div>
	);
};
export default CultureDiv;