import React, { useEffect } from "react";
import NavArrow from "../components/NavArrow";
import ActionListItem from "../components/ActionListItem";
import mockAuth from "../mockData/mockAuth.json"
import { useActionStore, useModalStore } from "../store";
import AddActivityModal from "../components/Modal/AddActivityModal";
import { GetAllActions, getBuckets } from "../api/ApiActions";
import moment from "moment";
import Buckets from "../components/buckets";
import Switch from "../components/toggle";
import TaskModal from "../components/Modal/TaskModal";
import DeleteModal from "../components/Modal/DeleteModal";

const ActionList = () => {
    const arrowNavs = ["Ambient", "Action 12"]

    useEffect(() => {
        GetAllActions();
        getBuckets();
    }, [])

    const addModal = useModalStore((state) => state.showAddModal)
    const taskModal = useModalStore((state) => state.showTaskModal)
    const toggle = useModalStore((state) => state.toggleAddModal)
    const actions = useActionStore((state) => state.actions)
    const selectedBucket = useActionStore((state) => state.selectedBucket)
    const completeSwitch = useModalStore((state) => state.completeSwitch)
    const deleteModal = useModalStore((state) => state.showDeleteModal)

    const auth = mockAuth.authResponse

    const filteredResults = () => {
        return actions.filter((item) => {
            const completed = item.tasks.filter((item) => { return item.completedOn }).length
            const total = item.tasks.length
            const percent = (completed / total) * 100
            return (
                item.bucket === selectedBucket && (completeSwitch ? percent === 100 : percent < 100)
            )
        })
    }

    return (
        <div style={ { backgroundColor: "#282c34" } }>
            { deleteModal && <DeleteModal /> }
            { addModal && <AddActivityModal show={ addModal } /> }
            { taskModal && <TaskModal /> }
            <div style={ { width: "96vw", height: "100vh", display: "flex", flexDirection: "row" } }>
                <div style={ { height: "100vh" } } id={ "Buckets" }>
                    <Buckets />
                </div>
                <div style={ { height: "100vh", width: "85vw", backgroundColor: "white", borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px", paddingBottom: "1vh" } }>
                    { !actions ? <div>
                        this is loading
                    </div> :
                        <div style={ { display: "flex", flexDirection: "column", width: "85vw", height: "99vh", marginBottom: "1vh", overflow: "auto" } }>
                            <div style={ { display: "flex", flexDirection: "row", justifyContent: "space-between", paddingRight: "1vw" } }>
                                <div style={ { width: "84vw", display: "flex", flexDirection: "row" } } key={ "NavArrow" }>
                                    { arrowNavs.map((text, index) => {
                                        return (
                                            <NavArrow NavText={ text } key={index} />
                                        )
                                    }) }

                                </div>
                                <div style={ { display: "flex", justifyContent: "center", width: "12vw", flexDirection: "row", color: "white", fontSize: "10px", } }>
                                    <div style={ { color: "black", display: "flex", alignItems: "center", width: "6vw" } }>
                                        Show Completed
                                    </div>
                                    <div style={ { display: "flex", height: "5vh", alignItems: "center", paddingTop: "13px" } }>
                                        <Switch />
                                    </div>
                                </div>
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
                            { filteredResults().sort((dueDate) => moment(dueDate) - Date()).map((action, index) => {
                                return (
                                    <ActionListItem item={ action } tasks={ action.tasks } auth={ auth } id={ action._id } key={index} />
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