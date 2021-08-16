import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {userList} from './slices';

const rootReducer = combineReducers({userList});
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({reducer: rootReducer});

export default store;
