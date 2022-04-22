import React from "react"
import { useActionStore } from "../store"

const NavArrow = ({ NavText }) => {

    const selectedBucket = useActionStore((state) => state.selectedBucket)

    return (
        <div style={ { display: "flex", flexDirection: "row" } }>
            <div style={ { display: "flex", flexDirection: "row", marginLeft: "30px", marginTop: "10px", marginBottom: "10px", width: "140px", height: "60px", backgroundColor: "grey", overflow: "hidden" } } >
                <div style={ { width: "60px", height: "60px", backgroundColor: "white", zIndex: "2", transform: "rotate(45deg)", marginLeft: "-25px" } }></div>
                <div style={ { display: "flex", alignItems: "center", paddingLeft: "25px", zIndex: 3, width: "90px", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: 'nowrap' } }>
                    { selectedBucket }
                </div>
            </div>

            <div style={ { width: "42px", height: "42px", backgroundColor: "grey", transform: "rotate(45deg)", marginLeft: "-21px", zIndex: "2", marginTop: "19px" } }></div>
        </div>
    )
}

export default NavArrow