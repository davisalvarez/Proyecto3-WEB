import React from 'react';
import "./Footer.css"
import ModalTYC from "./../Modal/ModalTYC.jsx";

import imgFB from "./img/redes/icon_facebook.svg"
import imgTW from "./img/redes/icon_twitter.svg"
import imgIG from "./img/redes/icon_instagram.svg"
import imgWA from "./img/redes/icon_whatsapp.svg"
import imgTK from "./img/redes/icon_tiktok.svg"
import imgTail from "./img/ico_tail-logo.svg"

const Footer = () => {
	return (
		<>
			<footer className="footer-desk">
				<div className="footer-desk-menu">
					<img src={imgTail} alt="TAG Airlines" />
					<div className="colFooter">
						<p className="txtFTittle">Tag Airlines</p>
						<a href="#!">Nuestra Mision</a>
						<a href="#!">Noticias</a>
						<a href="#!">Servicio</a>
						<a href="#!">Sala de prensa</a>
					</div>
					<div className="colFooter">
						<p className="txtFTittle">Información pasajero</p>
						<a href="#!">COVID-19</a>
						<a href="#!">Nuestros destinos</a>
						<a href="#!">Prepara tu viaje</a>
						<a href="#!">Administra tu viaje </a>
						<a href="#!">Preguntas frecuentes </a>
						<a href="#!">Formas de pago</a>
					</div>
					<div className="colFooter">
						<p className="txtFTittle">Quejas y sugerencias</p>
						<a href="#!">Guatemala +502 2380 9400 </a>
						<a href="#!">Reporte de sucesos </a>
						<a href="#!">Reporte de TC </a>
						<a href="#!">Sugerencias / Quejas</a>
					</div>
					<div className="colFooter">
						<p className="txtFTittle">Contáctanos</p>
						<a href="#!">Guatemala +502 2380 9400 </a>
						<a href="#!">Mexico +52 55 95968465 </a>
						<a href="#!">El Salvador +503 7752 5604 </a>
						<a href="#!">España +34 902570114</a>
						<a href="#!">Estados Unidos +1 2015267620</a>
					</div>
				</div>
				<div className="social-media-footer">
					<img src={imgFB}/>
					<img src={imgTW}/>
					<img src={imgIG}/>
					<img src={imgWA}/>
					<img src={imgTK}/>
				</div>
				<div className="footerBar">
					<div className={"divFLeft"}>
						<ModalTYC text={"Terminos y condiciones"}
						          title={"Términos y Condiciones Generales de Venta"}
						          estilos={"txtFFooterRights txtFHover"}/>
						{/*<p className="txtFFooterRights"> &nbsp; | &nbsp;</p>
						<ModalTYC text={"Aviso de Privacidad"}
						          title={"Aviso de Privacidad"}
						          estilos={"txtFFooterRights txtFHover"}/>*/}
						<a href="#" className="txtFFooterRights txtFHover hid-e">Mapa del sitio &nbsp;</a>
						<a href="#" className="txtFFooterRights txtFHover hid-e">Accesibilidad web </a>
					</div>
					<div className={"divFRight"}>
						<p className="txtFFooterRights">
							© 2022, TAG Airlines - Todos los derechos reservados | DGT
						</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;