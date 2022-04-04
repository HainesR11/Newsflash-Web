import React, { useEffect } from "react";
import NavArrow from "../components/NavArrow";
import ActionListItem from "../components/ActionListItem";
import { Link } from "react-router-dom";
import mockAuth from "../mockData/mockAuth.json"
import { useActionStore, useModalStore } from "../store";
import AddActivityModal from "../components/AddActivityModal";
import { GetAllActions } from "../api/ApiActions";
import moment from "moment";
import Buckets from "../components/buckets";

const ActionList = () => {
    const arrowNavs = ["Ambient", "Action 12"]


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
        GetAllActions()
    }, [])

    const addModal = useModalStore((state) => state.showAddModal)
    const toggle = useModalStore((state) => state.toggleAddModal)
    const actions = useActionStore((state) => state.actions)
    const selectedBucket = useActionStore((state) => state.selectedBucket)
    const setSelectedBucket = useActionStore((state) => state.setSelectedBucket)
    const toggleSwitch = useModalStore((state) => state.toggleSwitch)

    const auth = mockAuth.authResponse

    const filteredResults = () => {
        return actions.filter((item) => {
            const completed = item.tasks.filter((item) => { return item.completedOn }).length
            const total = item.tasks.length
            const percent = (completed / total) * 100
            return (
                item.bucket === selectedBucket && (toggleSwitch ? percent === 100 : percent < 100 )
            )
        })
    }

    return (
        <div style={ { backgroundColor: "#282c34" } }>
            { addModal && <AddActivityModal show={ addModal } /> }
            <div style={ { width: "96vw", height: "100vh", display: "flex", flexDirection: "row" } }>
                <div style={{height: "100vh"}} id={ "Buckets" }>
                    <Buckets buckets={buckets}/>
                </div>
                <div style={ { height: "100vh", width: "84vw", backgroundColor: "white", borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px", overflow: "auto" } }>
                    { !actions ? <div>
                        this is loading
                    </div> :
                        <div style={ { display: "flex", flexDirection: "column", width: "84vw", height: "100vh" } }>
                            <div style={ { width: "84vw", display: "flex", flexDirection: "row" } } key={ "NavArrow" }>
                                { arrowNavs.map((text) => {
                                    return (
                                        <NavArrow NavText={ text } selectedBucket={ selectedBucket } />
                                    )
                                }) }
                            </div>
                            <div style={ { width: "83vw", display: "flex", flexDirection: "row", justifyContent: "space-around", height: "30px" } }>
                                <div style={ { width: "28vw", fontWeight: "bold" } }> Name </div>
                                <div style={ { width: "10vw", fontWeight: "bold" } }> Due Date </div>
                                <div style={ { width: "10vw", fontWeight: "bold" } }> Completed </div>
                                <div style={ { width: "10vw", fontWeight: "bold" } }> Assinged </div>
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
                            { filteredResults().sort((a, b) => moment(a.dueDate).isAfter(moment(b.dueDate))).map((action) => {
                                return (
                                    <ActionListItem item={ action } tasks={ action.tasks } auth={ auth } id={ action._id } />
                                )
                            }) }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ActionList