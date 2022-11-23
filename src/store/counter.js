import { createSlice } from "@reduxjs/toolkit";
const initialCounterState = {counter: 0, showCounter: true}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state){
      //  here we are allowed to use hte state directly
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    increase(state, action){
      state.counter = state.counter + action.payload;
    },
    decrease(state, action){
      state.counter = state.counter - action.payload;
    },
    toggleCounter(state){
      state.showCounter = !state.showCounter;
    }
  }
})

export const counterActions = counterSlice.actions;
export default counterSlice.reducer
