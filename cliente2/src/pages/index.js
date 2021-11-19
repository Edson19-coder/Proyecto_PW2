import React from "react";
import { Fragment, useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel'
import { Container, CardGroup } from "react-bootstrap";
import { GLOBAL } from "../api/GLOBAL";

import PaginacionNosotros from "../components/PaginacionNosotros";

import CardItem from "../components/CardItem";
import { getProductsIndex } from "../api/ProductAPI";
const Index = (props) => {
    const [products, setproduct] = useState([]);
    useEffect(()=>{
        getProductsIndex(1)
            .then(res => {
                console.log(res);
                setproduct(res.data["products"]);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <Fragment>
            <Container id="ContainerIndex">
                <Carousel id="carouselindex">
                    <Carousel.Item>
                        <img
                        className="d-block w-100 carousel-img"
                        src="https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/09/MdhoETzFvrzaKiqfuymfDA-e1599664003985.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 carousel-img" 
                        src="https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/09/MdhoETzFvrzaKiqfuymfDA-e1599664003985.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 carousel-img"
                        src="https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/09/MdhoETzFvrzaKiqfuymfDA-e1599664003985.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
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