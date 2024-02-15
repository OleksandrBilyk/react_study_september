import {apiService} from "./apiService";

import {urls} from "../constants/urls";

const postService = {
    getByUserId: (id) => apiService.get(urls.posts.byUserId(id)),
    getByPostId: (id) => apiService.get(urls.comments.byPostId(id))
}

export {
    postService
}