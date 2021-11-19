import React from "react";
import { Fragment, useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import CardSearch from "../components/CardSearch";
import PaginacionNosotros from "../components/PaginacionNosotros";
import { useParams } from "react-router-dom";
import { getSearchCategory } from "../api/SearchAPI";


const Search = (props) => {
    let { category } = useParams();
    const [searched, setsearch] = useState([]);

    useEffect(()=>{
        getSearchCategory(category,1)
            .then(res => {
                console.log(res);
                //setsearch(res.data["products"]);
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
                    {/* {products.map((item) => (
                        <CardSearch key={item._id} id={item.productId} price={item.cost} name={item.name} description={item.description} img={`${GLOBAL.url}/get-image-prod/${item.image}`} ></CardSearch>
                    ))} */}
                    <CardSearch id="1"  price="5000" name="Squid Game" img="https://cdn.vox-cdn.com/thumbor/2QvgYM5Z2w02Qb-bdauWMIAqmyk=/0x0:1200x800/1200x800/filters:focal(504x304:696x496)/cdn.vox-cdn.com/uploads/chorus_image/image/49907377/gtx-1080-msi.0.jpg" />
                    <PaginacionNosotros></PaginacionNosotros>
            </Container>
        </Fragment>
    );
}
export default Search;