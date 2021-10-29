import React from 'react'
import NavBar from './NavBar';
import LargeCard from './LargeCard';
const divStyle = {   backgroundColor: '#8b8e8f'};

export default function Carrito() {
    return (
        <div style={divStyle}>
            <NavBar />
            <div style={divStyle} className="container-fluid">
                <br />
                <h2 style={{color: 'white'}}>Carrito</h2>
                <hr style={{border: '2px solid'}} />
                <LargeCard />
                <LargeCard />
                <LargeCard />
                <LargeCard />
            </div>
            <div className="container-fluid Fixed-bottom" style={{borderTop: 'black 5px solid'}}>
                <div className="row col-5 ">
                    <center><h4><span style={{color: '#d81e1e'}}>Total: </span><span> $90,000 </span></h4></center>
                </div>
                <br/>
                <div className="row justify-content-end">
                    <div className="row col-10">
                        <div className="col-6">
                            <button type="button" className="btn btn-danger col-10">Borrar carrito</button>
                        </div>
                        <div className="col-6">
                            <button type="button" className="btn btn-success col-10">Comprar</button>
                        </div>
                    </div>
                </div>
                <br/>
            </div>

        </div>
    )
}
