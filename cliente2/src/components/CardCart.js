import React, { useState } from "react";
import Card from 'react-bootstrap/Card'
import { Button } from "react-bootstrap";

const CardCart = (props) => {
    const [isClick, setClick] = useState(false);
    return (
        <div>
            <Card className="mb-10 cardSearch">
                <div className="row g-0">
                    <div className="col-md-4">
                        <Card.Img className="cardSearchImg" variant="top" src={props.img} />
                    </div>
                    <div className="col-md-8">
                    <Card.Body>
                        <Card.Title ><span>{props.name}</span><span style={{float: 'right'}}>{props.price}$</span></Card.Title>
                        <hr/>
                        <Card.Text>Gaming enthusiasts are always looking for more performance to
                        get the ultimate experience. Using multiple graphics cards in
                        SLI or Crossfire is a great way to find out just how good it
                        gets. MSI GAMING graphics cards fully support multi GPU
                        technologies.</Card.Text>
                        <Card.Body>
                          <center><Button className="cardBtn">Eliminar</Button></center>
                        </Card.Body>
                    </Card.Body>
                    </div>
                </div>
            </Card> 
            <br></br>
       </div>
    )
}
export default CardCart;