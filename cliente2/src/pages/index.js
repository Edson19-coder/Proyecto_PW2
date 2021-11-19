import React from "react";
import { Fragment, useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel'
import { Container, CardGroup } from "react-bootstrap";
import { GLOBAL } from "../api/GLOBAL";

import PaginacionNosotros from "../components/PaginacionNosotros";

import CardItem from "../components/CardItem";
import { getProductsIndex, getProductsCarrousel } from "../api/ProductAPI";
const Index = (props) => {
    const [products, setproduct] = useState([]);
    const [products2, setproduct2] = useState([]);
    useEffect(()=>{
        getProductsIndex(1)
            .then(res => {
                console.log(res);
                setproduct(res.data["products"]);
            })
            .catch(err => {
                console.log(err);
            });
        getProductsCarrousel(1)
            .then(res => {
                console.log(res);
                setproduct2(res.data["products"]);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <Fragment>
            <Container id="ContainerIndex">
                <Carousel id="carouselindex">
                    {products2.map((item) => (
                        <Carousel.Item>
                        <img
                        className="d-block w-100 carousel-img" 
                        src={`${GLOBAL.url}/get-image-prod/${item.image}`}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>{item.cost} </h3>
                        <p>{item.name}</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>      
                <hr className="hr"></hr>                  
                <h4 id="title">Lo mas popular</h4><label id="label">Determinado por los usuarios de List Factory</label>
                <CardGroup> 
                    {products.map((item) => (
                        <CardItem key={item._id} id={item.productId} price={item.cost} name={item.name} description={item.description} img={`${GLOBAL.url}/get-image-prod/${item.image}`} ></CardItem>
                    ))}
                </CardGroup>
                <PaginacionNosotros></PaginacionNosotros>
            </Container>
        </Fragment>
    );
}
export default Index;