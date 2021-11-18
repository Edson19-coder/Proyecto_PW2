import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { Container, FloatingLabel,Form, Col, Row, ProgressBar, Accordion, CardGroup, Button } from "react-bootstrap";
import CardItem from "../components/CardItemBuild";
import { getProcessorByTypeBuilding, getMotherBoardBuilding, getGraphicCardBuilding, getRamBuilding, getStorageBuilding } from "../api/BuildingAPI";
import { getProductByIdAndCategory } from "../api/ProductAPI";
import { GLOBAL } from "../api/GLOBAL";
import { createNotification } from "../services/notifications";

var porcentajeBuild = 20;

var typeBuild = null;
var processorBuild = null;
var motherBoardBuild = null;
var graphicCardBuild = null;


const Index = (props) => {


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
        
        response = await getMotherBoardBuilding(processorData, loggedUser.token);
        
        if(response.data["motherboards"] != undefined) {
            var listMotherboards = response.data["motherboards"];
            setMotherboards(listMotherboards);

            if(listMotherboards.length > 0) {
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

        response = await getGraphicCardBuilding(motherboardData, loggedUser.token);

        if(response.data["graphicCards"] != undefined) {
            var listGraphicCards = response.data["graphicCards"];
            setGraphicCards(listGraphicCards);

            if(listGraphicCards.length > 0) {
                createNotification(200, "Placa madre agregado, escoge una tarjeta grafica.", false, "");
                document.getElementById("gcAccordion").classList.remove("disabled");
            } else {
                createNotification(201, "Lo sentimos, no hay graficas compatibles.", false, "");
                document.getElementById('gcAccordion').className = 'disabled';
            }
        } 
    }

    const [rams, setRams] = useState([]);
    const [storages, setStorages] = useState([]);
    const getInformationRamAndStorage = async (event) => {
        event.preventDefault();
        graphicCardBuild = event.target.id;

        const loggedUserJSON = window.localStorage.getItem('loggedUser');
        if(loggedUserJSON) {
            var loggedUser = JSON.parse(loggedUserJSON);
        }

        var responseRam = await getRamBuilding(loggedUser.token);
        var responseStorage = await getStorageBuilding(loggedUser.token);
        
        console.log(responseRam);
        console.log(responseStorage);
        
        if(responseRam.data["rams"] != undefined && responseStorage.data["storages"] != undefined) {
            var listRams = responseRam.data["rams"];
            var listStorages = responseStorage.data["storages"];

            setRams(listRams);
            setStorages(listStorages);
            
            if(listRams.length > 0 && listStorages.length > 0) {
                createNotification(200, "Tarjeta grafica agregado, escoge los demas componentes faltantes.", false, "");
                document.getElementById("ramAccordion").classList.remove("disabled");
                document.getElementById("stAccordion").classList.remove("disabled");
            } else {
                createNotification(201, "Lo sentimos, no hay productos compatibles.", false, "");
                document.getElementById('gcAccordion').className = 'disabled';
            }
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
                    <ProgressBar id="progressBar" animated now={porcentajeBuild} label={`${porcentajeBuild}%`}/>
                    <br></br>
                    <select id="typeBuild" onChange={handleChange} className="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option value="0" defaultValue>Selecciona</option>
                        <option value="1">AMD</option>
                        <option value="2">INTEL</option>
                        </select>
                    <br></br>
                    <Accordion flush>
                      
                      <Accordion.Item eventKey="0" id="pAccordion" className="disabled">
                        <Accordion.Header><h4>Procesador</h4></Accordion.Header>
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
                                    <CardItem key={item._id} id={item.productId} price={item.cost} name={item.name} description={item.description} functionName={getInformationRamAndStorage} img={`${GLOBAL.url}/get-image-prod/${item.image}`} ></CardItem>
                                ))}
                            </CardGroup>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="4" id="stAccordion" className="disabled">
                        <Accordion.Header><h4>Disco Duro</h4></Accordion.Header>
                        <Accordion.Body>
                            <CardGroup className="justify-content-md-center">
                                {storages.map((item) => (
                                    <CardItem key={item._id} id={item.productId} price={item.cost} name={item.name} description={item.description} functionName={getInformationRamAndStorage} img={`${GLOBAL.url}/get-image-prod/${item.image}`} ></CardItem>
                                ))}
                            </CardGroup>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="5" id="spAccordion" className="disabled">
                        <Accordion.Header><h4>Alimentación de energía</h4></Accordion.Header>
                        <Accordion.Body>
                            <CardGroup className="justify-content-md-center">
                                <CardItem id="1" price="5000" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                                <CardItem id="12" price="5001" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                                <CardItem id="13" price="5002" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                            </CardGroup>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="6" id="cAccordion" className="disabled">
                        <Accordion.Header><h4>Cabinete</h4></Accordion.Header>
                        <Accordion.Body>
                            <CardGroup className="justify-content-md-center">
                                <CardItem id="1" price="5000" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                                <CardItem id="12" price="5001" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                                <CardItem id="13" price="5002" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                            </CardGroup>
                        </Accordion.Body>
                      </Accordion.Item>
                      
                    </Accordion>
                    <br></br>
                    <Row className="justify-content-md-center">
                        <Col md={2}>
                            <Button variant="outline-light" size="lg">Terminar Build</Button>{' '}
                        </Col>
                    </Row>
                    <br></br>
                </Container>
            </Container>
        </Fragment>
    );
}
export default Index;