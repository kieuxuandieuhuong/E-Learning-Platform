import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { courseService } from "./courseService";
import { toast } from "react-toastify";


export const getCourse = createAsyncThunk("course",async(thunkAPI) => {
    try{
        return await courseService.getCourse();
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
})


const courseState={
    course:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const courseSlice = createSlice({
    name:"course",
    initialState:courseState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCourse.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getCourse.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError = false;
            state.isSuccess=true;
            state.course = action.payload;
           
        }).addCase(getCourse.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError = true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError === true) toast.error(state.message.message);
        })

    }
})

export default courseSlice.reducer;