import React from 'react'
import NavBar from './NavBar';
const divStyle = {   backgroundColor: '#8b8e8f'};

export default function ABCProduct() {
    return (
        <div style={divStyle}>
            <NavBar />
            <div style={divStyle} className="container-fluid">
                <br/>
                <div class="text-center">
                    <h4>
                        Subir Imagen del Producto
                    </h4>
                </div>
            
                <div className="row justify-content-center">
                    <div className="mb-3 col-8 ">
                        <input className="form-control form-control-sm" id="formFileSm" type="file"/>
                    </div>
                </div>
                <br/>
                <div className="text-center">
                    <h4>
                        Nombre del producto
                    </h4>
                </div>
                <div className="row justify-content-center">
                    <div className="form-floating mb-3 col-8">
                        <input type="text" className="form-control" id="floatingInput" placeholder=""/>
                        <label for="floatingInput">Nombre del producto</label>
                    </div>
                </div>
                <br/>
                <span className="row justify-content-center">
                <div className="mb-3 col-4">
                <h5>Precio</h5>
                <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">$</span>
                <input type="text" className="form-control" placeholder="Precio" aria-label="Precio"
                    aria-describedby="basic-addon1"/>
                </div>
                <h5>Categoria</h5>
                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                <option selected>Selecciona</option>
                <option value="1">Laptops</option>
                <option value="2">Componentes</option>
                <option value="3">Accesorios</option>
                <option value="4">Electronica</option>
                </select>
                </div>
                <div className="mb-3 col-4">
                <h5>Descripción</h5>
                    <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                        style={{height: '300px'}}></textarea>
                    <label for="floatingTextarea2">Descripción</label>
                    </div>
                </div>
                </span>
                <br/>
                <div className="row justify-content-center">
                <button className="btn btn-success col-3" type="submit">
                    Crear
                </button>
                </div>
                <br/>
            </div>
        </div>
    )
}
