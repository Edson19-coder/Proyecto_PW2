import React from "react";
import { Fragment, useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import CardSearch from "../components/CardSearch";
import PaginacionNosotros from "../components/PaginacionNosotros";
import { useParams } from "react-router-dom";
import { getSearchCategory } from "../api/SearchAPI";
import { GLOBAL } from "../api/GLOBAL";



const Search = (props) => {
    let { category } = useParams();
    const [searched, setsearch] = useState([]);

    useEffect(()=>{
        getSearchCategory(category,1)
            .then(res => {
                console.log(res);
                setsearch(res.data[category.toLowerCase() ]);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        
        <Fragment>
            <Container id="" className="container-fluid">
                <h4 id="title">Resultados</h4><label id="label">Resultados de busqueda</label>
                <hr className="hr"></hr>
                    {searched.map((item) => (
                        <CardSearch key={item._id} id={item.productId} price={item.cost} name={item.name} description={item.description} img={`${GLOBAL.url}/get-image-prod/${item.image}`} ></CardSearch>
                    ))}
                    <PaginacionNosotros></PaginacionNosotros>
            </Container>
        </Fragment>
    );
}
export default Search;