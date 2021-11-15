import React from "react";
import { Container } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Row, Col, FloatingLabel, InputGroup } from "react-bootstrap";
const CategoriaButton = async () => {
    var valorSelect = document.getElementById("selectedOpt").value;
    var botoncito;
    var contador;
    for (contador = 1;contador <= 7; contador++) {
        console.log(contador);
        botoncito = document. getElementById("botoncito"+contador);
        botoncito.style.display = "none";    
    }

    if(valorSelect === 0){
        alert("Selecciona una categoria");
    }else{
        botoncito = document. getElementById("botoncito"+valorSelect);
        botoncito.style.display = "block";    
    }
    
}

const CreateProduct = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    const [modalShow4, setModalShow4] = React.useState(false);
    const [modalShow5, setModalShow5] = React.useState(false);
    const [modalShow6, setModalShow6] = React.useState(false);
    const [modalShow7, setModalShow7] = React.useState(false);
    return (
        <div>
            <Container id="ContCreateProd">
                <br/>
                <div className="text-center">
                    <h4 className="hCreateProd">Subir Imagen del Producto</h4>
                </div>
                <div className="row justify-content-center">
                    <div className="mb-3 col-8 ">
                        <input className="form-control form-control-sm" id="formFileSm" type="file"/>
                    </div>
                </div>
                <div className="text-center">
                    <h4 className="hCreateProd"> Nombre del producto</h4>
                </div>
                <div className="row justify-content-center">
                    <div className="col-8">
                        <input type="text" className="form-control" id="floatingInput" />
                    </div>
                </div>
                <br/>
                <span className="row justify-content-center">
                    <div className="mb-3 col-4" >
                        <h5 className="hCreateProd">Precio</h5>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">$</span>
                            <input type="text" className="form-control" placeholder="Precio" aria-label="Precio"
                                aria-describedby="basic-addon1"/>
                        </div>
                        <center>
                        <h5 className="hCreateProd">Categoria</h5>
                        <select id="selectedOpt" className="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option value="0" defaultValue>Selecciona</option>
                        <option value="1">Cabinet</option>
                        <option value="2">MotherBoard</option>
                        <option value="3">PowerSupply</option>
                        <option value="4">RAM</option>
                        <option value="5">Storage</option>
                        <option value="6">Processor</option>
                        <option value="7">GraphicCard</option>
                        </select>
                        <br/>                        
                        <button className="btn btn-primary col-6" onClick={CategoriaButton} >Seleccionar</button>

                        <br/>
                        <br/>
                        <br/>
                        <div id="AgregarbtnCorrespondiente" className="col-12 btnCateg">
                        <button id="botoncito1" style={{display: "none"}}className="btn btn-primary col-6" onClick={() => setModalShow(true)} >Cabinet</button>
                        <button id="botoncito2" style={{display: "none"}}className="btn btn-primary col-6" onClick={() => setModalShow2(true)} >MotherBoard</button>
                        <button id="botoncito3" style={{display: "none"}}className="btn btn-primary col-6" onClick={() => setModalShow3(true)} >PowerSupply</button>
                        <button id="botoncito4" style={{display: "none"}}className="btn btn-primary col-6" onClick={() => setModalShow4(true)} >RAM</button>
                        <button id="botoncito5" style={{display: "none"}}className="btn btn-primary col-6" onClick={() => setModalShow5(true)} >Storage</button>
                        <button id="botoncito6" style={{display: "none"}}className="btn btn-primary col-6" onClick={() => setModalShow6(true)} >Processor</button>
                        <button id="botoncito7" style={{display: "none"}}className="btn btn-primary col-6" onClick={() => setModalShow7(true)} >GraphicCard</button>
                        </div>
                        <br/>

                        </center>
                    </div>
                <div className="mb-3 col-4">
                    <h5 className="hCreateProd">Descripción</h5>
                    <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                        style={{height:"300px"}}></textarea>
                    </div>
                </div>
                </span>
                <br/>
                <div className="row justify-content-center">
                <button className="btn btn-success col-3" type="submit">
                    Crear
                </button>
                </div>
                <br/>
            </Container>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <MyVerticallyCenteredModal2
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <MyVerticallyCenteredModal3
                show={modalShow3}
                onHide={() => setModalShow3(false)}
            />
            <MyVerticallyCenteredModal4
                show={modalShow4}
                onHide={() => setModalShow4(false)}
            />
            <MyVerticallyCenteredModal5
                show={modalShow5}
                onHide={() => setModalShow5(false)}
            />
            <MyVerticallyCenteredModal6
                show={modalShow6}
                onHide={() => setModalShow6(false)}
            />
            <MyVerticallyCenteredModal7
                show={modalShow7}
                onHide={() => setModalShow7(false)}
            />
        </div>
    )
}

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Cabinete
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Características</h4>
          <br></br>
          <Row className="g-2">
            <Col md>
              <center>
                <h5 className="hCreateModal">Tamaño</h5>
                <select id="selectedOpt" className="form-select form-select-mb" aria-label=".form-select-mb example">
                <option value="0" defaultValue>Selecciona</option>
                <option value="1">Barebone</option>
                <option value="2">Minitower</option>
                <option value="3">Sobremesa</option>
                <option value="4">Torre</option>
                </select>
              </center>
            </Col>
            <Col md>
              <center>
                <h5 className="hCreateModal">Color</h5>
                <select id="selectedOpt" className="form-select form-select-mb" aria-label=".form-select-mb example">
                <option value="0" defaultValue>Selecciona</option>
                <option value="1">Negro</option>
                <option value="2">Blanco</option>
                <option value="3">Azul</option>
                <option value="4">Rojo</option>
                <option value="5">Gris</option>
                </select>
              </center>
            </Col>
            <Col md>
            <center>
              <h5 className="hCreateModal">Watts</h5>
              <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">W</span>
                  <input type="text" className="form-control" placeholder="0" aria-label="Watts"
                      aria-describedby="basic-addon1"/>
              </div>
            </center>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
            <center>
              <h5 className="hCreateModal">Cantidad de Slots 2,5</h5>
                <input type="text" className="form-control" placeholder="0" aria-label="0"
                    aria-describedby="basic-addon1"/>
            </center>
            </Col>
            <Col md>
            <center>
              <h5 className="hCreateModal">Cantidad de Slots 3,5</h5>
                <input type="text" className="form-control" placeholder="0" aria-label="0"
                    aria-describedby="basic-addon1"/>
            </center>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="success">Aceptar</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
function MyVerticallyCenteredModal2(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            MotherBoard
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Características</h4>
          <br></br>
          <Row className="g-2">
            <Col md>
              <center>
                <h5 className="hCreateModal">Socket</h5>
                <select id="selectedOpt" className="form-select form-select-mb" aria-label=".form-select-mb example">
                <option value="0" defaultValue>Selecciona</option>
                <option value="1">PGA</option>
                <option value="2">SPGA</option>
                <option value="3">PPGA</option>
                <option value="4">uPGA</option>
                <option value="5">FCBGA</option>
                <option value="6">LGA</option>
                </select>
              </center>
            </Col>
            <Col md>
              <center>
                <h5 className="hCreateModal">Chipset</h5>
                <select id="selectedOpt" className="form-select form-select-mb" aria-label=".form-select-mb example">
                <option value="0" defaultValue>Selecciona</option>
                <option value="1">INTEL-Z590</option>
                <option value="2">INTEL-H570</option>
                <option value="3">INTEL-B560</option>
                <option value="4">INTEL-H510</option>
                <option value="5">INTEL-Z490</option>
                <option value="6">INTEL-H470</option>
                <option value="7">INTEL-H410</option>
                <option value="8">INTEL-B460</option>
                <option value="9">INTEL-Z390</option>
                <option value="10">INTEL-Z370</option>
                <option value="11">INTEL-B365</option>
                <option value="12">INTEL-B360</option>
                <option value="13">AMD-TRX40</option>
                <option value="14">AMD-X570</option>
                <option value="15">AMD-B550</option>
                <option value="16">AMD-A520</option>
                <option value="17">AMD-X470</option>
                <option value="18">AMD-X399</option>
                <option value="19">AMD-B450</option>
                <option value="20">AMD-X300</option>
                <option value="21">AMD-A300</option>
                </select>
              </center>
            </Col>
            <Col md>
            <center>
              <h5 className="hCreateModal">Posee M2</h5>
              <div className="input-group mb-3">
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="switch" label="Si posee m2" />
                </Form.Group>
              </div>
            </center>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
            <center>
              <h5 className="hCreateModal">Velocidad Ram</h5>
                <input type="text" className="form-control" placeholder="0" aria-label="0"
                    aria-describedby="basic-addon1"/>
            </center>
            </Col>
            <Col md>
              <center>
              <h5 className="hCreateModal">Ram Máxima</h5>
                <input type="text" className="form-control" placeholder="0" aria-label="0"
                    aria-describedby="basic-addon1"/>
              </center>
            </Col>
          </Row>
          <Row className="g-2">
            <Col md>
            <center>
                <h5 className="hCreateModal">Tamaño</h5>
                <select id="selectedOpt" className="form-select form-select-mb" aria-label=".form-select-mb example">
                <option value="0" defaultValue>Selecciona</option>
                <option value="1">ATX</option>
                <option value="2">MICROATX</option>
                <option value="3">MINIATX</option>
                </select>
              </center>
            </Col>
            <Col md>
            <center>
              <h5 className="hCreateModal">Watts</h5>
              <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">W</span>
                  <input type="text" className="form-control" placeholder="0" aria-label="Watts"
                      aria-describedby="basic-addon1"/>
              </div>
            </center>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="success">Aceptar</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
function MyVerticallyCenteredModal3(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            PowerSupply
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Características</h4>
          <br></br>
          <Row className="g-2">
            <Col md>
              <center>
                <h5 className="hCreateModal">Certificación</h5>
                <select id="selectedOpt" className="form-select form-select-mb" aria-label=".form-select-mb example">
                <option value="0" defaultValue>Selecciona</option>
                <option value="1">80 PLUS</option>
                <option value="2">80 PLUS Bronze</option>
                <option value="3">80 PLUS Silver</option>
                <option value="4">80 PLUS Gold</option>
                <option value="5">80 PLUS Platinum</option>
                <option value="6">80 PLUS Titanium</option>
                </select>
              </center>
            </Col>
            <Col md>
              <center>
                <h5 className="hCreateModal">Color</h5>
                <select id="selectedOpt" className="form-select form-select-mb" aria-label=".form-select-mb example">
                <option value="0" defaultValue>Selecciona</option>
                <option value="1">Negro</option>
                <option value="2">Blanco</option>
                <option value="3">Azul</option>
                <option value="4">Rojo</option>
                <option value="5">Gris</option>
                </select>
              </center>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
              <center>
                <h5 className="hCreateModal">Wattage</h5>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">W</span>
                  <input type="text" className="form-control" placeholder="0" aria-label="Watts"
                      aria-describedby="basic-addon1"/>
              </div>
              </center>
            </Col>
            <Col md>
            <center>
              <h5 className="hCreateModal">Watts</h5>
              <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">W</span>
                  <input type="text" className="form-control" placeholder="0" aria-label="Watts"
                      aria-describedby="basic-addon1"/>
              </div>
            </center>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="success">Aceptar</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
function MyVerticallyCenteredModal4(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            RAM
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Características</h4>
          <br></br>
          <Row className="g-2">
            <Col md>
              <center>
                <h5 className="hCreateModal">Tipo</h5>
                <select id="selectedOpt" className="form-select form-select-mb" aria-label=".form-select-mb example">
                <option value="0" defaultValue>Selecciona</option>
                <option value="1">DDR3</option>
                <option value="2">DDR4</option>
                <option value="3">DDR5</option>
                </select>
              </center>
            </Col>
            <Col md>
            <center>
              <h5 className="hCreateModal">Tamaño</h5>
              <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">GB</span>
                  <input type="text" className="form-control" placeholder="0" aria-label="Watts"
                      aria-describedby="basic-addon1"/>
              </div>
            </center>
            </Col>
            <Col md>
            <center>
              <h5 className="hCreateModal">Watts</h5>
              <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">W</span>
                  <input type="text" className="form-control" placeholder="0" aria-label="Watts"
                      aria-describedby="basic-addon1"/>
              </div>
            </center>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="success">Aceptar</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
function MyVerticallyCenteredModal5(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Storage
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Características</h4>
          <br></br>
          <Row className="g-2">
            <Col md>
              <center>
                <h5 className="hCreateModal">Tipo de Disco Duro</h5>
                <select id="selectedOpt" className="form-select form-select-mb" aria-label=".form-select-mb example">
                <option value="0" defaultValue>Selecciona</option>
                <option value="1">HDD</option>
                <option value="2">SSD</option>
                </select>
              </center>
            </Col>
            <Col md>
            <center>
                <h5 className="hCreateModal">Tipo de Conexión</h5>
                <select id="selectedOpt" className="form-select form-select-mb" aria-label=".form-select-mb example">
                <option value="0" defaultValue>Selecciona</option>
                <option value="1">Sata</option>
                <option value="2">M2</option>
                </select>
              </center>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col md>
              <center>
              <h5 className="hCreateModal">Tamaño</h5>
              <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">GB</span>
                  <input type="text" className="form-control" placeholder="0" aria-label="Watts"
                      aria-describedby="basic-addon1"/>
              </div>
            </center>
            </Col>
            <Col md>
            <center>
              <h5 className="hCreateModal">Watts</h5>
              <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">W</span>
                  <input type="text" className="form-control" placeholder="0" aria-label="Watts"
                      aria-describedby="basic-addon1"/>
              </div>
            </center>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="success">Aceptar</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
function MyVerticallyCenteredModal6(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Procesador
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Características</h4>
          <br></br>
          <Row className="g-2">
            <Col md>
              <center>
                <h5 className="hCreateModal">Tipo de Procesador</h5>
                <select id="selectedOpt" className="form-select form-select-mb" aria-label=".form-select-mb example">
                <option value="0" defaultValue>Selecciona</option>
                <option value="1">AMD</option>
                <option value="2">INTEL</option>
                </select>
              </center>
            </Col>
            <Col md>
              <center>
                <h5 className="hCreateModal">Núcleos</h5>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="0" aria-label="Núcleos"
                        aria-describedby="basic-addon1"/>
                </div>
              </center>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col>
              <center>
                <h5 className="hCreateModal">Chipset</h5>
                <Form>
                  {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="INTEL-Z590"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="INTEL-H570"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="INTEL-B560"
                        name="group1"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="INTEL-H510"
                        name="group1"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                      <Form.Check
                        inline
                        label="INTEL-Z490"
                        name="group1"
                        type={type}
                        id={`inline-${type}-5`}
                      />
                      <Form.Check
                        inline
                        label="INTEL-H470"
                        name="group1"
                        type={type}
                        id={`inline-${type}-6`}
                      />
                      <Form.Check
                        inline
                        label="INTEL-H410"
                        name="group1"
                        type={type}
                        id={`inline-${type}-7`}
                      />
                      <Form.Check
                        inline
                        label="INTEL-B460"
                        name="group1"
                        type={type}
                        id={`inline-${type}-8`}
                      />
                      <Form.Check
                        inline
                        label="INTEL-Z390"
                        name="group1"
                        type={type}
                        id={`inline-${type}-9`}
                      />
                      <Form.Check
                        inline
                        label="INTEL-Z370"
                        name="group1"
                        type={type}
                        id={`inline-${type}-10`}
                      />
                      <Form.Check
                        inline
                        label="INTEL-B365"
                        name="group1"
                        type={type}
                        id={`inline-${type}-11`}
                      />
                      <Form.Check
                        inline
                        label="INTEL-B360"
                        name="group1"
                        type={type}
                        id={`inline-${type}-12`}
                      />
                      <Form.Check
                        inline
                        label="AMD-TRX40"
                        name="group1"
                        type={type}
                        id={`inline-${type}-13`}
                      />
                      <Form.Check
                        inline
                        label="AMD-X570"
                        name="group1"
                        type={type}
                        id={`inline-${type}-14`}
                      />
                      <Form.Check
                        inline
                        label="AMD-B550"
                        name="group1"
                        type={type}
                        id={`inline-${type}-15`}
                      />
                      <Form.Check
                        inline
                        label="AMD-A520"
                        name="group1"
                        type={type}
                        id={`inline-${type}-16`}
                      />
                      <Form.Check
                        inline
                        label="AMD-X470"
                        name="group1"
                        type={type}
                        id={`inline-${type}-17`}
                      />
                      <Form.Check
                        inline
                        label="AMD-X399"
                        name="group1"
                        type={type}
                        id={`inline-${type}-18`}
                      />
                      <Form.Check
                        inline
                        label="AMD-B450"
                        name="group1"
                        type={type}
                        id={`inline-${type}-19`}
                      />
                      <Form.Check
                        inline
                        label="AMD-X300"
                        name="group1"
                        type={type}
                        id={`inline-${type}-20`}
                      />
                      <Form.Check
                        inline
                        label="AMD-A300"
                        name="group1"
                        type={type}
                        id={`inline-${type}-21`}
                      />
                      
                    </div>
                    
                  ))}
                </Form>
              </center>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
            <Col md>
            <center>
              <h5 className="hCreateModal">Velocidad</h5>
              <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">Hz</span>
                  <input type="text" className="form-control" placeholder="0" aria-label="Hz"
                      aria-describedby="basic-addon1"/>
              </div>
            </center>
            </Col>
            <Col md>
            <center>
              <h5 className="hCreateModal">Watts</h5>
              <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">W</span>
                  <input type="text" className="form-control" placeholder="0" aria-label="Watts"
                      aria-describedby="basic-addon1"/>
              </div>
            </center>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="success">Aceptar</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
function MyVerticallyCenteredModal7(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            GraphicCard
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <br></br>
          <Row className="g-2">
          <Col md>
            <center>
              <h5 className="hCreateModal">Velocidad</h5>
              <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">Hz</span>
                  <input type="text" className="form-control" placeholder="0" aria-label="Hz"
                      aria-describedby="basic-addon1"/>
              </div>
            </center>
            </Col>
            <Col md>
              <center>
                <h5 className="hCreateModal">Tipo de Tarjeta</h5>
                <select id="selectedOpt" className="form-select form-select-mb" aria-label=".form-select-mb example">
                <option value="0" defaultValue>Selecciona</option>
                <option value="1">GDDR5</option>
                <option value="2">GDDR5X</option>
                <option value="3">GDDR6</option>
                </select>
              </center>
            </Col>
            <Col md>
              <center>
              <h5 className="hCreateModal">Watts</h5>
              <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">W</span>
                  <input type="text" className="form-control" placeholder="0" aria-label="Watts"
                      aria-describedby="basic-addon1"/>
              </div>
            </center>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="success">Aceptar</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


export default CreateProduct;