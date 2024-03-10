import {apiService} from "./apiService";
import {urls} from "../constant/urls";

const carService = {
    getAll: () => apiService.get(urls.cars.base),
    creating: (data) => apiService.post(urls.cars.base, data),
    updateById: (id, data) => apiService.put(urls.cars.byId(id), data),
    deleteById: (id) => apiService.delete(urls.cars.byId(id))
}

export {
    carService
}