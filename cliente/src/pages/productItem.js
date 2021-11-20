import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Container, Button, Card } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup'
import { useParams } from "react-router-dom";
import { getProductById, getProductByIdAndCategory } from "../api/ProductAPI";
import { GLOBAL } from "../api/GLOBAL";

const ProductItem = (props) => {
    let { productId } = useParams();

    const [product, setProduct] = useState([]);
    useEffect(() => {

        getProductById(productId).then(res => {
            if(res != undefined) {
                setProduct(res);
            }
        }).catch(err => {
            console.log(err);
        });
    }, [])

    return (
        <Fragment>
            <Container  className="container-fluid align-items-center">
                <Container id="ContainerProduct" className="container-sm items-align-center text-center col-10">
                <div className="row">
                    <br/>
                    <div className="col-8">
                    <br/>
                    <img
                    src={`${GLOBAL.url}/get-image-prod/${product.image}`}
                    className="img-fluid rounded-start col-10"
                    alt="..."
                    />
                    </div>
                    <div className="col-4">
                        <br/>
                        <Card.Title><span style={{float: 'left'}}>{product.name}</span><span style={{float: 'right'}}>${product.cost}</span></Card.Title>
                        <br/>
                        <Card.Title><span>Detalles</span></Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Card.Title><span>Categoria: {product.categorie}</span></Card.Title>
                    </div>

                </div>
                </Container>
            </Container>
        </Fragment>
    );
}
export default ProductItem;