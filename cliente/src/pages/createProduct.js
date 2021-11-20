import React from "react";
import { Container } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Row, Col, FloatingLabel, InputGroup } from "react-bootstrap";
import { createProduct, uploadImage } from "../api/ProductAPI";
import { createNotification } from "../services/notifications";

const CategoriaButton = async () => {
    var valorSelect = document.getElementById("selectedOpt").value;
    var botoncito;
    var contador;
    
    for (contador = 1;contador <= 7; contador++) {
        botoncito = document. getElementById("botoncito"+contador);
        botoncito.style.display = "none";    
    }

    if(valorSelect == "0"){
        createNotification(201, "Selecciona una categoria.", false, "");
    }else{
        botoncito = document. getElementById("botoncito"+valorSelect);
        botoncito.style.display = "block";    
    }
    
}

// CABINETE INFORMATION
var cabinetSize = null;
var cabinetColor = null;
var cabinetWatts = null;
var cabinetSlot25 = null;
var cabinetSlot35 = null;

//GRAPHIC CARD INFORMATION
var gcType = null;
var gcVel = null;
var gcWatts = null;

//MOTHERBOARD INFORMATION
var mbSocket = null;
var mbChipset = null;
var mbM2 = null;
var mbVelRam = null;
var mbRamMax = null;
var mbSize = null;
var mbWatts = null;

//POWER SUPPLY INFORMATION
var psCertification = null;
var psColor = null;
var psWattage = null;
var psWatts = null;

//PROCESSOR INFORMATION
var pType = null;
var pNucleos = null;
var pChipSets = [];
var pVelocidad = null;
var pWatts = null;
var pSocket = null;

//RAM 
var ramType = null;
var ramSize = null;
var ramWatts = null;

//STORAGE
var stType = null;
var stTypeCon = null;
var spSize = null;
var spWatts = null;

const addProduct = async () => {
  
  var photo = document.getElementById("formFileSm").files[0];
  var productName = document.getElementById("productName").value;
  var productCost = document.getElementById("cost").value;
  var productDescription = document.getElementById("floatingTextarea2").value;

  var sel = document.getElementById("selectedOpt");
  var productCategorie = sel.options[sel.selectedIndex].text;
  productCategorie = productCategorie.toUpperCase();

  if(photo == undefined || productCategorie == "SELECCIONA" || productName == "" || productCost == "" || productDescription == "") {
    createNotification(204, "Llena la información faltante del producto.", false, "");
  } else {

    var response = null;

    var formData = new FormData();
    const imagefile = document.getElementById("formFileSm");
    formData.append("image", imagefile.files[0]);
    formData.append("category", productCategorie);

    var productData = {
      image: photo,
      name: productName, 
      cost: productCost,
      description: productDescription,
      categorie: productCategorie
    }

    const loggedUserJSON = window.localStorage.getItem('loggedUser');
    if(loggedUserJSON) {
      var loggedUser = JSON.parse(loggedUserJSON);
    }

    /* Categoria */

    switch (productCategorie) {
      case "CABINET":
        
        if((cabinetSize == "SELECCIONA" || cabinetSize == null) || (cabinetColor == "SELECCIONA" || cabinetColor == null) || (cabinetWatts == "" || cabinetWatts == null) || 
        (cabinetSlot25 == "" || cabinetSlot25 == null) || (cabinetSlot35 == "" || cabinetSlot35 == null)) {
          createNotification(204, "Llena la información faltante de la categoria.", false, "");
        } else {
          productData.size = cabinetSize;
          productData.color = cabinetColor;
          productData.slots3_5 = cabinetSlot35;
          productData.slots2_5 = cabinetSlot25;
          productData.watts = cabinetWatts;

          response = await createProduct(productData, loggedUser.token);
        }
        break;
        
      case "GRAPHICCARD":

        if((gcType == "SELECCIONA" || gcType == null) || (gcVel == "" || gcVel == null) || (gcWatts == "" || gcWatts == null)) {
          createNotification(204, "Llena la información faltante de la categoria.", false, "");
        } else {
          productData.vel = gcVel;
          productData.type = gcType;
          productData.watts = gcWatts;

          response = await createProduct(productData, loggedUser.token);
        }

        break;

      case "MOTHERBOARD":
        
        if((mbSocket == "SELECCIONA" || mbSocket == null) || (mbChipset == "SELECCIONA" || mbChipset == null) || (mbSize == "SELECCIONA" || mbSize == null) || (mbM2 == undefined || mbM2 == null) || 
        (mbVelRam == "" || mbVelRam == null) || (mbRamMax == "" || mbRamMax == null) || (mbWatts == "" || mbWatts == null)) {
          createNotification(204, "Llena la información faltante de la categoria.", false, "");
        } else {
          productData.socket = mbSocket;
          productData.chipset = mbChipset;
          productData.m2 = mbM2;
          productData.velRam = mbVelRam;
          productData.ramMax = mbRamMax;
          productData.size = mbSize;
          productData.watts = mbWatts;

          response = await createProduct(productData, loggedUser.token);
        }

        break;

      case "POWERSUPPLY":

        if((psCertification == "SELECCIONA" || psCertification == null) || (psColor == "SELECCIONA" || psColor == null) || (psWattage == "" || psWattage == null) || (psWatts == "" || psWatts == null)) {
          createNotification(204, "Llena la información faltante de la categoria.", false, "");
        } else {
          productData.certification = psCertification;
          productData.color = psColor;
          productData.wattage = psWattage;
          productData.watts = psWatts;

          response = await createProduct(productData, loggedUser.token);
        }
        
        break;

      case "PROCESSOR": 

      if((pType == "SELECCIONA" || pType == null) || (pSocket == "SELECCIONA" || pSocket == null) || (pNucleos == "" || pNucleos == null) || 
          (pVelocidad == "" || pVelocidad == null) || (pWatts == "" || pWatts == null) || pChipSets.length === 0) {
        createNotification(204, "Llena la información faltante de la categoria.", false, "");
      } else {
        productData.type = pType;
        productData.cores = pNucleos;
        productData.speed = pVelocidad;
        productData.socket = pSocket;
        productData.chipset = pChipSets;
        productData.watts = pWatts;

        response = await createProduct(productData, loggedUser.token);
      }

        break;

      case "RAM":

        if((ramType == "SELECCIONA" || ramType == null) || (ramSize == "" || ramSize == null) || (ramWatts == "" || ramWatts == null)) {
          createNotification(204, "Llena la información faltante de la categoria.", false, "");
        } else {
          productData.type = ramType;
          productData.size = ramSize;
          productData.watts = ramWatts;

          response = await createProduct(productData, loggedUser.token);
        }

        break;

      case "STORAGE":

        if((stType == "SELECCIONA" || stType == null) || (stTypeCon == "SELECCIONA" || stTypeCon == null) || (spSize == "" || spSize == null) || (spWatts == "" || spWatts == null)) {
          createNotification(204, "Llena la información faltante de la categoria.", false, "");
        } else {
          productData.type = stType;
          productData.typ2 = stTypeCon;
          productData.size = spSize;
          productData.watts = spWatts;
          
          response = await createProduct(productData, loggedUser.token);
        }
        
        break;

      default:
        break;
    }

    var responseImage = null;

    if(response != null) {
      if(response.data["message"].productId != undefined) {
        responseImage = await uploadImage(response.data["message"].productId, formData, loggedUser.token);
      }
  
      if(response && responseImage) {
        var message = response.data["message"];
  
        if(response.status == 200) {
            message = "Producto registrado correctamente.!";
        }
  
        createNotification(response.status, message, true, "/");
      } else {
        createNotification(500, "Error al crear el producto", false, "");
      }
    }
    
  }
  
}

const getInformationCabinet = () => {
  var selSize = document.getElementById("cabinetSize");
  cabinetSize = selSize.options[selSize.selectedIndex].text;
  cabinetSize = cabinetSize.toUpperCase(); 

  var selColor = document.getElementById("cabinetColor");
  cabinetColor = selColor.options[selColor.selectedIndex].text;
  cabinetColor = cabinetColor.toUpperCase();
  
  cabinetWatts = document.getElementById("cabinetWatts").value;
  cabinetSlot25 = document.getElementById("cabinetSlot25").value;
  cabinetSlot35 = document.getElementById("cabinetSlot35").value;

  if(cabinetSize == "SELECCIONA" || cabinetColor == "SELECCIONA" || cabinetWatts == "" || cabinetSlot25 == "" || cabinetSlot35 == "") {
    createNotification(204, "Llena la información faltante.", false, "");
    return false;
  }

  createNotification(200, "Información guardada.", false, "");
  return true;
}

const getInformationGraphicCard = () => {
  var selType = document.getElementById("gcType");
  gcType = selType.options[selType.selectedIndex].text;
  gcType = gcType.toUpperCase(); 

  gcVel = document.getElementById("gcVel").value;
  gcWatts = document.getElementById("gcWatts").value;

  if(gcType == "SELECCIONA" || gcVel == "" || gcWatts == "") {
    createNotification(204, "Llena la información faltante.", false, "");
    return false;
  }

  createNotification(200, "Información guardada.", false, "");
  return true;
}

const getInformationMotherBoard = () => {
  var selMbSocket = document.getElementById("mbSocket");
  mbSocket = selMbSocket.options[selMbSocket.selectedIndex].text;
  mbSocket = mbSocket.toUpperCase(); 

  var selMbChipset = document.getElementById("mbChipset");
  mbChipset = selMbChipset.options[selMbChipset.selectedIndex].text;
  mbChipset = mbChipset.toUpperCase(); 

  var selMbSize = document.getElementById("mbTamanio");
  mbSize = selMbSize.options[selMbSize.selectedIndex].text;
  mbSize = mbSize.toUpperCase(); 

  mbM2 = document.getElementById("checkboxM2").checked;
  mbVelRam = document.getElementById("mbVel").value;
  mbRamMax = document.getElementById("mbRamMax").value;
  mbWatts = document.getElementById("mbWatts").value;
  
  if(mbSocket == "SELECCIONA" || mbChipset == "SELECCIONA" || mbSize == "SELECCIONA" || mbM2 == undefined || mbVelRam == "" || 
    mbRamMax == "" || mbWatts == "") {
    createNotification(204, "Llena la información faltante.", false, "");
    return false;
  }

  createNotification(200, "Información guardada.", false, "");
  return true;

}

const getInformationPowerSupply = () => {
  var selPsCertification = document.getElementById("psCert");
  psCertification = selPsCertification.options[selPsCertification.selectedIndex].text;
  psCertification = psCertification.toUpperCase(); 

  var selPsColor = document.getElementById("psColor");
  psColor = selPsColor.options[selPsColor.selectedIndex].text;
  psColor = psColor.toUpperCase(); 

  psWattage = document.getElementById("psWattage").value;
  psWatts = document.getElementById("psWatts").value;

  if(psCertification == "SELECCIONA" || psColor == "SELECCIONA"|| psWattage == "" || psWatts == "") {
    createNotification(204, "Llena la información faltante.", false, "");
    return false;
  }

  createNotification(200, "Información guardada.", false, "");
  return true;
}

const getInformationProcessor = () => {
  var selPType = document.getElementById("pType");
  pType = selPType.options[selPType.selectedIndex].text;
  pType = pType.toUpperCase(); 

  var selPSocket = document.getElementById("pSocket");
  pSocket = selPSocket.options[selPSocket.selectedIndex].text;
  pSocket = pSocket.toUpperCase(); 
  
  pNucleos = document.getElementById("pNucleos").value;
  pVelocidad = document.getElementById("pVel").value;
  pWatts = document.getElementById("pWatts").value;

  for(var i = 1; i < 21; i++) {
      if(document.getElementById(`inline-checkbox-${i}`).checked == true) {
        pChipSets.push(document.getElementById(`inline-checkbox-${i}`).parentElement.textContent.trim());
      }
  }

  if(pType == "SELECCIONA" || pSocket == "SELECCIONA" || pNucleos == "" || pVelocidad == "" || pWatts == "" || pChipSets.length === 0) {
    createNotification(204, "Llena la información faltante.", false, "");
    return false;
  }

  createNotification(200, "Información guardada.", false, "");
  return true;
  
}

const getInformationRam = () => {
  var selRamType = document.getElementById("ramType");
  ramType = selRamType.options[selRamType.selectedIndex].text;
  ramType = ramType.toUpperCase(); 

  ramSize = document.getElementById("ramSize").value;
  ramWatts = document.getElementById("ramWatts").value;

  if(ramType == "SELECCIONA" || ramSize == "" || ramWatts == "") {
    createNotification(204, "Llena la información faltante.", false, "");
    return false;
  }

  createNotification(200, "Información guardada.", false, "");
  return true;
}

const getInformationStorage = () => {
  var selStType = document.getElementById("stType");
  stType = selStType.options[selStType.selectedIndex].text;
  stType = stType.toUpperCase(); 

  var selStTypeCon = document.getElementById("stTypeCon");
  stTypeCon = selStTypeCon.options[selStTypeCon.selectedIndex].text;
  stTypeCon = stTypeCon.toUpperCase(); 

  spSize = document.getElementById("spSize").value;
  spWatts = document.getElementById("spWatts").value;

  if(stType == "SELECCIONA" || stTypeCon == "SELECCIONA" || spSize == "" || spWatts == "") {
    createNotification(204, "Llena la información faltante.", false, "");
    return false;
  }

  createNotification(200, "Información guardada.", false, "");
  return true;
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
                        <input type="text" className="form-control" id="productName" />
                    </div>
                </div>
                <br/>
                <span className="row justify-content-center">
                    <div className="mb-3 col-4" >
                        <h5 className="hCreateProd">Precio</h5>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">$</span>
                            <input type="text" id="cost" className="form-control" placeholder="Precio" aria-label="Precio"
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
                <button className="btn btn-success col-3" onClick={addProduct}>
                    Crear
                </button>
                </div>
                <br/>
            </Container>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                onHideSaveCabinet={() => {
                  if(getInformationCabinet()) {
                    setModalShow(false);
                  }
                }}
            />
            <MyVerticallyCenteredModal2
                show={modalShow2}
                onHide={() => setModalShow2(false)}
                onHideSaveMB={() => {
                  if(getInformationMotherBoard()) {
                    setModalShow2(false);
                  }
                }}
            />
            <MyVerticallyCenteredModal3
                show={modalShow3}
                onHide={() => setModalShow3(false)}
                onHideSavePS={() => {
                  if(getInformationPowerSupply()) {
                    setModalShow3(false);
                  }
                }}
            />
            <MyVerticallyCenteredModal4
                show={modalShow4}
                onHide={() => setModalShow4(false)}
                onHideSaveRam={() => {
                  if(getInformationRam()) {
                    setModalShow4(false);
                  }
                }}
            />
            <MyVerticallyCenteredModal5
                show={modalShow5}
                onHide={() => setModalShow5(false)}
                onHideSaveStorage={() => {
                  if(getInformationStorage()) {
                    setModalShow5(false);
                  }
                }}
            />
            <MyVerticallyCenteredModal6
                show={modalShow6}
                onHide={() => setModalShow6(false)}
                onHideSaveP={() => {
                  if(getInformationProcessor()) {
                    setModalShow6(false);
                  }
                }}
            />
            <MyVerticallyCenteredModal7
                show={modalShow7}
                onHide={() => setModalShow7(false)}
                onHideSaveGC={() => {
                  if(getInformationGraphicCard()) {
                    setModalShow7(false);
                  }
                }}
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
                <select id="cabinetSize" className="form-select form-select-mb" aria-label=".form-select-mb example">
                <option value="0" defaultValue>Selecciona</option>
                <option value="1">ATX</option>
                <option value="2">MICROATX</option>
                <option value="3">MINIATX</option>
                </select>
              </center>
            </Col>
            <Col md>
              <center>
                <h5 className="hCreateModal">Color</h5>
                <select id="cabinetColor" className="form-select form-select-mb" aria-label=".form-select-mb example">
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
                  <input type="text" id="cabinetWatts" className="form-control" placeholder="0" aria-label="Watts"
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
                <input type="text" id="cabinetSlot25" className="form-control" placeholder="0" aria-label="0"
                    aria-describedby="basic-addon1"/>
            </center>
            </Col>
            <Col md>
            <center>
              <h5 className="hCreateModal">Cantidad de Slots 3,5</h5>
                <input type="text" id="cabinetSlot35" className="form-control" placeholder="0" aria-label="0"
                    aria-describedby="basic-addon1"/>
            </center>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHideSaveCabinet} variant="success">Aceptar</Button>
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
                <select id="mbSocket" className="form-select form-select-mb" aria-label=".form-select-mb example">
                <option value="0" defaultValue>Selecciona</option>
                <option value="1">AM4</option>
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
                <select id="mbChipset" className="form-select form-select-mb" aria-label=".form-select-mb example">
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
                <Form.Group className="mb-3">
                  <Form.Check type="switch" id="checkboxM2" label="Si posee m2" />
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
                <input type="text" id="mbVel" className="form-control" placeholder="0" aria-label="0"
                    aria-describedby="basic-addon1"/>
            </center>
            </Col>
            <Col md>
              <center>
              <h5 className="hCreateModal">Ram Máxima</h5>
                <input type="text" id="mbRamMax" className="form-control" placeholder="0" aria-label="0"
                    aria-describedby="basic-addon1"/>
              </center>
            </Col>
          </Row>
          <Row className="g-2">
            <Col md>
            <center>
                <h5 className="hCreateModal">Tamaño</h5>
                <select id="mbTamanio" className="form-select form-select-mb" aria-label=".form-select-mb example">
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
                  <input type="text" id="mbWatts" className="form-control" placeholder="0" aria-label="Watts"
                      aria-describedby="basic-addon1"/>
              </div>
            </center>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHideSaveMB} variant="success">Aceptar</Button>
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
                <select id="psCert" className="form-select form-select-mb" aria-label=".form-select-mb example">
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
                <select id="psColor" className="form-select form-select-mb" aria-label=".form-select-mb example">
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
                  <input type="text" id="psWattage" className="form-control" placeholder="0" aria-label="Watts"
                      aria-describedby="basic-addon1"/>
              </div>
              </center>
            </Col>
            <Col md>
            <center>
              <h5 className="hCreateModal">Watts</h5>
              <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">W</span>
                  <input type="text" id="psWatts" className="form-control" placeholder="0" aria-label="Watts"
                      aria-describedby="basic-addon1"/>
              </div>
            </center>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHideSavePS} variant="success">Aceptar</Button>
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
                <select id="ramType" className="form-select form-select-mb" aria-label=".form-select-mb example">
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
                  <input type="text" id="ramSize" className="form-control" placeholder="0" aria-label="Watts"
                      aria-describedby="basic-addon1"/>
              </div>
            </center>
            </Col>
            <Col md>
            <center>
              <h5 className="hCreateModal">Watts</h5>
              <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">W</span>
                  <input type="text" id="ramWatts" className="form-control" placeholder="0" aria-label="Watts"
                      aria-describedby="basic-addon1"/>
              </div>
            </center>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHideSaveRam} variant="success">Aceptar</Button>
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
                <select id="stType" className="form-select form-select-mb" aria-label=".form-select-mb example">
                <option value="0" defaultValue>Selecciona</option>
                <option value="1">HDD</option>
                <option value="2">SSD</option>
                </select>
              </center>
            </Col>
            <Col md>
            <center>
                <h5 className="hCreateModal">Tipo de Conexión</h5>
                <select id="stTypeCon" className="form-select form-select-mb" aria-label=".form-select-mb example">
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
                  <input type="text" id="spSize" className="form-control" placeholder="0" aria-label="Watts"
                      aria-describedby="basic-addon1"/>
              </div>
            </center>
            </Col>
            <Col md>
            <center>
              <h5 className="hCreateModal">Watts</h5>
              <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">W</span>
                  <input type="text" id="spWatts" className="form-control" placeholder="0" aria-label="Watts"
                      aria-describedby="basic-addon1"/>
              </div>
            </center>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHideSaveStorage} variant="success">Aceptar</Button>
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
                <select id="pType" className="form-select form-select-mb" aria-label=".form-select-mb example">
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
                    <input type="text" id="pNucleos" className="form-control" placeholder="0" aria-label="Núcleos"
                        aria-describedby="basic-addon1"/>
                </div>
              </center>
            </Col>
          </Row>
          <br></br>
          <Row className="g-2">
          <Col md>
              <center>
                <h5 className="hCreateModal">Socket</h5>
                <select id="pSocket" className="form-select form-select-mb" aria-label=".form-select-mb example">
                <option value="0" defaultValue>Selecciona</option>
                <option value="1">AM4</option>
                <option value="2">SPGA</option>
                <option value="3">PPGA</option>
                <option value="4">uPGA</option>
                <option value="5">FCBGA</option>
                <option value="6">LGA</option>
                </select>
              </center>
            </Col>
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
                  <input type="text" id="pVel" className="form-control" placeholder="0" aria-label="Hz"
                      aria-describedby="basic-addon1"/>
              </div>
            </center>
            </Col>
            <Col md>
            <center>
              <h5 className="hCreateModal">Watts</h5>
              <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">W</span>
                  <input type="text" id="pWatts" className="form-control" placeholder="0" aria-label="Watts"
                      aria-describedby="basic-addon1"/>
              </div>
            </center>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHideSaveP} variant="success">Aceptar</Button>
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
                  <input type="text" className="form-control" id="gcVel" placeholder="0" aria-label="Hz"
                      aria-describedby="basic-addon1"/>
              </div>
            </center>
            </Col>
            <Col md>
              <center>
                <h5 className="hCreateModal">Tipo de Tarjeta</h5>
                <select id="gcType" className="form-select form-select-mb" aria-label=".form-select-mb example">
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
                  <input type="text" id="gcWatts" className="form-control" placeholder="0" aria-label="Watts"
                      aria-describedby="basic-addon1"/>
              </div>
            </center>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHideSaveGC} variant="success">Aceptar</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


export default CreateProduct;