import { accountReducer } from './accountSlice';
import { localeReducer } from './localeSlice';
import { configureStore } from '@reduxjs/toolkit';

// const initialState = { account: { balance: 0 }, locale: { lang: 'uk' } };


// 15:00



// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'account/deposit':
//       return {
//         ...state,
//         account: {
//           ...state.account,
//           balance: state.account.balance + action.payload,
//         },
//       };

//     case 'account/withdraw':
//       return {
//         ...state,
//         account: {
//           ...state.account,
//           balance: state.account.balance - action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };



export const store = configureStore({
  reducer: {
    account: accountReducer,
    locale: localeReducer,
  },
});


