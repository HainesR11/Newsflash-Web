import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { useModalStore } from "../store";
import styledComponents from "styled-components";

const InputBox = styledComponents.input`
    height: 30px;
    border: 0px;
    width: 60%;
    font-size: 15px;
    border: 1px solid black;
    border-radius: 5px;
    &:focus {
        outline: none;
    }
    font-family: 'Source Sans Pro', sans-serif;
    ::placeholder {
        font-style: normal;
    }
`

const StyledButton = styledComponents.button`

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

const AddActivityModal = (show) => {

    const toggle = useModalStore((state) => state.toggleAddModal)

    return (
        <Modal isOpen={ show } size={ "xl" } style={ { width: "100vw", height: "40vh" } }>
            <ModalHeader style={ { display: "flex", justifyContent: "center", alignContent: "center" } }>
                Create New Action
            </ModalHeader>
            <div style={ { height: "70vh", display: "flex", flexDirection: "column", alignItems: "center" } }>
                <div style={{width: "100%"}}>
                    <div style={ { width: "100%", height: "20vh" } }>
                        <InputBox placeholder="Activity Name" />
                    </div>
                </div>
                <div style={ { display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%" } }>
                    <button style={ styles.button } onClick={ toggle }>Close</button>
                    <button style={ styles.button } onClick={ toggle }>Add</button>
                </div>
            </div>
        </Modal>
    )
}

export default AddActivityModal