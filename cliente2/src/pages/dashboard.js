import React from 'react'
import { Fragment } from "react";
import { Container, Table } from "react-bootstrap";
import { BsArrowUpShort, BsCart, BsCurrencyDollar, BsHandbagFill } from "react-icons/bs";
import { useState, useEffect } from 'react';
import { GLOBAL } from "../api/GLOBAL";
import { getReportSales, totalActiveCarts, getTotalSales, getTotalActiveProducts, getReportTopSellingProducts } from '../api/DashBoardAPI';
import MostSales from '../components/MostSales';


const Dashboard = (props) => {

    const [totalActiveProducts, setTotalActiveProducts] = useState([]);
    const [totalSales, setTotalSales] = useState([]);
    const [activeCart, setActiveCart] = useState([]);
    const [purchases, setPurchases] = useState([]);
    const [mostPurchases, setMostPurchases] = useState([]);
    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser');
        if(loggedUserJSON) {
            var loggedUser = JSON.parse(loggedUserJSON);
        }

        getReportSales(loggedUser.token).then(res => {
            if(res != undefined) {
                setPurchases(res);
            }
        }).catch(err => {
            console.log(err);
        });

        totalActiveCarts(loggedUser.token).then(res => {
            if(res != undefined) {
                setActiveCart(res.totalActiveCarts);
            }
        }).catch(err => {
            console.log(err);
        });

        getTotalSales(loggedUser.token).then(res => {
            if(res != undefined) {
                setTotalSales(res.totalSales);
            }
        }).catch(err => {
            console.log(err);
        });

        getTotalActiveProducts(loggedUser.token).then(res => {
            if(res != undefined) {
                setTotalActiveProducts(res.totalActiveProducts);
            }
        }).catch(err => {
            console.log(err);
        });
        
        getReportTopSellingProducts(loggedUser.token).then( async res => {
            if(res != undefined) {
                setMostPurchases(res);
            }
        }).catch(err => {
            console.log(err);
        });

    }, [])


    return (
        <Fragment>
            <Container>
                <div className="home-section">
                    <div className="home-content">
                        <div className="overview-boxes">
                            <div className="box">
                                <div className="left-side">
                                    <div className="box_topic">Carritos activos</div>
                                    <div className="number">{activeCart}</div>
                                    <div className="indicator">
                                        <BsArrowUpShort className="i" />
                                        <span className="text">Up from Yesterday</span>
                                    </div>                                
                                </div>
                                <BsCart className="cart" />
                            </div>
                            <div className="box">
                                <div className="left-side">
                                    <div className="box_topic">Ventas totales</div>
                                    <div className="number">{totalSales}</div>
                                    <div className="indicator">
                                        <BsArrowUpShort className="i" />
                                        <span className="text">Up from Yesterday</span>
                                    </div>                                
                                </div>
                                <BsCurrencyDollar className="money" />
                            </div>
                            <div className="box">
                                <div className="left-side">
                                    <div className="box_topic">Productos registrados</div>
                                    <div className="number">{totalActiveProducts}</div>
                                    <div className="indicator">
                                        <BsArrowUpShort className="i" />
                                        <span className="text">Up from Yesterday</span>
                                    </div>                                
                                </div>
                                <BsHandbagFill className="cart" />
                            </div>
                        </div>
                    </div>
                    <div className="sales-boxes">
                            <div className="recent-sale box">
                                <div className="title">Ultimas compras</div>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th>Fecha</th>
                                        <th>Usuario</th>
                                        <th>Producto</th>
                                        <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {purchases.map((item) => (
                                            <tr key={item._id}>
                                                <td>{item.date}</td>
                                                <td>{item.userId.name + " " + item.userId.surname}</td>
                                                <td>{item.product.name}</td>
                                                <td>${item.product.cost}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                            <div className="top-sales box">
                                <div className="title">Top Selling Product</div>
                                <ul>
                                    {mostPurchases.map((item) => (
                                       <MostSales key={item._id} id={item._id}></MostSales>
                                    ))}
                                </ul>
                            </div>
                        </div>

                </div>
            </Container>
        </Fragment>
    );
}
export default Dashboard;