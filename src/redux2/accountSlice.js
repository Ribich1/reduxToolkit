import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'account',
  initialState: { balance: 0 },
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
  },
});

// const slice = createSlice({
//   name: 'account',
//   initialState: { balance: 0 },
//   reducers: {
//     deposit:{reducer(state, action) {
//       state.balance += action.payload;
//     }, prepare(value) {
//       return {
//         payload:{value,id:Date.now()}
//       }
//     }},
//     withdraw(state, action) {
//       state.balance -= action.payload;
//     },
//   },
// });


export const { deposit, withdraw } = slice.actions;
export const accountReducer = slice.reducer;

console.log(deposit(5))