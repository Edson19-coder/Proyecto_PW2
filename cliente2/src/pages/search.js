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
    const [page = 1, setPage] = useState();
    const [totalPages = 1, setTotalPages] = useState();

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

    const changePage = (event) => {
        event.preventDefault();
        var buttonClcked = event.target.id;


        if(buttonClcked === "prevPage") {
            var result = page;
            result--;

            if(result >= 1) {
                setPage(result);

                getSearchCategory(category,result)
                .then(res => {
                    console.log(res);
                    setsearch(res.data[category.toLowerCase() ]);
                })
                .catch(err => {
                    console.log(err);
                });
            }
        } 
        else if (buttonClcked === "nextPage") {
            var result = page;
            result++;

            if(result <= totalPages) {
                setPage(result);

                getSearchCategory(category,result)
                .then(res => {
                    console.log(res);
                    setsearch(res.data[category.toLowerCase() ]);
                })
                .catch(err => {
                    console.log(err);
                });
            }
        } else {
            var selectedPage = parseInt(event.target.text, 10);
            setPage(selectedPage);
            getSearchCategory(category,selectedPage)
            .then(res => {
                console.log(res);
                setsearch(res.data[category.toLowerCase() ]);
            })
            .catch(err => {
                console.log(err);
            });
        }
    }

    return (
        
        <Fragment>
            <Container id="" className="container-fluid">
                <h4 id="title">Resultados</h4><label id="label">Resultados de busqueda</label>
                <hr className="hr"></hr>
                    {searched.map((item) => (
                        <CardSearch key={item._id} id={item.productId} price={item.cost} name={item.name} description={item.description} img={`${GLOBAL.url}/get-image-prod/${item.image}`} ></CardSearch>
                    ))}
                    <PaginacionNosotros totalPages={totalPages} function={changePage}></PaginacionNosotros>
            </Container>
        </Fragment>
    );
}
export default Search;