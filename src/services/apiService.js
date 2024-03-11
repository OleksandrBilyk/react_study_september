import axios from "axios";

import {baseURL} from "../constant";

const apiService = axios.create({baseURL})

export {
    apiService
}