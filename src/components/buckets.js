import React from "react";
import { useActionStore } from "../store";

const Buckets = () => {

    const selectedBucket = useActionStore((state) => state.selectedBucket)
    const setSelectedBucket = useActionStore((state) => state.setSelectedBucket)
    const buckets = useActionStore((state) => state.buckets)

    console.log(selectedBucket)

    return (
        <div style={ { height: "100vh", width: "12vw", display: "flex", flexDirection: "column" } }>
            <div style={{height: "95vh"}}>
                { buckets.map((buckets) => {
                    return (
                        <div style={ { color: "white", fontSize: "1vw", width: "9vw", display: "flex", alignItems: "center", marginLeft: "1vw", marginTop: "4vh", paddingTop: "0.5vh", paddingBottom: "0.5vh", paddingLeft: "1vw", borderRadius: selectedBucket === buckets.name && "5px", border: selectedBucket === buckets.name && "1px solid white", fontWeight: selectedBucket === buckets && "bold" } } onClick={ () => setSelectedBucket(buckets.name) }>
                            { buckets.name }
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}

export default Buckets