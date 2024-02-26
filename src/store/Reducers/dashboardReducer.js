import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api"; 

export const get_admin_dashboard_data = createAsyncThunk(
    'dashboard/get_admin_dashboard_data',
    async( _ ,{rejectWithValue, fulfillWithValue}) => { 
        try {
            const {data} = await api.get('/admin/get-dashboard-data',{withCredentials: true})             
            return fulfillWithValue(data)
        } catch (error) { 
            return rejectWithValue(error.response.data)
        }
    }
)


  
export const dashboardReducer = createSlice({
    name: 'dashboard',
    initialState:{
        totalSale : 0,
        totalOrder : 0,
        totalProduct: 0,
        totalPendingOrder : 0,
        totalSeller:0,
        recentOrder: [],
        recentMessage: []
    },
    reducers : {

        messageClear : (state,_) => {
            state.errorMessage = ""
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
export const {messageClear} = dashboardReducer.actions
export default dashboardReducer.reducer