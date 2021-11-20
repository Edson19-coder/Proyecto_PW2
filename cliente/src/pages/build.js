import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { Container, FloatingLabel,Form, Col, Row, ProgressBar, Accordion, CardGroup, Button } from "react-bootstrap";
import CardItem from "../components/CardItemBuild";
import { getProcessorByTypeBuilding, getMotherBoardBuilding, getGraphicCardBuilding, getRamBuilding, getStorageBuilding, getCabinetBuilding, getPowerSupplyBuilding, createBuildSendToCart } from "../api/BuildingAPI";
import { getProductByIdAndCategory } from "../api/ProductAPI";
import { GLOBAL } from "../api/GLOBAL";
import { createNotification } from "../services/notifications";

var typeBuild = null;
var processorBuild = null;
var motherBoardBuild = null;
var graphicCardBuild = null;
var ramBuild = null;
var storageBuild = null;
var cabinetBuild = null;
var powerSupplyBuild = null;

var totalWatts = 0;
var totalCost = 0;

const Index = (props) => {

    const [progressBuild = 0, setProgressBuild] = useState();
    const [totalPayBuild = 0, setTotalPayBuild] = useState();

    const [processors, setProcessors] = useState([]);
    const handleChange = async (event) => {

        var selTypeBuild = document.getElementById("typeBuild");
        typeBuild  = selTypeBuild.options[selTypeBuild.selectedIndex].text;
        typeBuild = typeBuild.toUpperCase();

        const loggedUserJSON = window.localStorage.getItem('loggedUser');
        if(loggedUserJSON) {
            var loggedUser = JSON.parse(loggedUserJSON);
        }

        if(typeBuild == "SELECCIONA" || typeBuild == null) {
            document.getElementById('mbAccordion').className = 'disabled';
            document.getElementById('pAccordion').className = 'disabled';
            document.getElementById('gcAccordion').className = 'disabled';
            document.getElementById('ramAccordion').className = 'disabled';
            document.getElementById('stAccordion').className = 'disabled';
            document.getElementById('spAccordion').className = 'disabled';
            document.getElementById('cAccordion').className = 'disabled';
        } else {

            var typeBuildData = {
                typeProcessor: typeBuild
            }
            
            var response = await getProcessorByTypeBuilding(typeBuildData, loggedUser.token)
            
            var listProcessors = response.data["processors"];

            setProcessors(listProcessors);

            if(listProcessors.length > 0) {
                setProgressBuild(12.5);
                document.getElementById("pAccordion").classList.remove("disabled");
            }
        }
        
    };

    const [motherboards, setMotherboards] = useState([]);
    const getInformationProcessor = async (event) => {
        event.preventDefault();
        processorBuild = event.target.id;

        const loggedUserJSON = window.localStorage.getItem('loggedUser');
        if(loggedUserJSON) {
            var loggedUser = JSON.parse(loggedUserJSON);
        }

        var response = await getProductByIdAndCategory(processorBuild, "PROCESSOR", loggedUser.token);
        
        var processorData = {
            socket: response.data[0].socket,
            chipset: response.data[0].chipset
        };

        totalWatts = totalWatts + parseInt(response.data[0].watts, 10);
        totalCost = totalCost + parseInt(response.data[0].cost, 10);
        setTotalPayBuild(totalCost);

        response = await getMotherBoardBuilding(processorData, loggedUser.token);
        
        if(response.data["motherboards"] != undefined) {
            var listMotherboards = response.data["motherboards"];
            setMotherboards(listMotherboards);

            if(listMotherboards.length > 0) {
                setProgressBuild(25);
                createNotification(200, "Procesador agregado, escoge una placa madre.", false, "");
                document.getElementById("mbAccordion").classList.remove("disabled");
            } else {
                createNotification(201, "Lo sentimos, no hay placas madres compatibles.", false, "");
                document.getElementById('mbAccordion').className = 'disabled';
            }
        } 
    }

    const [graphicCards, setGraphicCards] = useState([]);
    const getInformationGraphicCard = async (event) => {
        event.preventDefault();
        motherBoardBuild = event.target.id;

        const loggedUserJSON = window.localStorage.getItem('loggedUser');
        if(loggedUserJSON) {
            var loggedUser = JSON.parse(loggedUserJSON);
        }

        var response = await getProductByIdAndCategory(motherBoardBuild, "MOTHERBOARD", loggedUser.token);

        var motherboardData = {
            idMotherboard: response.data[0].socket
        };

        totalWatts = totalWatts + parseInt(response.data[0].watts, 10);
        totalCost = totalCost + parseInt(response.data[0].cost, 10);
        setTotalPayBuild(totalCost);

        response = await getGraphicCardBuilding(motherboardData, loggedUser.token);

        if(response.data["graphicCards"] != undefined) {
            var listGraphicCards = response.data["graphicCards"];
            setGraphicCards(listGraphicCards);

            if(listGraphicCards.length > 0) {
                setProgressBuild(37.5);
                createNotification(200, "Placa madre agregado, escoge una tarjeta grafica.", false, "");
                document.getElementById("gcAccordion").classList.remove("disabled");
            } else {
                createNotification(201, "Lo sentimos, no hay graficas compatibles.", false, "");
                document.getElementById('gcAccordion').className = 'disabled';
            }
        } 
    }

    const [rams, setRams] = useState([]);
    const getInformationRamAndStorage = async (event) => {
        event.preventDefault();
        graphicCardBuild = event.target.id;

        const loggedUserJSON = window.localStorage.getItem('loggedUser');
        if(loggedUserJSON) {
            var loggedUser = JSON.parse(loggedUserJSON);
        }

        var response = await getProductByIdAndCategory(graphicCardBuild, "GRAPHICCARD", loggedUser.token);

        totalWatts = totalWatts + parseInt(response.data[0].watts, 10);
        totalCost = totalCost + parseInt(response.data[0].cost, 10);
        setTotalPayBuild(totalCost);

        var responseRam = await getRamBuilding(loggedUser.token);
        
        if(responseRam.data["rams"] != undefined) {
            var listRams = responseRam.data["rams"];

            setRams(listRams);
            
            if(listRams.length > 0) {
                setProgressBuild(50);
                createNotification(200, "Tarjeta grafica agregado, escoge los demas componentes faltantes.", false, "");
                document.getElementById("ramAccordion").classList.remove("disabled");
            } else {
                createNotification(201, "Lo sentimos, no hay productos compatibles.", false, "");
                document.getElementById('gcAccordion').className = 'disabled';
            }
        } 
    }

    const [storages, setStorages] = useState([]);
    const getInformationStorage = async (event) => {
        event.preventDefault();
        ramBuild = event.target.id;

        const loggedUserJSON = window.localStorage.getItem('loggedUser');
        if(loggedUserJSON) {
            var loggedUser = JSON.parse(loggedUserJSON);
        }

        var response = await getProductByIdAndCategory(ramBuild, "RAM", loggedUser.token);

        totalWatts = totalWatts + parseInt(response.data[0].watts, 10);
        totalCost = totalCost + parseInt(response.data[0].cost, 10);
        setTotalPayBuild(totalCost);

        var responseStorage = await getStorageBuilding(loggedUser.token);

        if(responseStorage.data["storages"] != undefined) {
            var listStorages = responseStorage.data["storages"];

            setStorages(listStorages);
            
            if(listStorages.length > 0) {
                setProgressBuild(62.5);
                createNotification(200, "Memoria ram agregada, escoge los demas componentes faltantes.", false, "");
                document.getElementById("stAccordion").classList.remove("disabled");
            } else {
                createNotification(201, "Lo sentimos, no hay productos compatibles.", false, "");
            }
        } 
    }

    const [cabinets, setCabinets] = useState([]);
    const getInformationCabinet = async (event) => {
        event.preventDefault();
        storageBuild = event.target.id;

        const loggedUserJSON = window.localStorage.getItem('loggedUser');
        if(loggedUserJSON) {
            var loggedUser = JSON.parse(loggedUserJSON);
        }

        var response = await getProductByIdAndCategory(motherBoardBuild, "MOTHERBOARD", loggedUser.token);

        var cabinetData = {
            size: response.data[0].size
        };

        response = await getProductByIdAndCategory(storageBuild, "STORAGE", loggedUser.token);

        totalWatts = totalWatts + parseInt(response.data[0].watts, 10);
        totalCost = totalCost + parseInt(response.data[0].cost, 10);
        setTotalPayBuild(totalCost);

        response = await getCabinetBuilding(cabinetData, loggedUser.token);

        if(response.data["cabinets"] != undefined) {
            var listCabinets = response.data["cabinets"];

            setCabinets(listCabinets);
            
            if(listCabinets.length > 0) {
                setProgressBuild(75);
                createNotification(200, "Disco duro agregada, escoge un gabinete.", false, "");
                document.getElementById("cAccordion").classList.remove("disabled");
            } else {
                createNotification(201, "Lo sentimos, no hay productos compatibles.", false, "");
            }
        }
    }

    const [powerSupplys, setPowerSupplys] = useState([]);
    const getInformationPowerSupply = async (event) => {
        event.preventDefault();
        cabinetBuild = event.target.id;

        const loggedUserJSON = window.localStorage.getItem('loggedUser');
        if(loggedUserJSON) {
            var loggedUser = JSON.parse(loggedUserJSON);
        }

        var response = await getProductByIdAndCategory(cabinetBuild, "CABINET", loggedUser.token);

        totalWatts = totalWatts + parseInt(response.data[0].watts, 10);
        totalCost = totalCost + parseInt(response.data[0].cost, 10);
        setTotalPayBuild(totalCost);

        var powerSupplyData = {
            totalWatts: totalWatts
        };

        response = await getPowerSupplyBuilding(powerSupplyData, loggedUser.token);

        if(response.data["powerSupplys"] != undefined) {
            var listPowerSupplys = response.data["powerSupplys"];

            setPowerSupplys(listPowerSupplys);
            
            if(listPowerSupplys.length > 0) {
                setProgressBuild(87.5);
                createNotification(200, "Fuente de poder agregada, confirma todos tus componentes para añadirlos al carrito!", false, "");
                document.getElementById("spAccordion").classList.remove("disabled");
            } else {
                createNotification(201, "Lo sentimos, no hay productos compatibles.", false, "");
            }
        }
    }

    const getInformationFinal = async (event) => {
        event.preventDefault();
        powerSupplyBuild = event.target.id;

        const loggedUserJSON = window.localStorage.getItem('loggedUser');
        if(loggedUserJSON) {
            var loggedUser = JSON.parse(loggedUserJSON);
        }

        var response = await getProductByIdAndCategory(powerSupplyBuild, "POWERSUPPLY", loggedUser.token);

        totalCost = totalCost + parseInt(response.data[0].cost, 10);
        setTotalPayBuild(totalCost);

        if(response.data != undefined) {
            setProgressBuild(100);
            createNotification(200, "Fuente de poder agregada, confirma todos tus componentes para añadirlos al carrito!", false, "");
            document.getElementById("spAccordion").classList.remove("disabled");
        } else {
            createNotification(201, "Lo sentimos, no hay productos compatibles.", false, "");
        }
    }

    const createBuildToCart = async (event) => {
        if(progressBuild === 100) {

            const loggedUserJSON = window.localStorage.getItem('loggedUser');
            if(loggedUserJSON) {
                var loggedUser = JSON.parse(loggedUserJSON);
            }

            var prodIdData = {
                productsBuild: [processorBuild, motherBoardBuild, graphicCardBuild, ramBuild, storageBuild, cabinetBuild, powerSupplyBuild]
            };

            var response = await createBuildSendToCart(prodIdData, loggedUser.token);

            var message = response.data["message"];

            if(response.status == 200) {
                message = "Productos agregados al carrito.!";
            }

            createNotification(response.status, message, true, "/cart");
            
        } else {
            createNotification(201, "Selecciona los componentes faltantes!", false, "");
        }
    }

    return (
        <Fragment>
            <Container id="ContainerBuild">
                <Container id="SpaceBuild">
                
                    <br></br>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <h2 >
                                Progreso de la Build
                            </h2>
                        </Col>
                    </Row>
                    <ProgressBar id="progressBar" animated now={progressBuild} label={`${progressBuild}%`}/>
                    <br></br>
                    <select id="typeBuild" onChange={handleChange} className="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option value="0" defaultValue>Selecciona</option>
                        <option value="1">AMD</option>
                        <option value="2">INTEL</option>
                        </select>
                    <br></br>
                    <Accordion flush>
                      
                      <Accordion.Item eventKey="0" id="pAccordion" className="disabled">
                        <Accordion.Header id="pAccordionEx"><h4>Procesador</h4></Accordion.Header>
                        <Accordion.Body>
                            <CardGroup className="justify-content-md-center">
                                {processors.map((item) => (
                                    <CardItem key={item._id} id={item.productId} price={item.cost} name={item.name} description={item.description} functionName={getInformationProcessor} img={`${GLOBAL.url}/get-image-prod/${item.image}`} ></CardItem>
                                ))}
                            </CardGroup>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1" id="mbAccordion" className="disabled">
                      <Accordion.Header ><h4>MotherBoard</h4></Accordion.Header>
                        <Accordion.Body >
                            <CardGroup className="justify-content-md-center">
                                {motherboards.map((item) => (
                                    <CardItem key={item._id} id={item.productId} price={item.cost} name={item.name} description={item.description} functionName={getInformationGraphicCard} img={`${GLOBAL.url}/get-image-prod/${item.image}`} ></CardItem>
                                ))}
                            </CardGroup>
                        </Accordion.Body>
                      </Accordion.Item>
                    <Accordion.Item eventKey="2" id="gcAccordion" className="disabled">
                        <Accordion.Header><h4>Tarjeta Gráfica</h4></Accordion.Header>
                        <Accordion.Body>
                            <CardGroup className="justify-content-md-center">
                                {graphicCards.map((item) => (
                                    <CardItem key={item._id} id={item.productId} price={item.cost} name={item.name} description={item.description} functionName={getInformationRamAndStorage} img={`${GLOBAL.url}/get-image-prod/${item.image}`} ></CardItem>
                                ))}
                            </CardGroup>
                        </Accordion.Body>
                      </Accordion.Item>
                      
                      <Accordion.Item eventKey="3" id="ramAccordion" className="disabled">
                        <Accordion.Header><h4>RAM</h4></Accordion.Header>
                        <Accordion.Body>
                            <CardGroup className="justify-content-md-center">
                                {rams.map((item) => (
                                    <CardItem key={item._id} id={item.productId} price={item.cost} name={item.name} description={item.description} functionName={getInformationStorage} img={`${GLOBAL.url}/get-image-prod/${item.image}`} ></CardItem>
                                ))}
                            </CardGroup>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="4" id="stAccordion" className="disabled">
                        <Accordion.Header><h4>Disco Duro</h4></Accordion.Header>
                        <Accordion.Body>
                            <CardGroup className="justify-content-md-center">
                                {storages.map((item) => (
                                    <CardItem key={item._id} id={item.productId} price={item.cost} name={item.name} description={item.description} functionName={getInformationCabinet} img={`${GLOBAL.url}/get-image-prod/${item.image}`} ></CardItem>
                                ))}
                            </CardGroup>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="5" id="cAccordion" className="disabled">
                        <Accordion.Header><h4>Gabinete</h4></Accordion.Header>
                        <Accordion.Body>
                            <CardGroup className="justify-content-md-center">
                                {cabinets.map((item) => (
                                    <CardItem key={item._id} id={item.productId} price={item.cost} name={item.name} description={item.description} functionName={getInformationPowerSupply} img={`${GLOBAL.url}/get-image-prod/${item.image}`} ></CardItem>
                                ))}
                            </CardGroup>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="6" id="spAccordion" className="disabled">
                        <Accordion.Header><h4>Alimentación de energía</h4></Accordion.Header>
                        <Accordion.Body>
                            <CardGroup className="justify-content-md-center">
                                {powerSupplys.map((item) => (
                                    <CardItem key={item._id} id={item.productId} price={item.cost} name={item.name} description={item.description} functionName={getInformationFinal} img={`${GLOBAL.url}/get-image-prod/${item.image}`} ></CardItem>
                                ))}
                            </CardGroup>
                        </Accordion.Body>
                      </Accordion.Item>
                      
                    </Accordion>
                    <br></br>
                    <Row className="justify-content-md-center">
                        <Col md={2}>
                        <Button variant="outline-light" size="lg" id="btnCreateBuild" onClick={createBuildToCart}>Terminar Build</Button>
                        </Col>
                    </Row>
                    <br></br>
                    <center><label>Total a pagar: ${totalPayBuild}</label></center>
                    <br></br>
                </Container>
            </Container>
        </Fragment>
    );
}
export default Index;