import React from "react";
import "./Alert.css"
import AlertDiv from "./AlertDiv/AlertDiv.jsx";

const alertList = [
	{
		id: 0,
		tittle: "Aviso",
		content: "Conoce las regulaciones de COVID-19 y requisitos para tu viaje",
		link: "Leer más"
	},
	{
		id: 1,
		tittle: "Aviso",
		content: "Nuevas Pasajeros guatemaltecos, extranjeros, residentes, diplomáticos y acreditados",
		link: "Leer más"
	},
	{
		id: 2,
		tittle: "Aviso",
		content: "Nuevas Rutas",
		link: "Leer más"
	}
]

const Alert = ({}) =>{
	const [alert, setAlert] = React.useState(0);
	
	React.useEffect(()=>{
		const interval = setInterval(() => {
			setAlert( (alert) => {
				return (alert === alertList.length-1? 0: alert + 1)
			});
		}, 8000);
		return () => clearInterval(interval);
	},[]);

	const nextSlide = () => {
		setAlert(alert === alertList.length-1? 0: alert + 1)
	}
	
	const prevSlide = () => {
		setAlert(alert === 0? alertList.length-1: alert - 1)
	}
	
	return(
		<>
			<div className={"alert-wraper"}>
				{alertList.map((alerta)=>{
					return(
						<React.Fragment key={alerta.id}>
							{alerta.id === alert && <AlertDiv alert={alerta} next={nextSlide} prev={prevSlide} current={alert}/>}
						</React.Fragment>
					);
				})}
			</div>
		</>
	);

}
export default Alert