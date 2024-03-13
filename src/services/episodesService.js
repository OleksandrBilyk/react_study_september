import {apiService} from "./apiService";
import {urls} from "../constant";

const episodesService = {
    getAll:(page) => apiService.get(urls.episodes, {params: {page}})
}

export {
    episodesService
}