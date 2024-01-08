import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api"; 

 
 
export const get_seller_request = createAsyncThunk(
    'seller/get_seller_request',
    async({ parPage,page,searchValue },{rejectWithValue, fulfillWithValue}) => {
        
        try {
             
            const {data} = await api.get(`/request-seller-get?page=${page}&&searchValue=${searchValue}&&parPage=${parPage}`,{withCredentials: true}) 
             console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            // console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

  // End Method 

  
export const get_seller = createAsyncThunk(
    'seller/get_seller',
    async(sellerId ,{rejectWithValue, fulfillWithValue}) => {
        
        try {
             
            const {data} = await api.get(`/get-seller/${sellerId}`,{withCredentials: true}) 
             console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            // console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

  // End Method 

 
export const sellerReducer = createSlice({
    name: 'seller',
    initialState:{
        successMessage :  '',
        errorMessage : '',
        loader: false,
        sellers : [], 
        totalSeller: 0,
        seller: ''
    },
    reducers : {

        messageClear : (state,_) => {
            state.errorMessage = ""
        }

    },
    extraReducers: (builder) => {
        builder
          
        .addCase(get_seller_request.fulfilled, (state, { payload }) => {
            state.sellers = payload.sellers;
            state.totalSeller = payload.totalSeller; 
        })
        .addCase(get_seller.fulfilled, (state, { payload }) => {
            state.seller = payload.seller; 
        })
 

    }

})
export const {messageClear} = sellerReducer.actions
export default sellerReducer.reducer