import {apiService} from "./apiService";
import {urls} from "../constant";

const characterService = {
    getById: (id) => apiService.get(urls.character.byIds(id))

}

export {
    characterService
}