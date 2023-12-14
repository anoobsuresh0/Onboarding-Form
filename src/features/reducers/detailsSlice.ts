import { createSlice,PayloadAction } from "@reduxjs/toolkit";


interface DetailsState{
    selectedDetails: string;
}

const initialState: DetailsState = {
    selectedDetails: 'personal',
};


const detailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        setDetails:(state, action: PayloadAction<string>) => {
            state.selectedDetails = action.payload;
        },
    },
});

export const { setDetails } = detailsSlice.actions;
export default detailsSlice.reducer;
