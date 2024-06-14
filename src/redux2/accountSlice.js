import { createAction, createReducer } from '@reduxjs/toolkit';

export const deposit = createAction('account/deposit');

export const withdraw = createAction('account/withdraw');

export const accountReducer = createReducer({ balance: 0 }, builder =>
  builder
    .addCase(deposit, (state, action) => {
      state.balance += action.payload;
      // return { ...state, balance: state.balance + action.payload };
    })
    .addCase(withdraw, (state, action) => {
      state.balance -= action.payload;
      // return { ...state, balance: state.balance - action.payload };
    })
);

// 25

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
