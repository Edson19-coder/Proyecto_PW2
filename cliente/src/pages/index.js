import React from "react";
import { Fragment, useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel'
import { Container, CardGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { GLOBAL } from "../api/GLOBAL";

import PaginacionNosotros from "../components/PaginacionNosotros";

import CardItem from "../components/CardItem";
import { getProductsIndex, getProductsCarrousel } from "../api/ProductAPI";
const Index = (props) => {

    const [totalPages = 1, setTotalPages] = useState();
    const [page = 1, setPage] = useState();
    const [products, setproduct] = useState([]);
    const [products2, setproduct2] = useState([]);

    useEffect(()=>{

        getProductsIndex(page)
            .then(res => {
                console.log(res);
                setTotalPages(res.data["pages"]);
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

    const changePage = (event) => {
        event.preventDefault();
        var buttonClcked = event.target.id;


        if(buttonClcked === "prevPage") {
            var result = page;
            result--;

            if(result >= 1) {
                setPage(result);

                getProductsIndex(result)
                .then(res => {
                    console.log(res);
                    setTotalPages(res.data["pages"]);
                    setproduct(res.data["products"]);
                })
                .catch(err => {
                    console.log(err);
                });
            }
        } 
        else if (buttonClcked === "nextPage") {
            var result = page;
            result++;

            if(result <= totalPages) {
                setPage(result);

                getProductsIndex(result)
                .then(res => {
                    console.log(res);
                    setTotalPages(res.data["pages"]);
                    setproduct(res.data["products"]);
                })
                .catch(err => {
                    console.log(err);
                });
            }
        } else {
            var selectedPage = parseInt(event.target.text, 10);
            setPage(selectedPage);
            getProductsIndex(selectedPage)
            .then(res => {
                console.log(res);
                setTotalPages(res.data["pages"]);
                setproduct(res.data["products"]);
            })
            .catch(err => {
                console.log(err);
            });
        }
    }

    return (
        <Fragment>
            <Container id="ContainerIndex">
                <Carousel id="carouselindex">
                    {products2.map((item) => (
                        <Carousel.Item key={item._id}>
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
                        <CardItem key={item._id} id={item._id} price={item.cost} name={item.name} description={item.description} img={`${GLOBAL.url}/get-image-prod/${item.image}`} ></CardItem>
                    ))}
                </CardGroup>
                <PaginacionNosotros totalPages={totalPages} function={changePage}></PaginacionNosotros>
            </Container>
        </Fragment>
    );
}
export default Index;