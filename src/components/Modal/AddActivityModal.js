import React, { useState } from "react";
import { Modal, ModalFooter, ModalHeader } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { useActionStore, useModalStore } from "../../store";
import styledComponents from "styled-components";
import DatePicker from "react-date-picker";
import Select from "react-select";
import TaskModal from "./TaskModal";
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
    height: 70%;
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

const AddActivityModal = () => {


    const [activityName, setActivityName] = useState('')
    const [activitySummary, setActivitySummary] = useState("")
    const [selectedBucket, setSelectedBucket] = useState([])
    const [dueDate, setDueDate] = useState("")
    const [startDate, setStartDate] = useState(Date)
    const [taskName, setTaskName] = useState("")
    const [taskSummary, setTaskSummary] = useState()
    const [priority, setPriority] = useState()
    const [assigned, setAssigned] = useState([])

    const show = useModalStore((state) => state.showAddModal)
    const toggle = useModalStore((state) => state.toggleAddModal)
    const buckets = useActionStore((state) => state.buckets)
    const toggleTaskModal = useModalStore((state) => state.toggleTaskModaal)

    const bucket = buckets.map((bucket) => { return { value: bucket.name, label: bucket.name } })
    console.log(bucket)

    return (
        <TaskModal />,
        <Modal isOpen={ show } size={ "xl" } style={ { width: "100vw", height: "70vh" } }>
            <ModalHeader>
                <div style={ { width: "50vw", display: "flex", flexDirection: "row", justifyContent: "space-between" } }>
                    <FontAwesomeIcon icon={ faXmark } onClick={ toggle } />
                    <div style={ { display: "flex", width: "50%" } }>
                        Create New Action
                    </div>
                </div>
            </ModalHeader>
            <div style={ { display: "flex", flexDirection: "column" } }>
                <div style={ { height: "35vh", width: "100%", display: "flex", flexDirection: "column" } }>
                    <div style={ { width: "100%", textAlign: "center", paddingTop: "10px", fontWeight: "bold" } }>
                        Activty Details
                    </div>
                    <div style={ { width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", height: "43%" } }>
                        <div style={ { width: "47%", height: "25vh", display: "flex", flexDirection: "column", justifyContent: "space-around" } }>
                            <InputBox value={ activityName } placeholder="Activity Name" onChange={ (e) => setActivityName(e.target.value) } />
                            <div style={ { width: "100%" } }>
                                <Select styles={ optionStyle } options={ bucket } onChange={ setSelectedBucket } isMulti />
                            </div>
                            <div style={ { width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around" } }>
                                <DatePicker value={ startDate } onChange={ (e) => setStartDate(e) } />
                                <DatePicker value={ dueDate } place onChange={ (e) => setDueDate(e) } />
                            </div>
                        </div>
                        <div style={ { width: "47%", height: "100%", marginTop: "2vh" } }>
                            <SummaryInput value={ activitySummary } placeholder={ "Activity Summary" } onChange={ (e) => setActivitySummary(e.target.value) } />
                        </div>
                    </div>
                </div>
                <div style={ { height: "30vh" } }>
                    <div style={ { display: "flex", flexDirection: "row", width: "98.5%", border: "1px dashed black", paddingTop: "10px", paddingBottom: "10px", marginTop: "20px", borderRadius: "5px", marginLeft: "0.5vw", justifyContent: "space-between" } } onClick={ (toggle, toggleTaskModal) }>
                        <div style={ { marginLeft: "5vw", fontWeight: "bold" } }>
                            + Add new Task
                        </div>
                        <div style={ { marginRight: "9vw", fontWeight: "bold" } }>
                            Press Alt + T
                        </div>
                    </div>
                </div>
            </div>
            <ModalFooter>
                <div style={ { display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%" } }>
                    <button style={ styles.button } onClick={ () => onclick }>Close</button>
                    <button style={ styles.button } onClick={ toggle }>Add</button>
                </div>
            </ModalFooter>
        </Modal>
    )
}

export default AddActivityModal