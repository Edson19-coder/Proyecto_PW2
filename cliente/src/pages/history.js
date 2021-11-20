import React from "react";
import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { useState, useEffect } from 'react';

import CardHistory from "../components/CardHistory";
import { getHistory } from "../api/HistoryAPI";
import { GLOBAL } from "../api/GLOBAL";


const History = (props) => {

    const [purchase, setPurchase] = useState([]);
    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser');
        if(loggedUserJSON) {
            var loggedUser = JSON.parse(loggedUserJSON);
        }

        getHistory(loggedUser.token).then(res => {
            if(res != undefined) {
                console.log(res);
                setPurchase(res.data);
            }
        }).catch(err => {
            console.log(err);
        });
        
    }, [])

    return (
        <Fragment>
            <Container id="" className="container-fluid">
                <h4 id="title">Historial</h4><label id="label">Elementos comprados</label>
                <hr className="hr"></hr>
                <div style={{ height: "600px", width: "auto", overflowY: "scroll" }}>
                    {purchase.map((item) => (
                        <CardHistory key={item._id} id="1"  price={item.product.cost} name={item.product.name} fecha={item.date} img={`${GLOBAL.url}/get-image-prod/${item.product.image}`} />
                    ))}
                </div>
            </Container>

        </Fragment>
    );
}
export default History;