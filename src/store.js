import { configureStore } from "@reduxjs/toolkit";
import policySlice from "./features/policy/policySlice";

const store = configureStore({
    reducer: {
        policy: policySlice,
    }
})

export default store;