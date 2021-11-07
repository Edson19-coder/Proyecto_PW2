import React, { useState } from "react";
import Card from 'react-bootstrap/Card'
import { Button } from "react-bootstrap";

const CardSearch = (props) => {
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
                        <p className="card-text">
                        Gaming enthusiasts are always looking for more performance to
                        get the ultimate experience. Using multiple graphics cards in
                        SLI or Crossfire is a great way to find out just how good it
                        gets. MSI GAMING graphics cards fully support multi GPU
                        technologies.
                        </p>
                        <Card.Body>
                        <div className="card-body">
                            <button type="button" className="btn btn-primary btn-sm mr-1 my-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-cart-fill" viewBox="0 0 16 16">
                                <path
                                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            Add to cart</button>
                            <button type="button" className="btn btn-light btn-sm mr-1 my-1"><svg xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path
                                d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                            </svg>Details</button>
                        </div>
                        </Card.Body>
                    </Card.Body>
                </div>

                </div>
            </Card> 
            <br></br>
       </div>
    )
}
export default CardSearch;