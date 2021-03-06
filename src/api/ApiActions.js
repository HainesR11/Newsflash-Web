import newsflashServices from "../config/newsflashServices"
import { useActionStore } from "../store"



export const GetAllActions = async () => {
    const setActions = useActionStore.getState().setActions
    try {
        const response = await newsflashServices.get("/api/actions", {})
        return setActions(response.data)
    }
    catch (err) {
        console.log(err)
    }
}

export const getBuckets = async () => {
    const setBuckets = useActionStore.getState().setBuckets
    try {
        const responce = await newsflashServices.get("/api/buckets", {})
        return setBuckets(responce.data)
    }
    catch (err) {
        console.log(err)
    }
}

export const completeTask = async (id, date, user, taskId) => {
    try {
        const responce = await newsflashServices.patch("/api/actions/" + id + "/" + taskId, { completedOn: date, comepletedBy: user })
        return console.log(responce)
    }
    catch (err) {
        console.log(err)
    }
}

export const DeleteTask = async (id, taskId) => {
    try {
        const action = await newsflashServices.delete("/api/tasks/" + id + "/" + taskId)
        return console.log("Task deleted")
    }
    catch (err) {
        console.log("This has hit an error", err)
    }
}