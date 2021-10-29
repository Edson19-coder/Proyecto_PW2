import React from 'react'
import NavBar from './NavBar';
import LargeCard from './LargeCard';
const divStyle = {   backgroundColor: '#8b8e8f'};

export default function Busqueda() {
    return (
        <div style={divStyle}>
            <NavBar />
            <div style={divStyle} className="container-fluid">
                <br />
                <h2 style={{color: 'white'}}>Busqueda</h2>
                <hr style={{border: '2px solid'}} />
                <LargeCard />
                <LargeCard />
                <LargeCard />
                <LargeCard />
            </div>
            <hr/>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled"><a className="page-link">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
            <br/>
            <br/>
        </div>
    )
}
