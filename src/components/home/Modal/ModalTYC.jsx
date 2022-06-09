import React from 'react';
import "./Modal.css"

import icoX from "./img/ico_modal-close.svg"




const ModalTyc = ({text, title, estilos}) => {
	const [show, setShow] = React.useState(false);
	
	const handleShow = (e, show)=>{
		e.stopPropagation();
		e.preventDefault();
		setShow(show);
	}
	
	return (
		
		<>
			<p onClick={(e)=>handleShow(e, true)} className={`${estilos}`}>
				{text}
			</p>
			{show && <Modal handleShow={handleShow} title={title} type={1}/>}
		</>
	);
};

const Modal = ({title, type, handleShow}) => {
	
	return (
		<div className={"modalBG"} onClick={(e)=>handleShow(e, false)}>
			<div className={"modalContainer modalTYC"}
			     onClick={(e)=>e.stopPropagation()}>
				<div className={"modalHeader"}>
					<button style={{backgroundImage: `url("${icoX}")`}}
					        className={"btnMClose"}
					        onClick={(e)=>handleShow(e, false)} />
					<p>{title}</p>
				</div>
				<div className={"modalBody"}>
					<div className={"TYCdiv"}>
						CONDICIONES Y POLITICAS: INTERNACIONAL: Si el vuelo del pasajero incluye
						como punto de destino o una parada en un país distinto al país de partida, la
						Convención para la Unificación de Ciertas Reglas relativas al Transporte Aéreo
						Internacional o la Convención de Varsovia y sus modificaciones, puede ser aplicable y
						ésta regula y a la vez limita la responsabilidad del transportista por muerte y/o daños y
						lesiones al pasajero y por la pérdida o avería de equipaje. Ver las Condiciones
						Generales de Contratación del transportista para información sobre las limitaciones de
						responsabilidad por muerte y/o daños y lesiones a pasajeros y por la pérdida o avería
						de equipaje. NACIONAL: Para contratos de transporte o vuelos dentro del territorio de
						la República de Guatemala la responsabilidad y las obligaciones del transportista están
						sujetas a las Condiciones Generales de Contratación del transportista, a la Ley de
						Aviación Civil y su Reglamento, y a las demás regulaciones de Aviación Civil que sean
						aplicables. Ver las Condiciones Generales de Contratación del transportista para
						información sobre las limitaciones de responsabilidad por muerte y/o daños y lesiones a
						pasajeros y por la pérdida o avería de equipaje. Las Condiciones Generales de
						Contratación del transportista son incorporadas por referencia y forman parte del
						presente contrato de transporte. TODOS LOS BOLETOS EMITIDOS O PAQUETES
						EMITIDOS NO SON REEMBOLSABLES BAJO NINGUNA CIRCUNSTANCA, EL
						CLIENTE RENUNCIA A SOLICITAR CUALQUIER TIPO REEMBOLSO POR LOS
						BOLETOS O PAQUETES ADQUIRIDOS SEA CUAL SEA EL METODO DE PAGO. EL
						CLIENTE RENUNCIA A SOLICITAR CUALQUIER TIPO DE CONTRA CARGO POR LA
						COMPRA DE BOLETOS AEREOS O PAQUETES REALIZADOS CON TARJETA DE
						CREDITO O DEBITO EN EL SITIO WEB DE TRASPORTES AEREOS
						GUATEMALTECOS SA ASI COMO EN EL LINK DE PAGO NO PRESENCIAL. EL
						CLEINTE ACEPTA QUE LAS TRANSACCIONES EN EL SITIO WEB NO SON
						PRESENCIALES POR LO QUE RENUNCIA A SOLCIITAR CONTRA CARGOS.
						CONDICIONES GENERALES DE CONTRATACIÓN DE TRANSPORTES AÉREOS
						GUATEMALTECOS, SOCIEDAD ANÓNIMA (- TAG-): 1. Para los efectos del presente
						contrato, boleto o ticket se refiere al presente boleto de avión y al talón de equipaje del
						cual estas condiciones y notificaciones son parte; transportista se refiere a todos los
						transportistas o empresarios de transporte que transportan o se comprometen a
						transportar al pasajero y a su equipaje bajo este contrato o a prestar cualquier otro
						servicio incidental a este contrato de transporte aéreo; y Convención de Varsovia, se
						refiere a la Convención para la Unificación de Ciertas Reglas Relativas al Transporte
						Aéreo Internacional firmada en Varsovia, Polonia el 12 de octubre del año 1929, o esa
						Convención como ha sido modificada por tratados posteriores, cualquiera que sea(n)
						aplicables. 2. El presente contrato de transporte aéreo está sujeto a las reglas y
						limitaciones de responsabilidad establecidas en la Convención de Varsovia y sus
						modificaciones, salvo que el transporte aéreo no sea un transporte internacional como
						lo es definido por dicha Convención. Los términos, reglas y limitaciones de
						responsabilidad incorporados incluyen, entre otros: a) Reglas, normas y límites en
						cuanto a la responsabilidad del transportista por lesiones personales o por muerte; b)
						Reglas, normas y límites de responsabilidad del transportista por daños en el equipaje;
						c) Normas y restricciones sobre las acciones procesales que puede ejercitar el pasajero
						en contra del transportista, así como plazos de caducidad de las acciones que el
						pasajero puede plantear en contra del mismo; d) Los derechos del transportista a
						cambiar los términos del contrato; e) Normas y reglas sobre la reconfirmación de
						reservas, sobre el registro o check in y sobre la facultad del transportista de denegar el
						transporte al pasajero; y sobre f) las limitaciones de responsabilidad del transportista
						por el retraso o demora en la llegada de los equipajes. 3. En el caso que el contrato no
						esté sujeto a las Reglas del Convenio de Varsovia, el presente
						contrato se sujeta a las presentes Condiciones Generales de Contratación, a la Ley de
						Aviación Civil de Guatemala y su Reglamento, y a las demás regulaciones de Aviación
						Civil que sean aplicables. 4. Hasta el punto que no contradigan las presentes
						Condiciones Generales de Contratación, el transporte y cualquier otro servicio que
						preste cualquier transportista está sujeto a: i) las estipulaciones del presente boleto o
						ticket; ii) las tarifas aplicables; iii) las Condiciones Generales de Contratación de los
						transportistas involucrados y estipulaciones y reglas relacionadas, las cuales son
						incorporadas por referencia al presente contrato; y iv) las leyes y reglamentaciones
						aplicables. 5. Cualquier limitación de responsabilidad aplicable a Transportes Aéreos
						Guatemaltecos, Sociedad Anónima o a cualquier transportista se aplicará igualmente a
						los empleados, dependientes, ejecutivos, representantes, mandatarios y/o agentes de
						éstos. 6. Ningún empleado, dependiente, ejecutivo, representante, mandatario y/o
						agentes de Transportes Aéreos Guatemaltecos, Sociedad Anónima, de cualquier
						transportista, o inclusive el propio pasajero, está facultado para modificar, alterar o
						renunciar a cualquiera de las disposiciones o estipulaciones del presente contrato. 7.
						Toda exclusión o limitación de responsabilidad que beneficie a Transportes Aéreos
						Guatemaltecos, Sociedad Anónima se entenderá que aplica y beneficia a los agentes,
						empleados, ejecutivos, representantes y a los dependientes de ésta. Asimismo, se
						aplicará las mismas exclusiones o limitaciones de responsabilidad a los arrendantes de
						aeronaves o a cualquier persona que por cualquier t ítulo o contrato Transportes Aéreos
						Guatemaltecos, Sociedad Anónima utiliza sus aviones o aeronaves para el transporte,
						así como a sus agentes, empleados, ejecutivos, representantes y a los dependientes
						de ésta. 8. El equipaje facturado será entregado al portador del recibo o talón de
						equipaje. 9. En caso de daño o avería al equipaje en el transporte internacional, el
						reclamo deberá hacerse por escrito al transportista inmediatamente después de
						descubrir el daño o avería y, como máximo, dentro de siete días de recepción del
						equipaje. En el caso de retraso de la llegada del equipaje en el transporte internacional,
						el reclamo deberá hacerse por escrito al transportista dentro de los veintiún (21) días
						de la fecha en que el equipaje fue entregado. 10. En el transporte nacional, en caso de
						avería o pérdida parcial, el destinatario debe dirigir al transportador su reclamo dentro
						del plazo de cinco (5) días, contados desde la fecha de entrega. Tratándose de pérdida
						o destrucción, el reclamo deberá ser hecho en los mismos plazos pero contados a
						partir de la fecha en que el transportador comunique al propietario del equipaje que se
						ha producido la pérdida, o en la fecha en que el equipaje debió ser puesto a disposición
						del destinatario o propietario del equipaje. En caso de retraso en la entrega, el reclamo
						deberá ser hecho en los mismos plazos, contados de la manera siguiente: a) Equipajes
						transportados en la misma aeronave que el pasajero, a partir de la fecha de arribo del
						pasajero al aeródromo de destino, y b) Equipajes no acompañados, a partir de la fecha
						en que el transportador informe al propietario o destinatario del arribo de los equipajes.
						11. Este ticket, salvo lo que disponga expresamente el mismo, es válido por un año a
						partir de la fecha de su emisión. El pago de la tarifa puede variar previamente al
						comienzo del transporte, y el transportista tendrá el derecho de rehusar o denegar el
						transporte al pasajero en caso que no se haya pagado la tarifa que sea aplicable. 12. El
						transportista por este medio se compromete a realizar sus mejores esfuerzos para
						transportar expeditamente al pasajero y su equipaje. El transportista no puede
						garantizar los horarios de vuelo mostrados en el aeropuerto o en cualquier otro lugar, y
						por lo tanto, no forman parte del presente contrato. El transportista se reserva el
						derecho de sustituir transportistas alternos o las aeronaves, y puede alterar u omitir
						paradas consignadas en el boleto en caso que fuere necesario. Los horarios está
						sujetos a
						cambios y pueden ser modificados sin previo aviso. El transportista no se hace
						responsable de efectuar conexiones. 13. El pasajero deberá cumplir con las
						regulaciones gubernamentales nacionales y extranjeras sobre, entre otras, documentos
						de viaje necesarios para la entrada y salida de un país a otro o dentro del territorio de
						un estado. 14. El pasajero deberá presentarse en las instalaciones del transportista una
						hora antes del vuelo programado. 15. El pasajero deberá presentar el boleto o ticket
						emitido por el transportista. 16. El transportista podrá cobrar al pasajero la suma de
						cien dólares de los Estados Unidos de América (US$ 100.00) si éste no utiliza el boleto
						en la fecha que éste indica como día de uso, es decir, para el día en que el pasajero
						será transportado por el transportista, y tendrá solo 48 hrs después de no haberse
						presentado al vuelo para solicitar una reprogramación por 100 usd, en caso de no
						hacerlo en ese periodo de tiempo el boleto estará perdido. 17. El transportista podrá
						cobrar al pasajero la suma de 15 dólares de los Estados Unidos de América (US$
						15.00) por segmento de vuelo por el cambio de fecha de utilización del boleto, si este
						cambio se realiza dentro de 48 hrs antes de la salida del vuelo. 18. El equipaje del
						pasajero deberá pesar, como máximo, veinte (20) libras. El transportista podrá un dólar
						de los Estados Unidos de América ($ 1.00) por cada libra de equipaje en exceso de las
						veinte libras que son permitidas como máximo peso del equipaje de cada pasajero. 19.
						La aeronave del transportista está asegurada de conformidad con las normas
						internacionales, nacionales y regulaciones de aviación civil pertinentes por una
						cantidad que cubre la totalidad de la responsabilidad del transportista bajo la normativa
						legal en caso de fallecimiento o lesión personal de los pasajeros y gastos médicos. 20.
						El transportista no asume responsabilidad por: a) por equipaje sobrecargado o que
						fuera llenado en exceso; b) equipaje que ya estuviera dañado previo a entregarse para
						transporte; c) daños menores al equipaje resultantes del uso y deterioro normal; d)
						pérdida o daño al equipaje i) que el pasajero lleva consigo en la cabina de pasajeros, ii)
						equipo fotográfico, computadoras o cualquier equipo eléctrico, joyería, dinero en
						efectivo, documentos, obras de arte u otro bien u objeto de valor. 21. El transportista no
						asume responsabilidad por la pérdida o daño de objetos o bienes frágiles o
						perecederos. 22. El transportista no permitirá a bordo o para el transporte bienes o
						materiales peligrosos, tales como explosivos, aires comprimidos, sólidos y líquidos
						inflamables, oxidantes, substancias infecciosas o tóxicas, corrosivas o radioactivas. 23.
						El pasajero renuncia a cualquier tipo de reclamación por daños punitivos o de cualquier
						clase en contra del transportista y acepta plenamente las limitaciones de
						responsabilidad de las cuales el transportista goza en virtud de la normativa
						internacional y nacional vigente. 24. El pasajero renuncia al fuero de su domicilio y se
						somete para cualquier controversia que surja de o se relacione con el presente contrato
						a los tribunales de la República de Guatemala. 25. En caso que algún termino o
						condición de este Contrato sea declarado nulo o ilegal por cualquier motivo, este
						Contrato permanecerá en plena vigencia en los demás términos y será interpretado
						como si tal término o condición nula o ilegal no fuese parte del mismo, salvo que la
						nulidad de la cláusula nula, anulada o declarada ilegal haga inútil el contrato en su
						totalidad. RESPONSABILIDAD DE EQUIPAJE: 26. No aceptamos responsabilidad por
						los pequeños cortes, muescas o rasguños ocasionados comúnmente en el manejo de
						equipaje o la pérdida de ruedas, asas, correas y otros accesorios. Tampoco aceptamos
						responsabilidad por la ruptura de algún compartimiento o su contenido, ni la ruptura de
						las costuras, cierres u otros. Máxima responsabilidad por la pérdida o daño de una
						bolsa y su contenido se basa en las normas de la IATA. 27. TODOS LOS VUELOS
						CIERRAN 35 MINUTOS ANTES DE LA SALIDA DEL VUELO. 28. CAMBIOS DE
						FECHA DENTRO DE 48 HORAS ANTES DE LA SALIDA DEL VUELO TENDRAN UN
						CARGO DE 15 USD POR SEGMENTO POR PASAJERO. 29. SI EL PASAJERO ES
						NO SHOW YA SEA EN AEROPUERTO EN COUNTER POR PRESENTARSE
						CUANDO EL VUELO ESTA YA CERRADO O EL PASAJERO FUE CHEQUEADO
						PERO SE PRESENTA TARDE EN LA PUERTA DE EMBARQUE TENDRA HASTA 48
						HORAS DESPUES DE HABER SIDO NO SHOW PARA REPROGRAMAR SU VUELO
						CON UNA PENALIDAD DE $100 USD. FUERA DE 48 HORAS EL BOLETO ESTARA
						PERDIDO.
						TAG Airlines como parte del protocolo de bioseguridad solicita cambio de la mascarilla
						al momento de realizar el abordaje. Presentar prueba con resultado negativo de PCR/
						Antígenos realizada en un tiempo no mayor a 72 horas antes de su vuelo, uso de
						mascarilla obligatorio, lavado de manos y uso de gel anti-bacterial.
					
					</div>
				</div>
				<div className={"modalFootel"}>
				
				</div>
			</div>
		</div>
	);
};

export default ModalTyc;