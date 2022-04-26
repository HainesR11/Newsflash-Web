import React from 'react'

const DeleteModal = ({ task }) => {
    return (
        <Modal isOpen={ deleteModal }>
            <ModalHeader style={ { display: "flex", justifyContent: "center" } }>
                Delete Task
            </ModalHeader>
            <div>
                Are you sure you want to delete the task
            </div>
            <ModalFooter style={ { display: "flex", justifyContent: "space-between" } }>
                <button style={ {} }>Yes</button>
                <button onClick={ toggleDeleteModal }>No</button>
            </ModalFooter>
        </Modal>
    )
}