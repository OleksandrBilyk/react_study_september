import axios from "axios";

import {baseURL} from "../constant/urls";

const apiService = axios.create({baseURL});

export {
    apiService
}