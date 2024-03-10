import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    cars :[],
    trigger: null,
    carForUpdate: null
};

const carsSlice = createSlice({
    name: 'CarsSlice',
    initialState,
    reducers: {
        setAllCars: (state, action) => {
            state.cars = action.payload
        },
        trigger: state => {
            state.trigger = !state.trigger
        },
        setCarForUpdate: (state, actions) => {
            state.carForUpdate = actions.payload
        }

    }
})

const {reducer: carsReducer, actions} = carsSlice;

const carsActions = {
    ...actions
}

export {
    carsReducer,
    carsActions
}