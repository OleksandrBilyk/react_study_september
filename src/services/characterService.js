import {apiService} from "./apiService";
import {urls} from "../constants";

const characterService = {
    getByIds: (idcharacters) => apiService.get(urls.character.byIds(idcharacters))
}

export {
    characterService
}