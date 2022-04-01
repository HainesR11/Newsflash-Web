import axios from "axios";
import { host } from "./envs";

export default axios.create({
    baseURL: host()
})