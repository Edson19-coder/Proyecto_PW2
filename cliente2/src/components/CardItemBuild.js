import React, { useState } from "react";
import Card from 'react-bootstrap/Card'
import { Button } from "react-bootstrap";

const CardItemBuild = (props) => {
    let hrefLink = '/productItem/'+props.id;
    console.log(hrefLink)
    return (
        <div>
            <Card className="col-sm-4 cardItem">
                <Card.Header>
                    <Card.Title style={{margin: '0px'}}><span>{props.name}</span><span style={{float: 'right'}}>{props.price}$</span></Card.Title>
                </Card.Header>                
                <Card.Body>
                    <Card.Img className="cardImg" variant="top" src={props.img} />
                    <hr/>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-6">
                                <center><Button className="cardBtn" href={hrefLink}>Detalles</Button></center>
                            </div>
                            <div className="col-6">
                                <center><Button className="cardBtn btn-success" onClick={props.functionName}>Añadir</Button></center>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card> 
       </div>
    )
}
export default CardItemBuild;