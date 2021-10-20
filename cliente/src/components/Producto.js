import React from 'react'
import NavBar from './NavBar';
const divStyle = {   backgroundColor: '#8b8e8f'};

export default function Producto() {
    return (
        <div style={divStyle}>
            <NavBar />
            <div style={divStyle} className="container-sm items-align-center text-center col-10">
                <br/>
                <div className="container-sm items-align-center text-center col-10" style={{backgroundColor: 'rgb(215, 218, 219)', border: 'black 5px solid', borderRadius: '1em'}}>
                    <div className="row">
                    <br/>
                    <div className="col-8">
                    <br/>
                    <img
                    src="https://cdn.vox-cdn.com/thumbor/2QvgYM5Z2w02Qb-bdauWMIAqmyk=/0x0:1200x800/1200x800/filters:focal(504x304:696x496)/cdn.vox-cdn.com/uploads/chorus_image/image/49907377/gtx-1080-msi.0.jpg"
                    className="img-fluid rounded-start col-10"
                    alt="..."/>
                    </div>
                    <div className="col-4">
                        <br/>
                        <br/>
                        <br/>
                        <h4 className="card-title text-start"><b>GTX 1080 MSI</b></h4>
                        <h5 className="mb-3 text-end" style={{margin: '0.75rem'}}>
                            <span style={{backgroundColor: '#d81e1e',border: '1px solid', borderRadius: '0.5em'}}> $30000 </span>
                        </h5>
                        <p className="card-text text-start">
                            Gaming enthusiasts are always looking for more performance to
                            get the ultimate experience. Using multiple graphics cards in
                            SLI or Crossfire is a great way to find out just how good it
                            gets. MSI GAMING graphics cards fully support multi GPU
                            technologies.
                        </p>
                        <br/>
                    </div>
                </div>
 
                </div>
            </div>
            <br/>
            <br/>
        </div>
    )
}
