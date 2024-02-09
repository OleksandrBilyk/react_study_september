import {apiService} from "./apiService";
import {urls} from "../urls/urls";

const usersService = {
    getAll: () => apiService.get(urls.url_users),
    creating: (data) => apiService.post(urls.url_users, data),

}

export {usersService}