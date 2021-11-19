import React from "react";
import { Fragment } from "react";
import { Container } from "react-bootstrap";

import CardCart from "../components/CardCart";
import PaginacionNosotros from "../components/PaginacionNosotros";

const cart = (props) => {
    return (
        <Fragment>
            <Container id="" className="container-fluid">
                <h4 id="title">Carrito</h4><label id="label">Elementos en el carro</label>
                <hr className="hr"></hr>
                <CardCart id="1"  price="5000" name="Squid Game" img="https://cdn.vox-cdn.com/thumbor/2QvgYM5Z2w02Qb-bdauWMIAqmyk=/0x0:1200x800/1200x800/filters:focal(504x304:696x496)/cdn.vox-cdn.com/uploads/chorus_image/image/49907377/gtx-1080-msi.0.jpg" />
                <CardCart id="12" price="5001" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                <CardCart id="13" price="5002" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                <CardCart id="14" price="5003" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                <CardCart id="15" price="5004" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                <CardCart id="16" price="5005" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                <CardCart id="17" price="5006" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                <CardCart id="18" price="5007" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                <CardCart id="19" price="5008" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                <CardCart id="10" price="5009" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                <hr/>
                <div class="row col-12">
                    <center><h4><span style={{color: "#d81e1e"}}>Total: </span><span style={{color: "white"}}>$90,000 </span></h4></center>
                </div>

                <div className="row justify-content-end">
                    <div className="row col-10">
                        <div className="col-6">
                            <button type="button" className="btn NavbarBtn col-10 ">Borrar carrito</button>
                        </div>
                        <div className="col-6">
                            <button type="button" className="btn NavbarBtn col-10">Comprar</button>
                        </div>
                    </div>
                </div>

            </Container>

        </Fragment>
    );
}
export default cart;