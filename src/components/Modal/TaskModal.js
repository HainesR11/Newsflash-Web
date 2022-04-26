import React, { useState } from "react";
import { Modal, ModalFooter, ModalHeader } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { useModalStore } from "../../store";
import Select from "react-select";
import styledComponents from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const InputBox = styledComponents.input`
    height: 30px;
    border: 0px;
    width: 100%;
    font-size: 15px;
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 1vh;
    &:focus {
        outline: none;
    }
    font-family: 'Source Sans Pro', sans-serif;
    ::placeholder {
        font-style: normal;
    }
`
const SummaryInput = styledComponents.textarea`
    height: 100%;
    border: 0px;
    width: 100%;
    font-size: 15px;
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 1vh;
    &:focus {
        outline: none;
    }
    font-family: 'Source Sans Pro', sans-serif;
    ::placeholder {
        font-style: normal;
    }
`

const styles = {
    button: {
        height: "3vh",
        width: "10vw",
        backgroundColor: "white",
        border: "1px solid black",
        textAlign: "center",
        borderRadius: "5px"
    }
}

const optionStyle = {
    control: ({ width, ...css }) => ({
        ...css,
        width: "100%",
        backgroundColor: "#f1f1f2",
        padding: "5px 15px",
        borderRadius: "5px"
    })
}

const TaskModal = () => {

    const shwoTaskModal = useModalStore((state) => state.showTaskModal)
    const toggle = useModalStore((state) => state.toggleTaskModaal)

    const [activityName, setActivityName] = useState('')
    const [activitySummary, setActivitySummary] = useState("")
    const [selectedBucket, setSelectedBucket] = useState([])
    const [dueDate, setDueDate] = useState("")
    const [startDate, setStartDate] = useState(Date)
    const [taskName, setTaskName] = useState("")
    const [taskSummary, setTaskSummary] = useState()
    const [priority, setPriority] = useState()
    const [assigned, setAssigned] = useState([])

    const priorityList = [
        { value: "3 - High", label: "3 - High" },
        { value: "2 - Medium", label: "2 - Medium" },
        { value: "1 - Low", label: "1 -Low" }
    ]

    return (
        <Modal size="xl" isOpen={ shwoTaskModal } >
            <ModalHeader style={ { width: "30vw", display: "flex", flexDirection: "row", justifyContent: "space-between" } }>
                <div style={ { display: "flex" } }>
                    Create New Action
                </div>
                <FontAwesomeIcon icon={ faXmark } onClick={ toggle } />
            </ModalHeader>
            <div style={ { display: "flex", flexDirection: "column" } }>
                <div style={ { height: "35vh", width: "100%", display: "flex", flexDirection: "column" } }>
                    <div style={ { width: "100%", textAlign: "center", paddingTop: "10px", fontWeight: "bold" } }>
                        Activty Details
                    </div>
                    <div style={ { width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", height: "50%" } }>
                        <div style={ { width: "47%", height: "25vh", display: "flex", flexDirection: "column", justifyContent: "space-around" } }>
                            <InputBox value={ activityName } placeholder="Activity Name" onChange={ (e) => setActivityName(e.target.value) } />
                            <div style={ { width: "100%" } }>
                                <Select styles={ optionStyle } options={ priorityList } onChange={ setPriority } />
                            </div>
                        </div>
                        <div style={ { width: "47%", height: "100%", marginTop: "2vh", display: "flex", justifyContent: "center" } }>
                            <SummaryInput value={ activitySummary } placeholder={ "Activity Summary" } onChange={ (e) => setActivitySummary(e.target.value) } />
                        </div>
                    </div>
                </div>
            </div>
            <ModalFooter>
                <div style={ { display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%" } }>
                    <button style={ styles.button } onClick={ toggle }>Close</button>
                    <button style={ styles.button } onClick={ toggle }>Add</button>
                </div>
            </ModalFooter>
        </Modal>
    )
}

export default TaskModal