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
                        <Card.Title ><span>{props.name}</span><span style={{float: 'right'}}>${props.price}</span></Card.Title>
                        <hr/>
                        <Card.Text>{props.description}</Card.Text>
                        <Card.Body>
                          <center><Button className="cardCartBtn col-6" id={props.id} onClick={props.functionName}>Eliminar</Button></center>
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