import { createSlice } from "@reduxjs/toolkit"

export const nameTrainerSalice = createSlice({
    name:"nameTrainer",
    initialState:'',
    reducers:{
        setNameTrainer: (state, action) => action.payload

    }
})

export default nameTrainerSalice.reducer
export const {setNameTrainer} = nameTrainerSalice.actions