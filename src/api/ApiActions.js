import newsflashServices from "../config/newsflashServices"
import { useActionStore } from "../store"



export const GetAllActions = async () => {
    //const setActions = useActionStore((state) => state.setActions)
    const setActions = useActionStore.getState().setActions
    try{
        const response = await newsflashServices.get("/api/actions", {})
         return setActions(response.data)
    }
    catch(err){
        console.log(err)
    }
}