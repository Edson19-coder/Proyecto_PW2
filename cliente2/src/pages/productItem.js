import React from "react";
import { Fragment } from "react";
import { Container, Button, Card } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup'


const productItem = (props) => {
    return (
        <Fragment>
            <Container  className="container-fluid align-items-center">
                <Container id="ContainerProduct" className="container-sm items-align-center text-center col-10">
                <div className="row">
                    <br/>
                    <div className="col-8">
                    <br/>
                    <img
                    src="https://cdn.vox-cdn.com/thumbor/2QvgYM5Z2w02Qb-bdauWMIAqmyk=/0x0:1200x800/1200x800/filters:focal(504x304:696x496)/cdn.vox-cdn.com/uploads/chorus_image/image/49907377/gtx-1080-msi.0.jpg"
                    className="img-fluid rounded-start col-10"
                    alt="..."
                    />
                    </div>
                    <div className="col-4">
                        <br/>
                        <Card.Title><span>GTX 1080</span><span style={{float: 'right'}}>3000$</span></Card.Title>
                        <Card.Text>Gaming enthusiasts are always looking for more performance to
                            get the ultimate experience. Using multiple graphics cards in
                            SLI or Crossfire is a great way to find out just how good it
                            gets. MSI GAMING graphics cards fully support multi GPU
                            technologies.
                        </Card.Text>
                        <hr/>
                        <Card.Title><span>Detalles</span></Card.Title>
                        <Card.Text>Gaming enthusiasts are always looking for more performance to
                            get the ultimate experience. Using multiple graphics cards in
                            SLI or Crossfire is a great way to find out just how good it
                            gets. MSI GAMING graphics cards fully support multi GPU
                            technologies.
                        </Card.Text>
                        
                    </div>

                </div>
                </Container>
            </Container>
        </Fragment>
    );
}
export default productItem;