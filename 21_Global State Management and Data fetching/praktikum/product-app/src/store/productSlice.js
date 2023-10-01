import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [],
}

const productSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        addProducts: (state, action) => {
            state.product = action.payload;
        },
        deleteProducts: (state, action) => {
            state.product = state.product.filter(
                (item) => item.id !== action.payload,
            );
        },
    }
});

export const { addProducts, deleteProducts } = productSlice.actions;
export default productSlice.reducer;