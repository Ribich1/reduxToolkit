import { createSlice } from '@reduxjs/toolkit';

// export const deposit = createAction('account/deposit');

// export const withdraw = createAction('account/withdraw');

// export const accountReducer = createReducer({ balance: 0 }, builder =>
//   builder
//     .addCase(deposit, (state, action) => {
//       state.balance += action.payload;
//       // return { ...state, balance: state.balance + action.payload };
//     })
//     .addCase(withdraw, (state, action) => {
//       state.balance -= action.payload;
//       // return { ...state, balance: state.balance - action.payload };
//     })
// );


// 35

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

export const { deposit, withdraw } = slice.actions;
export const accountReducer = slice.reducer;

// export const accountReducer = (state = { balance: 0 }, action) => {
//   switch (action.type) {
//     case 'account/deposit':
//       return { ...state, balance: state.balance + action.payload };
//     case 'account/withdraw':
//       return { ...state, balance: state.balance - action.payload };
//     default:
//       return state;
//   }
// };
