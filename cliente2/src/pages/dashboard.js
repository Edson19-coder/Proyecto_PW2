import React from 'react'
import { Fragment } from "react";
import { Container } from "react-bootstrap";

import { BsArrowUpShort, BsCart, BsCurrencyDollar } from "react-icons/bs";


const dashboard = (props) => {
    return (
        <Fragment>
            <Container>
                <div className="home-section">
                    <div className="home-content">
                        <div className="overview-boxes">
                            <div className="box">
                                <div className="left-side">
                                    <div className="box_topic">Order List</div>
                                    <div className="number">40,876</div>
                                    <div className="indicator">
                                        <BsArrowUpShort className="i" />
                                        <span className="text">Up from Yesterday</span>
                                    </div>                                
                                </div>
                                <BsCart className="cart" />
                            </div>
                            <div className="box">
                                <div className="left-side">
                                    <div className="box_topic">Total Sales</div>
                                    <div className="number">40,876</div>
                                    <div className="indicator">
                                        <BsArrowUpShort className="i" />
                                        <span className="text">Up from Yesterday</span>
                                    </div>                                
                                </div>
                                <BsCurrencyDollar className="money" />
                            </div>
                            <div className="box">
                                <div className="left-side">
                                    <div className="box_topic">Total Sales</div>
                                    <div className="number">40,876</div>
                                    <div className="indicator">
                                        <BsArrowUpShort className="i" />
                                        <span className="text">Up from Yesterday</span>
                                    </div>                                
                                </div>
                                <BsCurrencyDollar className="money" />
                            </div>
                            <div className="box">
                                <div className="left-side">
                                    <div className="box_topic">Total Sales</div>
                                    <div className="number">40,876</div>
                                    <div className="indicator">
                                        <BsArrowUpShort className="i" />
                                        <span className="text">Up from Yesterday</span>
                                    </div>                                
                                </div>
                                <BsCurrencyDollar className="money" />
                            </div>
                        </div>
                    </div>
                    <div className="sales-boxes">
                            <div className="recent-sale box">
                                <div className="title">Recent Sales</div>
                                <div className="sales-details">
                                    <ul className="details">
                                        <li className="topic">Date</li>
                                        <li><a href="#">02 Jan 2021</a></li>
                                        <li><a href="#">02 Jan 2021</a></li>
                                        <li><a href="#">02 Jan 2021</a></li>
                                        <li><a href="#">02 Jan 2021</a></li>
                                        <li><a href="#">02 Jan 2021</a></li>
                                        <li><a href="#">02 Jan 2021</a></li>
                                    </ul>
                                    <ul className="details">
                                        <li className="topic">Customer</li>
                                        <li><a href="#">PainChip</a></li>
                                        <li><a href="#">PainChip</a></li>
                                        <li><a href="#">PainChip</a></li>
                                        <li><a href="#">PainChip</a></li>
                                        <li><a href="#">PainChip</a></li>
                                        <li><a href="#">PainChip</a></li>
                                    </ul>

                                </div>
                            </div>
                            <div className="recent-sale box">
                                <div className="title">Top Sales</div>
                                <div className="sales-details">
                                </div>
                            </div>
                        </div>

                </div>
            </Container>
        </Fragment>
    );
}
export default dashboard;