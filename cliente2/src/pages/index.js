import React from "react";
import { Fragment } from "react";
import Carousel from 'react-bootstrap/Carousel'
import { Container, CardGroup } from "react-bootstrap";

import CardItem from "../components/CardItem";


const index = (props) => {
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
                    <CardItem id="1" price="5000" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                    <CardItem id="12" price="5001" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                    <CardItem id="13" price="5002" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                    <CardItem id="14" price="5003" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                    <CardItem id="15" price="5004" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                    <CardItem id="16" price="5005" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                    <CardItem id="17" price="5006" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                    <CardItem id="18" price="5007" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                    <CardItem id="19" price="5008" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                    <CardItem id="10" price="5009" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                </CardGroup>
            </Container>
        </Fragment>
    );
}
export default index;