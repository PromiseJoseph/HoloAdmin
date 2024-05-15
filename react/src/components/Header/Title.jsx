import React from "react";
import { NavLink } from "react-router-dom";

const Title = props => {
    return (
        <>
        <div className="pagetitle">
            <h1>{props.page}</h1>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><NavLink to={"/"}>{props.prev}</NavLink></li>
                    <li className="breadcrumb-item active">{props.active}</li>
                </ol>
            </nav>
        </div>
        </>
    )
}
export default Title