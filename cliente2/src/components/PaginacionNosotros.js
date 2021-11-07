import React from 'react'

export default function PaginacionNosotros() {
    return (
        <div>
            <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item"><a className="page-link aPag">Previous</a></li>
                <li className="page-item"><a className="page-link aPag" href="#">1</a></li>
                <li className="page-item"><a className="page-link aPag" href="#">2</a></li>
                <li className="page-item"><a className="page-link aPag" href="#">3</a></li>
                <li className="page-item"><a className="page-link aPag" href="#">Next</a></li>
            </ul>
            </nav>
        </div>
    )
}
