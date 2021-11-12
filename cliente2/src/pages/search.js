import React from "react";
import { Fragment } from "react";
import { Container } from "react-bootstrap";

import CardSearch from "../components/CardSearch";
import PaginacionNosotros from "../components/PaginacionNosotros";

const search = (props) => {
    return (
        <Fragment>
            <Container id="" className="container-fluid">
                <h4 id="title">Resultados</h4><label id="label">Resultados de busqueda</label>
                <hr className="hr"></hr>
                    <CardSearch id="1"  price="5000" name="Squid Game" img="https://cdn.vox-cdn.com/thumbor/2QvgYM5Z2w02Qb-bdauWMIAqmyk=/0x0:1200x800/1200x800/filters:focal(504x304:696x496)/cdn.vox-cdn.com/uploads/chorus_image/image/49907377/gtx-1080-msi.0.jpg" />
                    <CardSearch id="12" price="5001" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                    <CardSearch id="13" price="5002" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                    <CardSearch id="14" price="5003" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                    <CardSearch id="15" price="5004" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                    <CardSearch id="16" price="5005" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                    <CardSearch id="17" price="5006" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                    <CardSearch id="18" price="5007" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                    <CardSearch id="19" price="5008" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                    <CardSearch id="10" price="5009" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                    <PaginacionNosotros></PaginacionNosotros>
            </Container>
        </Fragment>
    );
}
export default search;