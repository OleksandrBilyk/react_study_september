import {apiService} from "./apiService";
import {urls} from "../urls/urls";

const commentsService = {
    getAll: () => apiService.get(urls.url_comments),
    creating: (data) => apiService.post(urls.url_comments, data),
}

export {commentsService}