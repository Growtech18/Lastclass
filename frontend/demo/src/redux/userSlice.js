import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: "",
        data: []
    },
    reducers: {
        setToken: (state, action) => {
            console.log(action)
            state.token = action.payload
        },
        setData: (state, action) => {
            state.token = action.payload
        },

    },
})

export const { setToken, setData } = userSlice.actions

export default userSlice.reducer