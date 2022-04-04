import React from "react";
import { useActionStore } from "../store";
import Switch from "../components/toggle";

const Buckets = ({ buckets }) => {

    const selectedBucket = useActionStore((state) => state.selectedBucket)
    const setSelectedBucket = useActionStore((state) => state.setSelectedBucket)

    return (
        <div style={ { height: "100vh", width: "12vw", display: "flex", flexDirection: "column" } }>
            <div style={{height: "95vh"}}>
                { buckets.map((buckets) => {
                    return (
                        <div style={ { color: "white", fontSize: "1vw", width: "9vw", display: "flex", alignItems: "center", marginLeft: "1vw", marginTop: "4vh", paddingTop: "0.5vh", paddingBottom: "0.5vh", paddingLeft: "1vw", borderRadius: selectedBucket === buckets && "5px", border: selectedBucket === buckets && "1px solid white", fontWeight: selectedBucket === buckets && "bold" } } onClick={ () => setSelectedBucket(buckets) }>
                            { buckets }
                        </div>
                    )
                }) }
            </div>
            <div style={ { display: "flex", justifyContent: "center", width: "12vw", flexDirection: "row", color: "white", fontSize: "10px", alignItems: "center" } }>
                <div>
                    Show Completed
                </div>
                <div style={{display: "flex", height: "5vh", alignItems: "center" }}>
                    <Switch />
                </div>
            </div>
            <div />
        </div>
    )
}

export default Buckets