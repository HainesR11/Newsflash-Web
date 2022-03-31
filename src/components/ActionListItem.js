import React, { useState } from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ActionListItem = ({ item, tasks, auth }) => {

    const [taskShow, setTaskShow] = useState(false)

    const completed = tasks.filter((item) => { return item.completedOn }).length
    const total = tasks.length
    const percent = (completed / total) * 100

    return (
        <div style={ { display: "flex", flexDirection: "column", width: "83vw", border: "1px solid black", paddingTop: "10px", paddingBottom: "10px", marginTop: "20px", borderRadius: "5px", marginLeft: "0.5vw"} }>
            <div style={ { display: "flex", marginLeft: "10px", justifyContent: "space-between", width: "73vw", alignItems :"center" } } onClick={ () => setTaskShow(!taskShow) }>
                <div style={ { width: "32vw" } }>
                    { item.activityName }
                </div>
                <div style={ { display: "flex", width: "11vw" } }>
                    { item.dueDate }
                </div>
                <div style={ { width: "10vw", display: "flex", justifyContent: "center" } }>
                    { percent } %
                </div>
                <div style={ { display: "flex", width: "10vw", flexDirection: "row-reverse", } }>
                    { tasks.map((tasks) => {
                        return (
                            <div style={ { backgroundColor: "lightGrey", width: "2em", height: "2em", borderRadius: "1em", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "-15px", border: "2px solid white" } }>
                                { tasks.assignedTo.charAt(0) }
                            </div>
                        )
                    }) }
                </div>
            </div>
            { taskShow &&
                <div style={ { paddingTop: "10px" } }>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", width: "84vw", marginBottom: "1vw" }}>
                                    <div style={{width: "10vw",}}>
                                        Name
                                    </div>
                                    <div style={{width: "10vw",}}>
                                        Summary
                                    </div>
                                    <div style={{width: "10vw",}}>
                                        Completed
                                    </div>
                                    <div style={{width: "10vw",}}>
                                        Priority
                                    </div>
                                    <div style={{width: "10vw",}}>
                                        Assigned To
                                    </div>
                                </div>
                    { tasks.map((task) => {
                        return (
                            <div style={{display: "flex", flexDirection:"column"}}>
                                <div style={ { display: "flex", flexDirection: "row", width: "84vw", paddingTop: "5px", justifyContent: "space-around" } }>
                                    <div style={ { width: "10vw"} }>
                                        { task.taskName }
                                    </div>
                                    <div style={ { width: "10vw" } }>
                                        { task.taskSummary }
                                    </div>
                                    <div style={ { width: "10vw",display: "flex", justifyContent: "center" } }>
                                        { task.completedOn ? <FontAwesomeIcon icon={ faCircleCheck } style={ { color: "green", paddingLeft: "3px" } } /> : <input type="checkbox" disabled={auth.name !== task.assignedTo && true}/> }
                                    </div>
                                    <div style={ { width: "10vw" } }>
                                        { task.priority }
                                    </div>
                                    <div style={ { width: "10vw" } }>
                                        { task.assignedTo }
                                    </div>
                                </div>
                            </div>
                        )
                    }) }
                </div>
            }
        </div>
    )
}

export default ActionListItem