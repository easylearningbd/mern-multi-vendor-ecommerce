import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api"; 
 
export const get_seller_payment_details = createAsyncThunk(
    'payment/get_seller_payment_details',
    async( sellerId,{rejectWithValue, fulfillWithValue}) => { 
        try { 
            const {data} = await api.get(`/payment/seller-payment-details/${sellerId} `,{withCredentials: true})  
            return fulfillWithValue(data)
        } catch (error) {
            // console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
) 
  // End Method 

 

 
export const PaymentReducer = createSlice({
    name: 'payment',
    initialState:{
        successMessage :  '',
        errorMessage : '',
        loader: false,
        pendingWithdrows : [], 
        successWithdrows: [], 
        totalAmount: 0,
        withdrowAmount: 0,
        pendingAmount: 0,
        availableAmount: 0,
    },
    reducers : {

        messageClear : (state,_) => {
            state.successMessage = ""
            state.errorMessage = ""
        }

    },
    extraReducers: (builder) => {
        // builder
          
        // .addCase(get_seller_request.fulfilled, (state, { payload }) => {
        //     state.sellers = payload.sellers;
        //     state.totalSeller = payload.totalSeller; 
        // })
       

    }

})
export const {messageClear} = PaymentReducer.actions
export default PaymentReducer.reducer