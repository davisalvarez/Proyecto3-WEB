import React from "react";

const estilachos = {
	width: "1190px",
	textAlign: "left",
	font: "normal normal 300 36px/20px TAG-Font",
	letterSpacing: "0px",
	color: "#152049",
	opacity: "1",
	marginBottom: "15px",
	marginTop: "90px"
}
const posTitle = {
	width: "100%",
	display: "flex",
	justifyContent: "center"
}

const TitleTAG = ({title}) => {
	return (
		<div style={posTitle}>
			<h1 style={estilachos}>{title}</h1>
			
		</div>
	);
}
export default TitleTAG