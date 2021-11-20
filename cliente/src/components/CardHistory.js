import React, { useState } from "react";
import Card from 'react-bootstrap/Card'

const CardHistory = (props) => {
    const [isClick, setClick] = useState(false);
    const dateVal = new Date(props.fecha*1000).toLocaleDateString('en-US');
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
                        <Card.Body>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                        </Card.Body>
                    </Card.Body>
                    </div>
                    <Card.Footer>
                        <center><Card.Text style={{fontSize: "15px"}} >Fecha Comprado: {dateVal}</Card.Text></center>
                    </Card.Footer>
                </div>
            </Card> 
            <br></br>
       </div>
    )
}
export default CardHistory;