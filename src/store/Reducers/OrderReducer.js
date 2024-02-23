import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";  
 
export const get_admin_orders = createAsyncThunk(
    'orders/get_admin_orders',
    async({ parPage,page,searchValue },{rejectWithValue, fulfillWithValue}) => {
        
        try {
             
            const {data} = await api.get(`/admin/orders?page=${page}&&searchValue=${searchValue}&&parPage=${parPage}`,{withCredentials: true})  
            return fulfillWithValue(data)
        } catch (error) { 
            return rejectWithValue(error.response.data)
        }
    }
)

  // End Method  

 
export const OrderReducer = createSlice({
    name: 'order',
    initialState:{
        successMessage :  '',
        errorMessage : '',
        totalOrder: 0,
        order : {}, 
        myOrders: []
    },
    reducers : {

        messageClear : (state,_) => {
            state.errorMessage = ""
            state.successMessage = ""
        }

    },
    extraReducers: (builder) => {
        builder
          
        .addCase(get_admin_orders.fulfilled, (state, { payload }) => {
            state.myOrders = payload.orders;
            state.totalOrder = payload.totalOrder; 
        })
        
 

    }

})
export const {messageClear} = OrderReducer.actions
export default OrderReducer.reducer