import React from 'react'
import NavBar from './NavBar';
import Carousel from 'react-bootstrap/Carousel'
import HomeCards from './HomeCards'

const divStyle = {   backgroundColor: '#8b8e8f'};
const ofertaStyle = {
    backgroundColor: '#d81e1e',
    border: '2px solid',
    borderRadius: '1em'
};
const nuevoStyle = {
    backgroundColor: '#1ed8d8',
    border: '2px solid',
    borderRadius: '1em'
};


export default function Home() {
    return (
        <div>
            <NavBar />
            <div style={divStyle} className="container-fluid">
                {/* Carrusel */}
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/736x/8d/75/4d/8d754d52c6c1007ca78d60fbdadfaab1.jpg"
                        alt="First slide"
                        height="400" 
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/09/MdhoETzFvrzaKiqfuymfDA-e1599664003985.jpg"
                        alt="Second slide"
                        height="400" 
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/736x/8d/75/4d/8d754d52c6c1007ca78d60fbdadfaab1.jpg"
                        alt="Third slide"
                        height="400" 
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <br></br>
                {/* Cards */}
                <div className="container-fluid card-group">
                    <div className="container-sm">
                        <div className="col-1" style={ofertaStyle}>
                        <h3>Ofertas</h3>
                        </div>
                        <br></br>
                        <div class="card-group">
                            <HomeCards/>
                            <HomeCards/>
                            <HomeCards/>
                            <HomeCards/>
                        </div>
                    </div>
                </div>

                <br></br>
                {/* Cards */}
                <div className="container-fluid card-group">
                    <div className="container-sm">
                        <div className="col-1" style={nuevoStyle}>
                        <h3>Nuevo</h3>
                        </div>
                        <br></br>
                        <div class="card-group">
                            <HomeCards/>
                            <HomeCards/>
                            <HomeCards/>
                            <HomeCards/>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
