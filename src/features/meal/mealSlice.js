import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initState = {meals : [], mealsIsLoading: false, getMealsError: false, oneMeal: {}, oneMealLoading: false, getOneMealError: false};

export const getMeals = createAsyncThunk('meal/getMeals', async (_, {rejectWithValue}) => {
    try{
        const res = await fetch(`https://foody--api.herokuapp.com/meals`);
        const data = res.json();
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
});

export const getOneMeal = createAsyncThunk('meal/getOneMeal', async (id, {rejectWithValue}) => {
    try{
        // console.log(id)
        const res = await fetch(`https://foody--api.herokuapp.com/meals/${id}`);
        const data = res.json();
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

const mealSlice = createSlice({
    name: 'meal',
    initialState: initState,
    reducers: {},
    extraReducers: {
        [getMeals.pending]: (state, action) => {
            state.mealsIsLoading = true;
            state.getMealsError = false;
        },
        [getMeals.fulfilled]: (state, action) => {
            state.meals = action.payload;
            state.mealsIsLoading = false;
            state.getMealsError = false;
        },
        [getMeals.rejected]: (state, action) => {
            state.mealsIsLoading = false;
            state.getMealsError = true;
        },


        [getOneMeal.pending]: (state, action) => {
            state.oneMealLoading = true;
            state.getOneMealError = false;
        },
        [getOneMeal.fulfilled]: (state, action) => {
            state.oneMeal = action.payload;
            state.oneMealLoading = false;
            state.getOneMealError = false;
        },
        [getOneMeal.rejected]: (state, action) => {
            state.oneMealLoading = false;
            state.getOneMealError = true;
        },
    }
});

export default mealSlice.reducer;