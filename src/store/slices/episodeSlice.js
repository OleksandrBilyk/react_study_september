import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeService} from "../../services";

const initialState = {
    prev:null,
    next:null,
    episode:null
}

const getAll = createAsyncThunk(
    'episodeSlice/getAll',
    async ({page}, thunkAPI) =>{
        try {
            const {data} = await episodeService.getAll(page);
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }

)

const episodeSlice = createSlice({
    name:'episodeSlice',
    initialState,
    reducers:{
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                const {info:{prev, next}, result} = action.payload;
                state.prev = prev
                state.next = next
                state.episode = result
            })
})

const {reducer:episodeReducer, actions} = episodeSlice;

const episodeActions = {
    ...actions,
    getAll
}

export {
    episodeReducer,
    episodeActions
}