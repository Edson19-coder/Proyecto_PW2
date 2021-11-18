import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { Container, FloatingLabel,Form, Col, Row, ProgressBar, Accordion, CardGroup, Button } from "react-bootstrap";
import CardItem from "../components/CardItemBuild";
import { getProcessorByTypeBuilding } from "../api/BuildingAPI";

var porcentajeBuild = 20;
var listProcessors = [];

var typeBuild = null;
var processorBuild = null;
var motherBoardBuild = null;

const changeTypeBuild = async (event) => {
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
        
        var response = await getProcessorByTypeBuilding(typeBuildData, loggedUser.token);

        listProcessors = response.data["processors"];
        
        if(listProcessors.length > 0) {
            porcentajeBuild = porcentajeBuild + 12.5;
            document.getElementById("pAccordion").classList.remove("disabled");
        } else {
            
        }
            
    }
} 

const getBuildMotherBoard = () => {
    alert("hola");
}

const Index = (props) => {

    const [processors, setProcessors] = useState([]);

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
                    <select id="typeBuild" onChange={changeTypeBuild} className="form-select form-select-sm" aria-label=".form-select-sm example">
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
                                {listProcessors.map((item) => (
                                    <div key={item._id}>{item.name}</div>
                                ))}
                            </CardGroup>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1" id="mbAccordion" className="disabled">
                      <Accordion.Header ><h4>MotherBoard</h4></Accordion.Header>
                        <Accordion.Body >
                            <CardGroup className="justify-content-md-center">
                                <CardItem id="1" price="5000" name="Squid Game" functionName={getBuildMotherBoard} img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                                <CardItem id="12" price="5001" name="Squid Game" functionName={getBuildMotherBoard} img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                                <CardItem id="13" price="5002" name="Squid Game" functionName={getBuildMotherBoard} img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                            </CardGroup>
                        </Accordion.Body>
                      </Accordion.Item>
                    <Accordion.Item eventKey="2" id="gcAccordion" className="disabled">
                        <Accordion.Header><h4>Tarjeta Gráfica</h4></Accordion.Header>
                        <Accordion.Body>
                            <CardGroup className="justify-content-md-center">
                                <CardItem id="1" price="5000" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                                <CardItem id="12" price="5001" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                                <CardItem id="13" price="5002" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                            </CardGroup>
                        </Accordion.Body>
                      </Accordion.Item>
                      
                      <Accordion.Item eventKey="3" id="ramAccordion" className="disabled">
                        <Accordion.Header><h4>RAM</h4></Accordion.Header>
                        <Accordion.Body>
                            <CardGroup className="justify-content-md-center">
                                <CardItem id="1" price="5000" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                                <CardItem id="12" price="5001" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                                <CardItem id="13" price="5002" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                            </CardGroup>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="4" id="stAccordion" className="disabled">
                        <Accordion.Header><h4>Disco Duro</h4></Accordion.Header>
                        <Accordion.Body>
                            <CardGroup className="justify-content-md-center">
                                <CardItem id="1" price="5000" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                                <CardItem id="12" price="5001" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                                <CardItem id="13" price="5002" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
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