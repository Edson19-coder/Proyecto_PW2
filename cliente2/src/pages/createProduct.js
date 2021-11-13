import React from "react";
import { Container } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Image } from "react-bootstrap";
const CategoriaButton = async () => {
  var valorSelect = document.getElementById("selectedOpt").value;
  var botoncito;
  var contador;
  if(valorSelect == 0){
    alert("Selecciona una categoria");
  }else{
    for (contador = 1;contador <= 7; contador++) {
      console.log(contador);
      botoncito = document. getElementById("botoncito"+contador);
      botoncito.style.display = "none";    
    }

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

//Cabinet
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
          Gabinete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formSizeCabinet">
              <Form.Label className="hForm">Tamaño</Form.Label>
              <select id="selectedOpt" className="form-select form-select-sm" aria-label=".form-select-sm example">
                <option value="0" defaultValue>Selecciona</option>
                <option value="1">atx</option>
                <option value="2">microatx</option>
                <option value="3">miniatx</option>
              </select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSlots3_5">
              <Form.Label className="hForm">slots3_5</Form.Label>
              <Form.Control type="number" placeholder="Cantidad" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSlots2_5">
              <Form.Label className="hForm">slots2_5</Form.Label>
              <Form.Control type="number" placeholder="Cantidad" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formWatts">
              <Form.Label className="hForm">Watss Consume</Form.Label>
              <Form.Control type="number" placeholder="Cantidad de Watss" />
            </Form.Group>
            <center><Button variant="primary" type="submit">
              Submit
            </Button></center>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
//MotherBoard
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
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formSizeCabinet">
              <Form.Label className="hForm">Tamaño</Form.Label>
              <select id="selectedOpt" className="form-select form-select-sm" aria-label=".form-select-sm example">
                <option value="0" defaultValue>Selecciona</option>
                <option value="1">atx</option>
                <option value="2">microatx</option>
                <option value="3">miniatx</option>
              </select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSlots3_5">
              <Form.Label className="hForm">slots3_5</Form.Label>
              <Form.Control type="number" placeholder="Cantidad" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSlots2_5">
              <Form.Label className="hForm">slots2_5</Form.Label>
              <Form.Control type="number" placeholder="Cantidad" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formWatts">
              <Form.Label className="hForm">Watss Consume</Form.Label>
              <Form.Control type="number" placeholder="Cantidad de Watss" />
            </Form.Group>
            <center><Button variant="primary" type="submit">
              Submit
            </Button></center>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
//PowerSupply
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
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
//RAM
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
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
//Storage
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
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
//Processor
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
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
//Graphics Card
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
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
export default CreateProduct;