import React from "react";

const Footer = (props) => {
    return (
        <div>
            <footer className="footer">
                <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">         
                    <p><u><a href="#">E-Commerce</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
                    <p className="h6">All right reversed. <a className="text-green ml-2" href="#" target="_blank">E-Commerce</a></p>
                </div>
                <small>© 2021 E-Commerce</small>
            </footer>
        </div>
    )
}

export default Footer;