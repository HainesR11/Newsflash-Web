import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import moment from "moment"
import React, { useState } from "react"
import { completeTask, GetAllActions } from "../api/ApiActions"

import '../css/taskView.css'

const CheckBox = ({task, auth, tasks}) => {

    const [checked, setChecked] = useState(false)

    const complete = async () => {
        setChecked(true)
        await completeTask(tasks._id, moment().format("ddd DD MMM yyyy"), auth.name, task._id)
        GetAllActions()
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