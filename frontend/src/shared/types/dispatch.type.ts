import store from '~/store';

// TODO Norbert -> dodać typowanie dla thunk-a -> https://redux.js.org/usage/usage-with-typescript#type-checking-redux-thunks

export type DispatchType = typeof store.dispatch;
