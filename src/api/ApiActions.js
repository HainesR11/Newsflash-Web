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

export const getAction = async (id) => {
    const setAction = useActionStore.getState().setAction
    try{
        const responce = await newsflashServices.get("/api/actions/" + id, {})
        console.log(responce.data)
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

export const completeTask = async (id, date, user) => {
    try {
        const responce = await newsflashServices.patch("/api/actions/" + id, {  body: {completedOn: date, comepletedBy: user} })
        return console.log(responce)
    }
    catch (err) {
        console.log(err)
    }
}