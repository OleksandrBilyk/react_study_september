import {apiService} from "./apiService";

import {urls} from "../constants/urls";

const userService = {
    getAll: () => apiService.get(urls.users),
    getByUserId: (id) => apiService.get(urls.users.byUserId(id))
}

export {
    userService
}