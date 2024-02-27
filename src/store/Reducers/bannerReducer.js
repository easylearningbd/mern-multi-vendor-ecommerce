import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api"; 
 
export const add_banner = createAsyncThunk(
    'banner/add_banner',
    async(info ,{rejectWithValue, fulfillWithValue}) => { 
        try {
             
            const {data} = await api.post(`/banner/add`,info,{withCredentials: true})  
            return fulfillWithValue(data)
        } catch (error) { 
            return rejectWithValue(error.response.data)
        }
    }
)

  // End Method 
 
 
export const bannerReducer = createSlice({
    name: 'banner',
    initialState:{
        successMessage :  '',
        errorMessage : '',
        loader: false,
        banners : [], 
        banner: ''
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
export const {messageClear} = bannerReducer.actions
export default bannerReducer.reducer