import { createSlice } from "@reduxjs/toolkit";


export const authReducer = createSlice({
    name: 'auth',
    initialState:{
        successMessage :  '',
        errorMessage : '',
        loader: false,
        userInfo : ''
    },
    reducers : {

    },
    extraReducers:{

    }
})

export default authReducer.reducer