import React from 'react';
import './header.css';
import CultureSelector from "./CultureSelector/CultureSelector.jsx";

import logoTAG from "./img/ico_logo_tag.svg"
import imgReservacion from "./img/ico_menu-reservacion-reservacin.svg"
import imgComplementos from "./img/ico_menu-reservacion-complementos.svg"
import imgEquipaje from "./img/ico_menu-reservacion-equipaje.svg"
import imgPrepara from "./img/ico_menu-reservacion-prepara.svg"
import imgTAG from "./img/ico-menu-exp-tag.svg"
import imgPagos from "./img/ico-menu-exp-pago.svg"
import imgServicioC from "./img/ico-menu-exp-servicio.svg"
import imgVIP from "./img/ico_servicios-vip.svg"
import imgComercial from "./img/ico_servicios-comercial.svg"
import imgComercio from "./img/ico-servicios-comercio.svg"
import imgTransporte from "./img/ico_servicios-transporte.svg"

import imgPromociones from "./img/ico-menu-promo-promo.svg"
import imgNews from "./img/ico-menu-promo-nesletter.svg"


const Header = () => {
    return (
        <>
            <nav className="navbarTAG">
                <img src={logoTAG} alt="TAG Logo" className="imgHLogoTAG"/>
                {/*________________________________________ Menu Desk ________________________________________*/}
                <div className={"divt"}>
	                <div className="menuItem1">
		                <div className="divItemMenu">
			                <div className="flechaM1"></div>
			                <span className="txtNavItem">Tu vuelo</span>
		                </div>
		                <div className="itemMenu1">
			                <div className="bacMenuNavbar">
				                <div className="menuContenedor4G">
					                <div className="menuHcontenido">
						                <img src={imgReservacion} height="35px"/>
						                <p className="txtTittleMenu">Tu Reservación</p>
						                <a className="txtTittleMenuI" href="#">Consulta tu reservación</a>
						                <a className="txtTittleMenuIOff" href="#">Cambios de nombre</a>
						                <a className="txtTittleMenuIOff" href="#">Cambios de fecha</a>
						                <a className="txtTittleMenuI" href="#">Requisitos para viajar</a>
						                <a className="txtTittleMenuI" href="#">Check-in</a>
					                </div>
					                <div className="menuHcontenido">
						                <img src={imgComplementos} height="35px" />
						                <p className="txtTittleMenu">Complementos</p>
						                <a className="txtTittleMenuI" href="#">Equipaje extra</a>
						                <a className="txtTittleMenuI" href="#">TAG Assist</a>
						                <a className="txtTittleMenuIOff" href="#">Renta de auto</a>
						                <a className="txtTittleMenuIOff" href="#">Hotel</a>
					                </div>
					                <div className="menuHcontenido">
						                <img src={imgEquipaje} height="35px"/>
						                <p className="txtTittleMenu">Equipaje</p>
						                <a className="txtTittleMenuI" href="#">Equipaje de mano</a>
						                <a className="txtTittleMenuI" href="#">Equipaje documentado</a>
						                <a className="txtTittleMenuI" href="#">Equipaje deportivo</a>
						                <a className="txtTittleMenuI" href="#">Artículos restringidos</a>
					                </div>
					                <div className="menuHcontenido">
						                <img src={imgPrepara} height="35px"/>
						                <p className="txtTittleMenu">Prepara tu viaje</p>
						
						                <a className="txtTittleMenuI" href="#">Mujeres Embarazadas</a>
						                <a className="txtTittleMenuI" href="#">Menores sin acompañar</a>
						                <a className="txtTittleMenuI" href="#">Pasajeros no ademitidos</a>
						                <a className="txtTittleMenuI" href="#">Alertas de viaje globales</a>
					                </div>
				                </div>
			                </div>
		                </div>
	                </div>
	                <div className="menuItem2">
		                <div className="divItemMenu">
			                <div className="flechaM2"></div>
			                <span className="txtNavItem">Experiencia TAG</span>
		                </div>
		                <div className="itemMenu2">
			                <div className="bacMenuNavbar">
				                <div className="menuContenedor4G">
					                <div className="menuHcontenido">
						                <img src={imgTAG}/>
						                <p className="txtTittleMenu">TAG Airlines</p>
						                <a className="txtTittleMenuI" href="#">Nuestras tarifas</a>
						                <a className="txtTittleMenuI" href="#">Nosotros</a>
						                <a className="txtTittleMenuI" href="#">Condiciones generales</a>
						                <a className="txtTittleMenuI" href="#">COVID-19</a>
					                </div>
					                <div className="menuHcontenido">
						                <img src={imgPagos}/>
						                <p className="txtTittleMenu">Pago y facturación</p>
						                <a className="txtTittleMenuI" href="#">Formas de Pago</a>
						                <a className="txtTittleMenuI" href="#">Facturación</a>
					                </div>
					                <div className="menuHcontenido">
						                <img src={imgServicioC}/>
						                <p className="txtTittleMenu">Facturación</p>
						                <a className="txtTittleMenuI" href="#">Recomendaciones</a>
						                <a className="txtTittleMenuI" href="#">Reporte SMS</a>
						                <a className="txtTittleMenuI" href="#">Oficinas</a>
						                <a className="txtTittleMenuI" href="#">Preguntas frecuentes</a>
						                <a className="txtTittleMenuI" href="#">Chatea</a>
					                </div>
				                </div>
			                </div>
		                </div>
	                </div>
	                <div className="menuItem3">
		                <div className="divItemMenu">
			                <div className="flechaM3"></div>
			                <span className="txtNavItem">Destinos</span>
		                </div>
		                <div className="itemMenu3">
			                <div className="bacMenuNavbar">
				                <div className="menuContenedor4G">
					                <div className="menuHcontenido">
						                <p className="txtTittleMenu">Guatemala</p>
						                <a className="txtTittleMenuI" href="#">Charter</a>
						                <a className="txtTittleMenuI" href="#">Vuelos ejecutivos</a>
						                <a className="txtTittleMenuI" href="#">Servicios FBO</a>
					                </div>
					                <div className="menuHcontenido">
						                <p className="txtTittleMenu">Honduras</p>
						                <a className="txtTittleMenuI" href="#">Publicidad</a>
						                <a className="txtTittleMenuI" href="#">Filmación aérea</a>
					                </div>
					                <div className="menuHcontenido">
						                <p className="txtTittleMenu">México</p>
						                <a className="txtTittleMenuI" href="#">Fumigación aérea</a>
						                <a className="txtTittleMenuI" href="#">Combate de incendios</a>
					                </div>
					                <div className="menuHcontenido">
						                <p className="txtTittleMenu">El Salvador</p>
						                <a className="txtTittleMenuI" href="#">Cargo</a>
						                <a className="txtTittleMenuI" href="#">Courierr</a>
					                </div>
				                </div>
			                </div>
		                </div>
	                </div>
	                <div className="menuItem4">
		                <div className="divItemMenu">
			                <div className="flechaM4"></div>
			                <span className="txtNavItem">Servicios</span>
		                </div>
		                <div className="itemMenu4">
			                <div className="bacMenuNavbar">
				                <div className="menuContenedor4G">
					                <div className="menuHcontenido">
						                <img src={imgVIP}/>
						                <p className="txtTittleMenu">VIP</p>
						                <a className="txtTittleMenuI" href="#">Charter</a>
						                <a className="txtTittleMenuI" href="#">Vuelos ejecutivos</a>
						                <a className="txtTittleMenuI" href="#">Servicios FBO</a>
					                </div>
					                <div className="menuHcontenido">
						                <img src={imgComercial}/>
						                <p className="txtTittleMenu">Comercial</p>
						                <a className="txtTittleMenuI" href="#">Publicidad</a>
						                <a className="txtTittleMenuI" href="#">Filmación aérea</a>
					                </div>
					                <div className="menuHcontenido">
						                <img src={imgComercio}/>
						                <p className="txtTittleMenu">Comercio</p>
						                <a className="txtTittleMenuI" href="#">Fumigación aérea</a>
						                <a className="txtTittleMenuI" href="#">Combate de incendios</a>
					                </div>
					                <div className="menuHcontenido">
						                <img src={imgTransporte}/>
						                <p className="txtTittleMenu">Trasportar</p>
						                <a className="txtTittleMenuI" href="#">Cargo</a>
						                <a className="txtTittleMenuI" href="#">Courierr</a>
					                </div>
				                </div>
			                </div>
		                </div>
	                </div>
	                <div className="menuItem5">
		                <div className="divItemMenu">
			                <div className="flechaM5"></div>
			                <span className="txtNavItem">Promociones</span>
		                </div>
		                <div className="itemMenu5">
			                <div className="bacMenuNavbar">
				                <div className="menuContenedor4G">
					                <div className="menuHcontenido">
						                <img src={imgPromociones}/>
						                <p className="txtTittleMenu">Promociones</p>
						                <a className="txtTittleMenuI" href="#">Promociones vigentes</a>
					                </div>
					                <div className="menuHcontenido">
						                <img src={imgNews}/>
						                <p className="txtTittleMenu">Newsletter</p>
						                <a className="txtTittleMenuI" href="#">Suscribirse</a>
					                </div>
				                </div>
			                </div>
		                </div>
	                </div>
	
	                <div className="navbar-divider" />
	                
	                <CultureSelector />
	
		            <button className="btnSignIn">
			            Iniciar Sesión
		            </button>
                </div>
            </nav>
	        
        </>
    );
};

export default Header;