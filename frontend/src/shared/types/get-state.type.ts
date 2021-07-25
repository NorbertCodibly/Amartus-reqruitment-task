import store from '../../store';

export type GetStateType = () => ReturnType<typeof store.getState>;
