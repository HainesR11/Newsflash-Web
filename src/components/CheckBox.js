import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import { completeTask, getAction } from "../api/ApiActions"

import '../css/taskView.css'

const CheckBox = ({task, auth, tasks}) => {

    const [checked, setChecked] = useState(false)

    const complete = () => {
        setChecked(true)
        console.log(task._id)
        getAction(tasks._id)
        //completeTask(tasks._id, Date, auth.name)
    }

    return(
        <div>
            { checked ? 
                <FontAwesomeIcon className={ "TaskAnimation" } style={ { paddingLeft: "3px", color: "green" } } icon={faCircleCheck}/>
                :
                <input type={ "checkbox" } onClick={complete} style={{marginLeft: "5px"}} disabled={ !task.assignedTo.includes(auth.name) && true } />
            }
        </div>
    )
}

export default CheckBox