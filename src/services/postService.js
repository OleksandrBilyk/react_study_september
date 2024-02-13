import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postService = {
    getByPostId: (postId) => apiService.get(urls.byPostId(postId))
}

export {postService}