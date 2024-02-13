import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api"; 

export const get_customers = createAsyncThunk(
    'chat/get_customers',
    async(sellerId,{rejectWithValue, fulfillWithValue}) => {
        
        try {
            const {data} = await api.get(`/chat/seller/get-customers/${sellerId}` ,{withCredentials: true}) 
            // console.log(data)
            return fulfillWithValue(data)
        } catch (error) { 
            return rejectWithValue(error.response.data)
        }
    }
)

 
 
export const chatReducer = createSlice({
    name: 'chat',
    initialState:{
        successMessage :  '',
        errorMessage : '',
        customers: [],
        messages : [],
        activeCustomer: [],
        activeSeller : [],
        activeAdmin: "",
        friends: [],
        seller_admin_message: [],
        currentSeller: {},
        currentCustomer: {},
        sellers: [],
    },
    reducers : {

        messageClear : (state,_) => {
            state.errorMessage = ""
            state.successMessage = ""
        }

    },
    extraReducers: (builder) => {
        // builder
       
        // .addCase(admin_login.fulfilled, (state, { payload }) => {
        //     state.loader = false;
        //     state.successMessage = payload.message
        //     state.token = payload.token
        //     state.role = returnRole(payload.token)
        // }) 
 
    }

})
export const {messageClear} = chatReducer.actions
export default chatReducer.reducer