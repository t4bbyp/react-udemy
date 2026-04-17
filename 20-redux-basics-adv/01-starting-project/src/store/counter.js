import { createSlice } from "@reduxjs/toolkit";

//we repeat both counter & showCounter cuz
// we must set all states in all actions
// cuz each update overrides the last one
// so if one state is missing it will affect the output
// and stuff can be missing
/*
const counterReducer = (state = initialState , action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      //state.counter++ is not allowed here
      showCounter: state.showCounter,
    };

    
    //never do:
    //  state.something
    //  return state;

    //  (aka 1st change state then return)
  
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter
    };
  }

  return state;
};

const store = createStore(counterReducer);
*/

//for counter system
const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
      //++ is allowed here
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      //state.counter = state.counter + action.amount;
      state.counter = state.counter + action.payload; //payload mandatory w toolkit
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;