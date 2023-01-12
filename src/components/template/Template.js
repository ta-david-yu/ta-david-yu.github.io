import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../css/Portfolio.css";


class Template extends Component {
    render() {
        return (
            <div className="subheader-text">
                <div>UNDER CONSTRUCTION</div>
                <hr/>
                <Link to="/">return to the main website</Link>
            </div>
        );
    }
}

export default Template;