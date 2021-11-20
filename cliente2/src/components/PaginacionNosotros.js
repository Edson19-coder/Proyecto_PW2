import React from 'react'

export default function PaginacionNosotros(props) {

    const pageNumber = [];

    for(let i = 1; i <= props.totalPages; i++) {
        pageNumber.push(i);
    }

    return (
        <div>
            <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item"><a onClick={props.function} id="prevPage" className="page-link aPag">Previous</a></li>
                {pageNumber.map(number => (
                    <li key={number} className="page-item"><a onClick={props.function} className="page-link aPag" href="#">{number}</a></li>
                ))}
                <li className="page-item"><a onClick={props.function} id="nextPage" className="page-link aPag" href="#">Next</a></li>
            </ul>
            </nav>
        </div>
    )
}
