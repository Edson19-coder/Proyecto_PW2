import React from "react";
import { Fragment } from "react";
import { Container, FloatingLabel,Form, Col, Row, ProgressBar, Accordion, CardGroup, Button } from "react-bootstrap";

import CardItem from "../components/CardItem";


const index = (props) => {
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
                    <ProgressBar animated now={45} label={`${45}%`}/>
                    <br></br>
                    <Accordion defaultActiveKey="0" flush>
                      <Accordion.Item eventKey="0" >
                      <Accordion.Header ><h4>MotherBoard</h4></Accordion.Header>
                        <Accordion.Body >
                            <CardGroup className="justify-content-md-center">
                                <CardItem id="1" price="5000" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                                <CardItem id="12" price="5001" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                                <CardItem id="13" price="5002" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                            </CardGroup>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header><h4>Procesador</h4></Accordion.Header>
                        <Accordion.Body>
                            <CardGroup className="justify-content-md-center">
                                <CardItem id="1" price="5000" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                                <CardItem id="12" price="5001" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                                <CardItem id="13" price="5002" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                            </CardGroup>
                        </Accordion.Body>
                      </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><h4>Tarjeta Gráfica</h4></Accordion.Header>
                        <Accordion.Body>
                            <CardGroup className="justify-content-md-center">
                                <CardItem id="1" price="5000" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                                <CardItem id="12" price="5001" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                                <CardItem id="13" price="5002" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                            </CardGroup>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header><h4>RAM</h4></Accordion.Header>
                        <Accordion.Body>
                            <CardGroup className="justify-content-md-center">
                                <CardItem id="1" price="5000" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                                <CardItem id="12" price="5001" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                                <CardItem id="13" price="5002" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                            </CardGroup>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header><h4>Disco Duro</h4></Accordion.Header>
                        <Accordion.Body>
                            <CardGroup className="justify-content-md-center">
                                <CardItem id="1" price="5000" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                                <CardItem id="12" price="5001" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                                <CardItem id="13" price="5002" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                            </CardGroup>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header><h4>Alimentación de energía</h4></Accordion.Header>
                        <Accordion.Body>
                            <CardGroup className="justify-content-md-center">
                                <CardItem id="1" price="5000" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                                <CardItem id="12" price="5001" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                                <CardItem id="13" price="5002" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg"></CardItem>
                            </CardGroup>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="6">
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
export default index;