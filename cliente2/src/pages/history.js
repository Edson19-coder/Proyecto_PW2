import React from "react";
import { Fragment } from "react";
import { Container } from "react-bootstrap";

import CardHistory from "../components/CardHistory";

const History = (props) => {
    return (
        <Fragment>
            <Container id="" className="container-fluid">
                <h4 id="title">Historial</h4><label id="label">Elementos comprados</label>
                <hr className="hr"></hr>
                <CardHistory id="1"  price="5000" name="Squid Game" img="https://cdn.vox-cdn.com/thumbor/2QvgYM5Z2w02Qb-bdauWMIAqmyk=/0x0:1200x800/1200x800/filters:focal(504x304:696x496)/cdn.vox-cdn.com/uploads/chorus_image/image/49907377/gtx-1080-msi.0.jpg" />
                <CardHistory id="12" price="5001" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                <CardHistory id="13" price="5002" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                <CardHistory id="14" price="5003" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                <CardHistory id="15" price="5004" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                <CardHistory id="16" price="5005" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                <CardHistory id="17" price="5006" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                <CardHistory id="18" price="5007" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                <CardHistory id="19" price="5008" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                <CardHistory id="10" price="5009" name="Squid Game" img="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
                
            </Container>

        </Fragment>
    );
}
export default History;