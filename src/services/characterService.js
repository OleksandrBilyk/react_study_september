import {apiService} from "./apiService";
import {urls} from "../constant";

const characterService = {
    getByIds: (ids) => apiService.get(urls.characters.byIds(ids))

}

export {
    characterService
}