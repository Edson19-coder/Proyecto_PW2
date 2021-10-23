import React from 'react'

export default function BuildCard() {
    return (
    <div className="card mb-10" style={{maxWidth: '1440px', border:'transparent'}}>
        <div className="row g-0">
            <div className="col-md-6">
            <img
                src="https://cdn.vox-cdn.com/thumbor/2QvgYM5Z2w02Qb-bdauWMIAqmyk=/0x0:1200x800/1200x800/filters:focal(504x304:696x496)/cdn.vox-cdn.com/uploads/chorus_image/image/49907377/gtx-1080-msi.0.jpg"
                className="img-fluid rounded-start"
                alt="..."
            />
            </div>
            <div className="col-md-6">
            <div className="card-body">
                <h4 className="card-title"><b>GTX 1080 MSI</b></h4>
                <h5 className="mb-3 text-end" style={{margin: '0.75rem'}}>
                <span style={{backgroundColor: '#d81e1e', border: '1px solid', borderRadius: '0.5em'}}>$30000</span>
                </h5>
                <p className="card-text">
                Gaming enthusiasts are always looking for more performance to
                get the ultimate experience. Using multiple graphics cards in
                SLI or Crossfire is a great way to find out just how good it
                gets. MSI GAMING graphics cards fully support multi GPU
                technologies.
                </p>
                <div className="card-body">
                
                <button type="button" className="btn btn-primary btn-sm mr-1 my-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                    </svg>
                    Add to build</button>
                <button type="button" className="btn btn-light btn-sm mr-1 my-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                </svg><a href="/Producto">Detalles</a></button>
            
                </div>
            </div>
            </div>
        </div>

    </div>
)
}
