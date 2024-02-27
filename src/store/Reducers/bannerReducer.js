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


  export const get_banner = createAsyncThunk(
    'banner/get_banner',
    async(productId ,{rejectWithValue, fulfillWithValue}) => { 
        try {
             
            const {data} = await api.get(`/banner/get/${productId}`,{withCredentials: true})  
            return fulfillWithValue(data)
        } catch (error) { 
            return rejectWithValue(error.response.data)
        }
    }
)

  // End Method 

  export const update_banner = createAsyncThunk(
    'banner/update_banner',
    async({bannerId,info} ,{rejectWithValue, fulfillWithValue}) => { 
        try {
             
            const {data} = await api.put(`/banner/update/${bannerId}`,info,{withCredentials: true})  
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
        builder
          
        .addCase(add_banner.pending, (state, { payload }) => {
            state.loader = true; 
        })
        .addCase(add_banner.rejected, (state, { payload }) => {
            state.loader = false; 
            state.errorMessage = payload.error; 
        })
        .addCase(add_banner.fulfilled, (state, { payload }) => {
            state.loader = false; 
            state.successMessage = payload.message; 
            state.banner = payload.banner; 
        })

        .addCase(get_banner.fulfilled, (state, { payload }) => {            
            state.banner = payload.banner; 
        })

        .addCase(update_banner.pending, (state, { payload }) => {
            state.loader = true; 
        })
        .addCase(update_banner.rejected, (state, { payload }) => {
            state.loader = false; 
            state.errorMessage = payload.error; 
        })
        .addCase(update_banner.fulfilled, (state, { payload }) => {
            state.loader = false; 
            state.successMessage = payload.message; 
            state.banner = payload.banner; 
        })
        

    }

})
export const {messageClear} = bannerReducer.actions
export default bannerReducer.reducer