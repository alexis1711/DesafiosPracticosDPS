import React from "react";
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={"/formulario"}>Formulario</Link>
                </li>
                <li>
                    <Link to={"/convertidor"}>Convertidor</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu