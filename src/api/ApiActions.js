import newsflashServices from "../config/newsflashServices"
import { useActionStore } from "../store"



export const GetAllActions = async () => {
    console.log("this will always run")
    const setActions = useActionStore((state) => state.setActions)
    try{
        console.log("running this")
        const response = await newsflashServices.get("/api/v1/actions", {})
        console.log("its running this")
       //return console.log(responce.data)
       return setActions(response)
    }
    catch(err){
        console.log(err)
    }
}