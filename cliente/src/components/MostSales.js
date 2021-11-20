import React from "react";
import { useState, useEffect } from 'react';
import { getProductById } from '../api/ProductAPI';

import { GLOBAL } from "../api/GLOBAL";

const MostSales = (props) => {

    const [product, setProduct] = useState([]);
    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser');
        if(loggedUserJSON) {
            var loggedUser = JSON.parse(loggedUserJSON);
        }

        getProductById(props.id, loggedUser.token).then(res => {
            if(res != undefined) {
                setProduct(res);
            }
        }).catch(err => {
            console.log(err);
        });
    }, [])

    return (
        <div>
            <li>
                <a href="#">
                    <img src={`${GLOBAL.url}/get-image-prod/${product.image}`} alt="" />
                    <span className="product_name">{product.name}</span>
                </a>
                <span className="price">${product.cost}</span>
            </li>
       </div>
    )
}
export default MostSales;