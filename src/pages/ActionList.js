import React, { useEffect, useState } from "react";
import NavArrow from "../components/NavArrow";
import mockData from "../mockData/mockData.json"
import ActionListItem from "../components/ActionListItem";
import { Link } from "react-router-dom";
import mockAuth from "../mockData/mockAuth.json"
import { useActionStore, useModalStore } from "../store";
import AddActivityModal from "../components/AddActivityModal";
import { GetAllActions } from "../api/ApiActions";

const ActionList = () => {
    const arrowNavs = ["bucket 1", "Actions"]


    const buckets = [
        "Ambient",
        "Back Office",
        "Fresh",
        "General Merchandising",
        "GMS",
        "Health Care",
        "Online",
        "Services"
    ]


    useEffect(() => {
        console.log("this use effect is running ")
        GetAllActions()
    }, [])

    const addModal = useModalStore((state) => state.showAddModal)
    const toggle = useModalStore((state) => state.toggleAddModal)
    const actions = useActionStore((state) => state.actions)

    const [selectedBucket, setSelectedBucket] = useState("Ambient")
    const auth = mockAuth.authResponse


    const filteredResults = () => {
        return mockData.filter((item) => {
            return (
                item.bucket === selectedBucket
            )
        })
    }

    console.log(process.env.PORT)

    return (
        <div>
            {addModal && <AddActivityModal show={ addModal } />}
            <div style={ { width: "96vw", height: "100vh", display: "flex", flexDirection: "row" } }>
                <div style={ { height: "100vh", width: "12vw" } } id={ "Buckets" }>
                    { buckets.map((buckets) => {
                        return (
                            <div style={ { color: "white", fontSize: "1vw", width: "9vw", height: "4vh", display: "flex", alignItems: "center", marginLeft: "1vw", marginTop: "4vh", paddingLeft: "1vw", borderRadius: selectedBucket === buckets && "5px", border: selectedBucket === buckets && "1px solid white", fontWeight: selectedBucket === buckets && "bold" } } onClick={ () => setSelectedBucket(buckets) }>
                                { buckets }
                            </div>
                        )
                    }) }
                </div>
                <div style={ { height: "100vh", width: "84vw", backgroundColor: "white", borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px", overflow: "auto" } }>
                    <div style={ { display: "flex", flexDirection: "column", width: "84vw", height: "100vh" } }>
                        <div style={ { width: "84vw", display: "flex", flexDirection: "row" } }>
                            { arrowNavs.map((text) => {
                                return (
                                    <NavArrow NavText={ text } selectedBucket={ selectedBucket } />
                                )
                            }) }
                        </div>
                        <div style={ { width: "83vw", display: "flex", flexDirection: "row", justifyContent: "space-around", height: "30px" } }>
                            <div style={ { width: "28vw" } }> Name </div>
                            <div style={ { width: "10vw" } }> Start Date </div>
                            <div style={ { width: "10vw" } }> Completed </div>
                            <div style={ { width: "10vw" } }> Assinged </div>
                        </div>
                        {
                            auth.isAdmin &&
                            <div style={ { display: "flex", flexDirection: "row", width: "83vw", border: "1px dashed black", paddingTop: "10px", paddingBottom: "10px", marginTop: "20px", borderRadius: "5px", marginLeft: "0.5vw", justifyContent: "space-between" } } onClick={ toggle }>
                                <div style={ { marginLeft: "5vw", fontWeight: "bold" } }>
                                    + Add new Task
                                </div>
                                <div style={ { marginRight: "9vw", fontWeight: "bold" } }>
                                    Press Alt + T
                                </div>
                            </div>
                        }
                        { filteredResults().map((action) => {
                            return (
                                <ActionListItem item={ action } tasks={ action.tasks } auth={ auth } />
                            )
                        }) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActionList