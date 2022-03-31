import { useActionStore } from "../store"

export const GetAllActions = async () => {
    const setActions = useActionStore((state) => state.setActions)
    const response  = await fetch(`http://localhost:4000/api/v1/Actions`, {method: "GET"})
    const records = await response.json()
    console.log(response)
    return setActions(records.actions)
}