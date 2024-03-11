import {configureStore} from "@reduxjs/toolkit";
import {episodeReducer} from "./slices";

const store = configureStore({
    reducer: {
        episode: episodeReducer
    }
})

export {
    store
}