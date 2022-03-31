import React from "react"

const NavArrow = ({ NavText }) => {
    return (
        <div style={ { display: "flex", flexDirection: "row", marginLeft: "3vw", marginTop: "1vh", marginBottom: "1vh", width: "7vw", height: "7vh", backgroundColor: "grey", overflow: "hidden" } }>
            <div style={ { width: "7vh", height: "7vh", backgroundColor: "white", zIndex: "2", transform: "rotate(45deg)", marginLeft: "-2.5vw" } }></div>
            <div style={{display: "flex", alignItems: "center", paddingLeft: "1.5vw"}}>
                { NavText }
            </div>
        </div>
    )
}
 
export default NavArrow