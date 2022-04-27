import React from 'react'
import { Modal, ModalFooter, ModalHeader } from "reactstrap";
import styledComponents from 'styled-components';
import { DeleteTask } from '../../api/ApiActions';
import { useModalStore } from '../../store';

const ModalButton = styledComponents.button`
    width: 4vw;
    height: 3vh;
    border: 1px solid black;
    background-color: transparent;
    border-radius: 10px;
    cursor: pointer;
`


const DeleteModal = () => {

    const deleteModal = useModalStore((state) => state.showDeleteModal)
    const toggleDeleteModal = useModalStore((state) => state.toggleDeleteModal)
    const taskId = useModalStore((state) => state.taskId)
    const id = useModalStore((state) => state.id)
    const taskName = useModalStore((state) => state.taskName)
    const setId = useModalStore((state) => state.setId)
    const setTaskId = useModalStore((state) => state.setTaskId)
    const setTaskName = useModalStore((state) => state.setTaskName)

    const onclick = (actionId, taskid) => {
        DeleteTask(actionId, taskid)
        setId("")
        setTaskId("")
        setTaskName("")
    }

    return (
        <Modal isOpen={ deleteModal }>
            <ModalHeader style={ { display: "flex", justifyContent: "center" } }>
                Delete Task
            </ModalHeader>
            <div style={ { height: "10vh", display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: 'column' } }>
                <div>Are you sure you want to delete the task</div>
                <div>{ taskName }</div>
            </div>
            <ModalFooter style={ { display: "flex", justifyContent: "space-around" } }>
                <ModalButton onClick={() => (DeleteTask(id, taskId), toggleDeleteModal())}>Yes</ModalButton>
                <ModalButton onClick={ toggleDeleteModal }>No</ModalButton>
            </ModalFooter>
        </Modal>
    )
}
export default DeleteModal