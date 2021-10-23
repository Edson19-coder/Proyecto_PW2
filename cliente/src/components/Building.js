import React from 'react'
import NavBar from './NavBar';
import BuildCard from './BuildCard';
const divStyle = {   backgroundColor: '#8b8e8f'};

export default function Building() {
    return (
        <div style={divStyle}>
            <NavBar />
            <div style={{backgroundColor: 'rgb(215, 218, 219)', border: 'black 5px solid', borderRadius: '1em'}} className="container-sm items-align-center text-center col-10">
                <br />
                <h2 style={{color: 'white'}}>Building</h2>
                <hr style={{border: '2px solid'}} />
                <br/>
                <div className="row justify-content-center">
                    <div className="col-10">
                        <h5>Progreso del build</h5>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row justify-content-center">
                    <div className="col-10">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item" >
                                <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: '#8b8e8f', color: 'white'}}>
                                MotherBoard
                                </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div id="bodyAccordion01" className="accordion-body">
                                        <BuildCard />
                                        <hr/>
                                        <BuildCard />
                                        <hr/>
                                        <BuildCard />
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: '#8b8e8f', color: 'white'}}>
                                Procesador
                                </button>
                                </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        <BuildCard />
                                        <hr/>
                                        <BuildCard />
                                        <hr/>
                                        <BuildCard />
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: '#8b8e8f', color: 'white'}}>
                                    Tarjeta Grafica
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <BuildCard />
                                        <hr/>
                                        <BuildCard />
                                        <hr/>
                                        <BuildCard />
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{backgroundColor: '#8b8e8f', color: 'white'}}>
                                    RAM
                                </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <BuildCard />
                                        <hr/>
                                        <BuildCard />
                                        <hr/>
                                        <BuildCard />
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={{backgroundColor: '#8b8e8f', color: 'white'}}>
                                    Storage
                                </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <BuildCard />
                                        <hr/>
                                        <BuildCard />
                                        <hr/>
                                        <BuildCard />
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" style={{backgroundColor: '#8b8e8f', color: 'white'}}>
                                    PowerSupply
                                </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <BuildCard />
                                        <hr/>
                                        <BuildCard />
                                        <hr/>
                                        <BuildCard />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>
                <button type="button" className="btn btn-success">Terminar Build</button>
                <br/>
                <br/>
                
            </div>
            <br/>
            <br/>
        </div>
    )
}
