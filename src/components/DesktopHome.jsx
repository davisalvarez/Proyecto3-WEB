import React from 'react';
import Header from './home/header/Header.jsx'
import Footer from "./home/Footer/Footer.jsx";
import Carrusel from "./home/Carrusel/Carrusel.jsx";
import Destinos from "./home/Destinos/Destinos.jsx";
import TitleTAG from "./home/TitleTAG/TitleTAG.jsx";
import Servicios from "./home/Servicios/Servicios.jsx";
import Alert from "./home/Alert/Alert.jsx";
import Complements from "./home/Complements/Complements.jsx";

const DesktopHome = () =>{

    return (
        <>
            <Header/>
	        <Carrusel/>
	        <Alert/>
	        <TitleTAG title={"Destinos populares"}/>
	        <Destinos/>
	        <TitleTAG title={"Complementa tu viaje"}/>
	        <Complements/>
	        <TitleTAG title={"Servicios TAG"}/>
	        <Servicios/>
	        <Footer/>
        </>
    );
}
export default DesktopHome;