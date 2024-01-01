import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api"; 

export const categoryAdd = createAsyncThunk(
    'category/categoryAdd',
    async({ name,image },{rejectWithValue, fulfillWithValue}) => {
        
        try {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('image', image)
            const {data} = await api.post('/category-add',formData,{withCredentials: true}) 
            // console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            // console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

  
 
export const categoryReducer = createSlice({
    name: 'category',
    initialState:{
        successMessage :  '',
        errorMessage : '',
        loader: false,
        categorys : [] 
    },
    reducers : {

        messageClear : (state,_) => {
            state.errorMessage = ""
        }

    },
    extraReducers: (builder) => {
        builder
        .addCase(categoryAdd.pending, (state, { payload }) => {
            state.loader = true;
        })
        .addCase(categoryAdd.rejected, (state, { payload }) => {
            state.loader = false;
            state.errorMessage = payload.error
        }) 
        .addCase(categoryAdd.fulfilled, (state, { payload }) => {
            state.loader = false;
            state.successMessage = payload.message
            state.categorys = [...state.categorys, payload.category]
             
        })
 

    }

})
export const {messageClear} = categoryReducer.actions
export default categoryReducer.reducer