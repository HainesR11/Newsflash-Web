import React, { useState } from "react";
import { faCircleCheck, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

const ActionListItem = ({ item, tasks, auth }) => {
    const [taskShow, setTaskShow] = useState(false)

    const completed = tasks.filter((item) => { return item.completedOn }).length
    const total = tasks.length
    const percent = (completed / total) * 100

    const completeBorder = (percent, notCompleted) => {
        if (percent === 100) {
            return "5px solid green"
        }
        else if (notCompleted){
            return "5px solid red"
        }
        else return "1px solid black"
    }

    return (
        <div style={ { display: "flex", flexDirection: "column", width: "83vw", border: "1px solid black", paddingTop: "10px", paddingBottom: "10px", marginTop: "20px", borderRadius: "5px", marginLeft: "0.5vw", borderLeft: completeBorder(percent, moment(item.dueDate).isBefore(Date()))} }>
            <div style={ { display: "flex", marginLeft: "10px", justifyContent: "space-between", width: "73vw", alignItems: "center" } } onClick={ () => setTaskShow(!taskShow) }>
                <div style={ { width: "32vw" } }>
                    { item.activityName }
                </div>
                <div style={ { display: "flex", width: "11vw" } }>
                    { moment(item.dueDate).format("ddd DD MMM yyyy") }
                </div>
                <div style={ { width: "10vw", display: "flex", justifyContent: "center" } }>
                    { percent } %
                </div>
                <div style={ { display: "flex", width: "10vw", flexDirection: "row-reverse", } }>
                    { tasks.map((tasks) => {
                        return (
                            <div style={ { backgroundColor: "lightGrey", width: "2em", height: "2em", borderRadius: "1em", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "-15px", border: "2px solid white" } }>
                                { tasks.assignedTo.map((assigned) => {
                                    return (
                                        assigned.charAt(0)
                                    )
                                }) }
                            </div>
                        )
                    }) }
                </div>
            </div>
            { taskShow &&
                <div style={ { paddingTop: "10px" } }>
                    <div style={ { display: "flex", flexDirection: "row", justifyContent: "space-around", width: "77.7vw", marginBottom: "1vw", marginTop: "0.5vw" } }>
                        <div style={ { width: "10vw", fontWeight: "bold" } }>
                            Name
                        </div>
                        <div style={ { width: "10vw", fontWeight: "bold" } }>
                            Summary
                        </div>
                        <div style={ { width: "10vw", fontWeight: "bold" } }>
                            Completed
                        </div>
                        <div style={ { width: "10vw", fontWeight: "bold" } }>
                            Priority
                        </div>
                        <div style={ { width: "10vw", fontWeight: "bold" } }>
                            Assigned To
                        </div>
                    </div>
                    { tasks.map((task) => {
                        return (
                            <div style={ { display: "flex", flexDirection: "row" } } onClick={console.log(task.assignedTo)}>
                                <div style={ { display: "flex", flexDirection: "row", width: "79vw", paddingTop: "5px", justifyContent: "space-around" } }>
                                    <div style={ { width: "10vw" } }>
                                        { task.taskName }
                                    </div>
                                    <div style={ { width: "10vw" } }>
                                        { task.taskSummary }
                                    </div>
                                    <div style={ { width: "10vw", display: "flex", paddingLeft: "2vw" } }>
                                        { task.completedOn ? <FontAwesomeIcon icon={ faCircleCheck } style={ { color: "green", paddingLeft: "3px" } } /> : <input type="checkbox" style={ { marginLeft: "5px" } } disabled={ !task.assignedTo.includes(auth.name) && true } /> }
                                    </div>
                                    <div style={ { width: "10vw" } }>
                                        { task.priority }
                                    </div>
                                    <div style={ { width: "10vw" } }>
                                        { task.assignedTo.map((assigned) => {
                                            return assigned
                                        }) }
                                    </div>
                                </div>
                                { auth.isAdmin &&
                                    <div style={ { width: "5vw", display: "flex", justifyContent: "space-around" } } >
                                        <FontAwesomeIcon icon={ faEdit } style={ { cursor: "pointer" } } />
                                        <FontAwesomeIcon icon={ faTrash } style={ { color: "red", cursor: "pointer" } } />
                                    </div>
                                }
                            </div>
                        )
                    }) }
                </div>
            }
        </div >
    )
}

export default ActionListItem