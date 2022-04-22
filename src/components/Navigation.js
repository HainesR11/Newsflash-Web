import React from "react";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import { ActionList } from "../pages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faListCheck } from "@fortawesome/free-solid-svg-icons";

const NavLinks = () => {
    return (
        <div style={ { width: "4em", height: "100vh", borderRight:"1px solid black" } }>
            <div style={ { height: "5vh", paddingTop: "20px", paddingLeft: "5px" } }>
                <Link to="/ActionList"><FontAwesomeIcon icon={ faListCheck } style={ { color: "white", height: "4vh" } } /></Link>
            </div>
            <div style={ { height: "5vh", paddingTop: "20px", paddingLeft: "5px" } }>
                <Link to="/ActionList"><FontAwesomeIcon icon={ faCalendarDays } style={ { color: "white", height: "4vh" } } /></Link>
            </div>
            

        </div>
    )
}

const Navigation = () => {
    return (
        <BrowserRouter>
            <div style={ { display: "flex", backgroundColor: "#282c34", position: "fixed" } }>
                <div>
                    <NavLinks />
                </div>
                <Routes>
                    <Route exact path="/" elememt={ <ActionList /> } />
                    <Route path="/ActionList" element={ <ActionList /> } />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default Navigation