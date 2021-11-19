import React from 'react';
import { useState, useEffect } from 'react';
import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { GLOBAL } from "../api/GLOBAL";
import { createNotification } from "../services/notifications";

import CardCart from "../components/CardCart";
import PaginacionNosotros from "../components/PaginacionNosotros";
import { getCart, deleteCart, deleteProductFromCart } from '../api/CartAPI';
import { createHistory } from '../api/HistoryAPI';

var productsM = [];

const Cart = (props) => {

    const [total, setTotal] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser');
        if(loggedUserJSON) {
            var loggedUser = JSON.parse(loggedUserJSON);
        }

        getCart(loggedUser.token).then(res => {
            if(res != undefined) {
                var products = res["products"];
                productsM = products;
                var totalProducts = 0; 

                products.forEach(element => {
                    totalProducts = totalProducts + element.cost;
                });

                setTotal(totalProducts);
                setProducts(products);
            }
        }).catch(err => {
            console.log(err);
        });
        
    }, [])

    const delCart = async () => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser');
        if(loggedUserJSON) {
            var loggedUser = JSON.parse(loggedUserJSON);
        }

        deleteCart(loggedUser.token).then(res => {
            console.log(res);
            
            
            if(res.status == 200 && productsM.length > 0) {
                createNotification(200, "Carrito borrado correctamente!", false, "");    
                productsM = [];
                setTotal(0);
                setProducts(productsM);
            } else {
                createNotification(201, "No hay productos en el carrito!", false, "");    
            }

        }).catch(err => {
            console.log(err);
        });

    }

    const deleteProductCart = async (event) => {
        event.preventDefault();
        var productToDelete = event.target.id;

        const loggedUserJSON = window.localStorage.getItem('loggedUser');
        if(loggedUserJSON) {
            var loggedUser = JSON.parse(loggedUserJSON);
        }

        var response = await deleteProductFromCart(productToDelete, loggedUser.token);

        if(response.status == 200) {

            getCart(loggedUser.token).then(res => {
                if(res != undefined) {
                    var products = res["products"];
                    productsM = products;
                    var totalProducts = 0; 
    
                    products.forEach(element => {
                        totalProducts = totalProducts + element.cost;
                    });
    
                    setTotal(totalProducts);
                    setProducts(products);
                }
            }).catch(err => {
                console.log(err);
            });
            
            createNotification(200, "Producto borrado correctamente!", false, "");    
        }
    }

    const buyCart = () => {

        var countSuccess = 0;

        const loggedUserJSON = window.localStorage.getItem('loggedUser');
        if(loggedUserJSON) {
            var loggedUser = JSON.parse(loggedUserJSON);
        }

        productsM.forEach(async element => {
            var buyCartData = {
                product: element._id
            }

            var response = await createHistory(buyCartData, loggedUser.token);            

            if(response.status == 200 && countSuccess != productsM.length) {
                countSuccess ++;
            }

            if (countSuccess === (productsM.length - 1)) {
                delCart();
                createNotification(200, "Compra realizada!", false, "");
            }
        });

    }

    return (
        <Fragment>
            <Container id="" className="container-fluid" >
                <h4 id="title">Carrito</h4><label id="label">Elementos en el carro</label>
                <hr className="hr"></hr>
                <div style={{ height: "600px", width: "auto", overflowY: "scroll" }}>
                    {products.map((item) => (
                        <CardCart key={item._id} id={item._id} price={item.cost} name={item.name} description={item.description} functionName={deleteProductCart} img={`${GLOBAL.url}/get-image-prod/${item.image}`} />
                    ))}
                </div>
            </Container>
            <hr/>
            <div className="row col-12">
                <center><h4><span style={{color: "#d81e1e"}}>Total: </span><span style={{color: "white"}}>${total} </span></h4></center>
            </div>

            <div className="row justify-content-end">
                <div className="row col-12">
                    <div className="col-6">
                        <center>
                            <button type="button" onClick={delCart} className="btn NavbarBtn col-10 ">Borrar carrito</button>
                        </center>
                    </div>
                    <div className="col-6">
                        <center>
                            <button type="button" onClick={buyCart} className="btn NavbarBtn col-10">Comprar</button>
                        </center>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Cart;