import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    policyData: [],
    state: ''
};

export const getPolicy = createAsyncThunk(
    'getPolicy',
    async () => {
        const res = await axios.get(`http://localhost:3030`);
        console.log('res', res);
        return res.data;
    },
);

const policySlice = createSlice({
    name: 'policySlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPolicy.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(getPolicy.fulfilled, (state, action) => {
                state.status = "success";
                state.policyData = action.payload;
            })
            .addCase(getPolicy.rejected, (state) => {
                state.status = "failed";
            })
    }
});

export default policySlice.reducer;